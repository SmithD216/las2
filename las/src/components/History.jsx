import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../styles/History.css";

export default function History() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/photos`)
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                setPosts(data);
            });
    }, []);

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
