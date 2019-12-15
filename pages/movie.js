import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import 'isomorphic-fetch';
import Duration from './movieDuration';
import Rate from './progress';
import data from '../data/0001.json';
import {Transition} from 'semantic-ui-react';

class Movie extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            show:true,
            details:null,
            id:this.props.data.id,
            barStyle:{width:"326px", margin:'35px auto 47px'},
            visible:true
         }
         this.handleClick = this.handleClick.bind(this)
    }

    static async getInitialProps(){
       // fetching movie poster

        const poster = await fetch(this.props.data.posterurl).then(
            res => res.blob()
            ).then(
            blob => URL.createObjectURL(blob)).catch(error =>{error} )
        
        return {posterurl:poster}   
    }

    componentDidMount(props){

       var details = require(`../data/${this.props.data.id}.json`)
       this.setState({details:details})

    }

    handleClick = (e) => {

        this.setState((prevState) => ({ visible: !prevState.visible }))

        console.log(
            this.state.details.storyline,
            this.state.details.writers,
            this.state.details.directors,
            this.state.details.actors,
            );


            document.getElementById(this.state.id).classList = 'movie_clicked';

            const watchlistButton = React.createElement('p',{className:'text_button'},'ADD TO WATCHLIST');
            ReactDOM.render(watchlistButton,document.getElementById(this.props.data.id + '_button'));

            this.setState({barStyle:
                {
                width:'212px',
                position:'absolute',
                float:"right",
                right:'24px',
                top:'14px'
            }
            })

            const storyline = 
                <div className = 'content_movie'>

                    <div id={this.props.data.id + '_content'} className='content_movie_storyline'>
                        {this.state.details.storyline}
                    </div>

                    <hr className='content_movie_shapeline'/>

                    <div className='content_movie_summary'>

                    <div className='content_movie_summary_header'>
                        <p>Director: <span>berk</span></p> 
                        <p>Writers:</p> 
                        <p>Stars:</p> 
                    </div>

                    </div>

                    


                
            </div>
            ReactDOM.render(storyline,document.getElementById(this.props.data.id + '_content'));

            




    }
        

    

    render() { 

        
    

        return (
            <div id={this.props.data.id} className='movie'>

                


                <div className='img_container'>
                    <img className='img_poster' alt={this.props.data.originalTitle + ' Poster'} src={this.props.data.posterurl} />
                    <div className='gradient'></div>
                    <div className='gradient_white'></div>
                </div>



                
                

                <div className='bg_content'>


                    <div className='name_movie'>{this.props.data.originalTitle}</div>

                    <div className='info_movie'>{this.props.data.year} · {this.props.data.genres.join(', ')} · <Duration min={this.props.data.duration}/></div>

                    <div className='rating'>{
                        this.props.data.imdbRating}
                        <span className='text-style-1'>/10</span>
                    </div>

                    <Rate id = {this.props.data.id + "_rate"} percent={this.props.data.imdbRating*10} barStyle = {this.state.barStyle} />

                    <div  id = {this.props.data.id + "_content"}>
                        
                    </div>
                    
                    <Transition
                        animation= {'bounce'}
                        duration= {200}
                        visible = {this.state.visible}
                    >
                    <button className='bg_button' onClick={this.handleClick}>
                        <p id={this.props.data.id + "_button"} className="text_button">
                            MOVIE DETAILS
                        </p>
                    </button>

                    </Transition>


                </div>

              

                
            </div>
        )
    }
}
 
export default Movie;