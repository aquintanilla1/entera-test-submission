import React, {useState, useEffect} from "react";

function Painting(props) {

    const [title, setTitle] = useState("");
    const [artist, setArtist] = useState("");
    const [imageURL, setImageURL] = useState("");

    useEffect(() => {
        console.log("Url is " + props.url);
        fetch("http://localhost:3001/index/painting/" + encodeURIComponent(props.url))
            .then(response => response.json())
            .then(data => {
                setTitle(data.title);
                setArtist(data.artist);
                setImageURL(data.imageURL);
            });
    });

    return (
        <>
            <h1>{title}</h1>
            <h2>{artist}</h2>
            <img src={imageURL} alt={title}></img>
        </>
    );
}

export default Painting;