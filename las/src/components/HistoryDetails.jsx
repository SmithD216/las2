import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

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
                console.log(detail);
            });
    }, []);

    return detail[picture] ? (
        <div>
            <img
                className="history-detail-image"
                alt="picture"
                src={detail[picture].url}
            />
        </div>
    ) : (
        <div>Loading...</div>
    );
}
