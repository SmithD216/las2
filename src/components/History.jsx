import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../styles/History.css";
import useFetch from "../hooks/useFetch";

export default function History() {
    const { data: posts } = useFetch(
        `https://jsonplaceholder.typicode.com/photos?_limit=20`
    );

    const display = posts.slice(0, 10).map((element, index) => {
        return (
            <div className="history-thumbnail" key={element.id}>
                <Link to={`/history/${index}`}>
                    <img
                        className="history-source"
                        alt="picture"
                        src={element.thumbnailUrl}
                    />
                </Link>

                <p className="history-title">{element.title}</p>
            </div>
        );
    });

    return (
        <>
            {display ? (
                <div id="history-container">{display}</div>
            ) : (
                <div>Loading...</div>
            )}
        </>
    );
}
