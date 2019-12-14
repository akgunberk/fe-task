import React, {Component} from 'react';
import 'isomorphic-fetch';
import Duration from './movieDuration';
import Rate from './progress';

class Movie extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            show:true,
         }
    }

    static async getInitialProps(){
       // fetching movie poster

        const poster = await fetch(this.props.data.posterurl).then(
            res => res.blob()
            ).then(
            blob => URL.createObjectURL(blob)).catch(error =>{error} )
        
        return {posterurl:poster}   
    }

    

    render() { 

        
    

        return (
            <div className='movie'>

                
                <div className='bg_img_10px_blur'>

                    <div className='img_container'>
                        <img className='img_poster' alt={this.props.data.originalTitle + ' Poster'} src={this.props.data.posterurl} />
                    </div>

                    <div className='gradient'></div>


                </div>
                

                <div className='bg_content'>

                    <div className='name_movie'>{this.props.data.originalTitle}</div>

                    <div className='info_movie'>{this.props.data.year} · {this.props.data.genres.join(', ')} · <Duration min={this.props.data.duration}/></div>

                    <div className='rating'>{
                        this.props.data.imdbRating}
                        <span className='text-style-1'>/10</span>
                    </div>

                    <Rate percent={this.props.data.imdbRating*10}/>

                    <button className='bg_button'>
                        <p className="text_button">
                            MOVIE DETAILS
                        </p>
                    </button>

                </div>

              

                
            </div>
        )
    }
}
 
export default Movie;