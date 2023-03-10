import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import "../styles/HistoryDetails.css";

export default function HistoryDetails() {
    const { picture } = useParams();
    const [detail, setDetail] = useState([1]);
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/photos?${picture}`)
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                setDetail(data);
            });
    }, []);

    return detail[picture] ? (
        <div id="history-detail-card">
            <img
                className="history-detail-image d-block mx-auto mt-3 mb-3"
                alt="picture"
                src={detail[picture].url}
            />
        </div>
    ) : (
        <div>Loading...</div>
    );
}
