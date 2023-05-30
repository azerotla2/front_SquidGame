import {useState} from "react";
import './App.css';
import {ReactComponent as Loader} from "./Loader.svg";

function App() {
    const [joke, setJoke] = useState(null);
    const [imageUrl, setImageUrl] = useState(null);
    const [isLoading, setLoading] = useState(false);

    const onButtonClick = async () => {
        setLoading(true);
        try {
            const [jokeResponse, imageResponse] = await Promise.all([fetch('https://api.chucknorris.io/jokes/random'), fetch('https://cataas.com/cat?json=true')]);

            const [jokeData, imageData] = await Promise.all([jokeResponse.json(), imageResponse.json()]);

            setJoke(jokeData.value);
            setImageUrl(`https://cataas.com/${imageData.url}`);
        } catch (e) {
            console.error(e);
        } finally {
            setLoading(false);
        }
    }

    return (
        <div className="container">
            <h1 className="title">Best Web App In The World</h1>
            <p className="slogan">What can be better than image of cats? Cats with jokes about Chuck Norris!</p>
            <button className="button" onClick={onButtonClick}>Entertain Me!</button>
            <div className="content-container">
                {isLoading ? <Loader/> : joke && imageUrl && <><img className="image" alt="cat"
                                                                    src={imageUrl}/>
                    <p className="joke">{joke}</p></>}
            </div>
        </div>
    );
}

export default App;
