import React from "react";

export default function History() {
    let elements = [
        "picture1",
        "picture2",
        "picture3",
        "picture4",
        "picture5",
        "picture6",
        "picture7",
        "picture8",
        "picture9",
    ];
    const display = elements.map((element, index) => {
        return (
            <div className="history-picture" key={index}>
                {element}
            </div>
        );
    });

    return <div id="history-container">{display}</div>;
}
