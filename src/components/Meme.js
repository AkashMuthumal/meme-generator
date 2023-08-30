import React from "react";
import "../style/Meme.css";

export default function Meme() {
    const [meme, setMeme] = React.useState({
        topText: "Shut up",
        bottomText: "Take my money",
        randomImage: "https://i.imgflip.com/30b1gx.jpg",
    });

    const [memeData, setMemeData] = React.useState([])

    React.useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
            .then((res) => res.json())
            .then((data) => setMemeData(data));
    }, []);


    function getRandomImage() {
        const memeArray = memeData.data.memes;
        const randomNumber = Math.floor(Math.random() * memeArray.length);
        const url = memeArray[randomNumber].url;

        setMeme((prevMeme) => {
            return { ...prevMeme, randomImage: url };
        });
    }

    function handleChange(event) {
        const { name, value } = event.target;

        setMeme((prevMeme) => {
            return {
                ...prevMeme,
                [name]: value,
            };
        });
    }

    return (
        <div className="meme-container">
            <div className="form-container">
                <div className="input-container">
                    <input
                        type="text"
                        placeholder="Shut up"
                        name="topText"
                        value={meme.topText}
                        onChange={handleChange}
                    />
                    <input
                        type="text"
                        placeholder="and take my money"
                        name="bottomText"
                        value={meme.bottomText}
                        onChange={handleChange}
                    />
                </div>
                <button className="getMemeButton" onClick={getRandomImage}>
                    Get a new meme image 🖼
                </button>
            </div>
            <div className="image-container">
                <img src={meme.randomImage} alt="" className="meme-image" />

                <p className="meme-text top">{meme.topText}</p>
                <p className="meme-text bottom">{meme.bottomText}</p>
            </div>
        </div>
    );
}
