import Head from "next/head";
import Movie from './movie';
import movieList from '../data/movielist';
import '../styles/style.scss';

class App extends React.Component {
    render() { 

        return (  
            <React.Fragment>
                 <Head>
                    <title>Movie List - Front End Task</title>
                    <link
                        rel="stylesheet"
                        href="//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.11/semantic.min.css"
                    />
                    </Head>
                {
                movieList.map((element,id) => {
                return (<Movie id = {id} data = {element}/>)
                })
                }
            </React.Fragment>
        );
    }
}

export default App;