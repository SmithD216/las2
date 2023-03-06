import React from "react";
import "../styles/History.css";

export default function History() {
    let elements = [
        "picture 1",
        "picture 2",
        "picture 3",
        "picture 4",
        "picture 5",
        "picture 6",
        "picture 7",
        "picture 8",
        "picture 9",
    ];
    const display = elements.map((element, index) => {
        return (
            <div className="history-thumbnail" key={index}>
                <img
                    className="history-source"
                    src="https://i.kym-cdn.com/photos/images/newsfeed/000/218/968/2bf.png"
                    alt={element}
                />
                <p className="history-title">{element}</p>
            </div>
        );
    });

    return <div id="history-container">{display}</div>;
}
