import React from "react";
import "../styles/History.css";

export default function History() {
    let elements = [
        {
            picture: "Picture 1",
            url: "https://i.kym-cdn.com/photos/images/newsfeed/000/218/968/2bf.png",
        },
        {
            picture: "Picture 2",
            url: "https://i.kym-cdn.com/photos/images/newsfeed/000/218/968/2bf.png",
        },
        {
            picture: "Picture 3",
            url: "https://i.kym-cdn.com/photos/images/newsfeed/000/218/968/2bf.png",
        },
        {
            picture: "Picture 4",
            url: "https://i.kym-cdn.com/photos/images/newsfeed/000/218/968/2bf.png",
        },
        {
            picture: "Picture 5",
            url: "https://i.kym-cdn.com/photos/images/newsfeed/000/218/968/2bf.png",
        },
    ];
    const display = elements.map((element, index) => {
        return (
            <div className="history-thumbnail" key={index}>
                <img
                    className="history-source"
                    src={element.url}
                    alt={element.picture}
                />
                <p className="history-title">{element.picture}</p>
            </div>
        );
    });

    return <div id="history-container">{display}</div>;
}
