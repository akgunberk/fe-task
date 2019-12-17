import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import 'isomorphic-fetch';
import {Transition, Icon ,Button} from 'semantic-ui-react';
import Duration from './movieDuration';
import Rate from './progress';

class Movie extends Component {

    constructor(props) {
        super(props);
        this.state = { 
            show:false,
            sign:'plus',
            click:0,
            details:null,
            id:this.props.data.id,
            barStyle:{width:"326px", margin:'35px auto 47px'},
            visible:true
         }

         this.handleClick = this.handleClick.bind(this)
         this.buttonChange = this.buttonChange.bind(this)
         this.buttonChangeColor = this.buttonChangeColor.bind(this)
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
       // fetching details of the movie
       var details = require(`../data/${this.props.data.id}.json`)
       this.setState({details:details})

    }

    buttonChangeColor = (color) =>  document.getElementById(this.props.data.id + '_button_bg').style.backgroundColor = color


    buttonChange = (prop) => {
        if(prop == 0) {
            this.setState({click:1,sign:'plus'})
            const watchlistButton = <p className='text_button'>+ ADD TO WATCHLIST</p>
            ReactDOM.render(watchlistButton,document.getElementById(this.props.data.id + '_button'));
            document.getElementById(this.state.id).classList = 'movie_clicked';

        }if(prop==1){
            this.setState({click:2,sign:'minus'})
            const watchlistButton = <p className='text_button' style={{letterSpacing:'0px'}}>- REMOVE FROM WATCHLIST</p>
            ReactDOM.render(watchlistButton,document.getElementById(this.props.data.id + '_button'));

        }else{
            this.setState({click:1,sign:'plus'})
            const watchlistButton = <p className='text_button'>+ ADD TO WATCHLIST</p>
            ReactDOM.render(watchlistButton,document.getElementById(this.props.data.id + '_button'));
            document.getElementById(this.state.id).classList = 'movie_clicked';


        }
    }

    handleClick = (e) => {

        //change button style
        this.buttonChange(this.state.click)

        //update state
        this.setState((prevState) => ({
            ...prevState, 
            visible: !prevState.visible,
            show:true,
            barStyle:
                {
                width:'212px',
                position:'absolute',
                float:"right",
                right:'24px',
                top:'14px'
                } 
            })
        )

        //change stylesheet
        document.getElementById(this.state.id).classList = 'movie_clicked';

        

    }
        
    render() { 
//        <Icon style={{position:'relative',right:'-32px',bottom:'-32px'}}  size='large' circular name={this.state.sign} inverted color='orange'/>


        //tiny plus button changes color and affect addButton on click
        const plusButton = (this.state.show == true) ? 
            <Button onClick={this.handleClick} style={{ position:'absolute',
                                                        zIndex:"999",
                                                        backgroundColor:this.state.click == 2 ? '#f24545': '#ff6000',borderRadius:'50%', 
                                                        borderColor:'none',
                                                        bottom:'-22px',
                                                        right:'-22px',
                                                        width:'44px',
                                                        height:'44px'}
                                                    } 
                                                        circular color='black' size='large' icon={this.state.sign}>
            </Button> : null


        //movie details
        const movieDetails = (this.state.show == true) ?

            <div className = 'content_movie'>

                <div id={this.props.data.id + '_content'} className='content_movie_storyline'> {this.state.details.storyline} </div>

                <hr className='content_movie_shapeline'/>

                <div className='content_movie_summary'>

                    <div className='content_movie_summary_definition'>
                                      
                        {   (this.state.details.directors.length < 3) ? 
                                <p> <span className='content_movie_summary_header'> Director: </span> {this.state.details.directors.slice(0,3).join(', ')} </p>   : 
                                <p> <span className='content_movie_summary_header'> Director: </span> {this.state.details.directors.slice(0,2).join(', ')} <span> {this.state.details.directors.length - 2} | more credits >>  </span></p> 
                        }

                        {   (this.state.details.writers.length < 3) ? 
                                <p> <span style={{marginRight:'2px'}} className='content_movie_summary_header'> Writers: </span> {this.state.details.writers.slice(0,3).join(', ')} </p>   : 
                                <p> <span className='content_movie_summary_header'> Writers: </span> {this.state.details.writers.slice(0,2).join(', ')} <span> {this.state.details.writers.length - 2} | more credits >>  </span></p> 
                        }

                        {   (this.state.details.actors.length <= 3) ? 
                                <p> <span style={{marginRight:'18px'}} className='content_movie_summary_header'> Stars: </span> {this.state.details.actors.slice(0,3).join(', ')} </p>   : 
                                <p> <span className='content_movie_summary_header'> Stars: </span> {this.state.details.actors.slice(0,3).join(', ')} <span> | See full cast and crew >>  </span></p> 
                        }
                                
                    </div>

                </div>

            </div> : null


        return (

            <div id={this.props.data.id} className='movie'>

                <div className='img_container' id={this.props.data.id + "_img"}>

                    <img className='img_poster' alt={this.props.data.originalTitle + ' Poster'} src={this.props.data.posterurl}/>

                    {plusButton} 

                    <div className='gradient'></div>

                    <div className='gradient_white'></div>

                </div>

                <div className='bg_content'>

                    <div className='name_movie'>{this.props.data.originalTitle}</div>

                    <div className='info_movie'>{this.props.data.year} · {this.props.data.genres.join(', ')} · <Duration min={this.props.data.duration}/>  </div>

                    <div className='rating'>
                        { (`${this.props.data.imdbRating}`).length == 1 ? this.props.data.imdbRating + '.0' : this.props.data.imdbRating }    
                        <span className='text-style-1'>/10</span>
                    </div>

                    <Rate id = {this.props.data.id + "_rate"} percent={this.props.data.imdbRating*10} barStyle = {this.state.barStyle} />

                    {movieDetails}
                    
                    <Transition
                        animation= {'bounce'}
                        duration= {200}
                        visible = {this.state.visible}
                    >

                        <button style= {this.state.click == 2 ? {backgroundColor:'#f24545'} : {backgroundColor:'#ff6000'} } className='bg_button' onClick={this.handleClick}>

                            <p id={this.props.data.id + "_button"} className="text_button"> MOVIE DETAILS </p>

                        </button>

                    </Transition>

                </div>

            </div>
        )
    }
}
 
export default Movie;