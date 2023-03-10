import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export default function HistoryDetails() {
    const { picture } = useParams();
    const [detail, setDetail] = useState([1]);
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/photos`)
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                setDetail(data);
            });
    }, []);

    return detail[picture] ? (
        <div>{detail[picture].title}</div>
    ) : (
        <div>Loading...</div>
    );
}
