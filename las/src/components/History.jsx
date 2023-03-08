import React from "react";
import { Link } from "react-router-dom";
import "../styles/History.css";

export default function History() {
    let elements = [
        {
            picture: "Picture 1",
            url: "https://www.shutterstock.com/image-illustration/nine-square-coloured-geometric-grid-600w-1861648129.jpg",
        },
        {
            picture: "Picture 2",
            url: "https://www.shutterstock.com/image-illustration/nine-square-coloured-geometric-grid-600w-1861648129.jpg",
        },
        {
            picture: "Picture 3",
            url: "https://www.shutterstock.com/image-illustration/nine-square-coloured-geometric-grid-600w-1861648129.jpg",
        },
        {
            picture: "Picture 4",
            url: "https://www.shutterstock.com/image-illustration/nine-square-coloured-geometric-grid-600w-1861648129.jpg",
        },
        {
            picture: "Picture 5",
            url: "https://www.shutterstock.com/image-illustration/nine-square-coloured-geometric-grid-600w-1861648129.jpg",
        },
    ];
    const display = elements.map((element, index) => {
        return (
            <div className="history-thumbnail" key={index}>
                <Link to={`/history/${index + 1}`}>
                    <img
                        className="history-source"
                        src={element.url}
                        alt={element.picture}
                    />
                </Link>

                <p className="history-title">{element.picture}</p>
            </div>
        );
    });

    return <div id="history-container">{display}</div>;
}
