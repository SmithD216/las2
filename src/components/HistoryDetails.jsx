import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import "../styles/HistoryDetails.css";
import useFetch from "../hooks/useFetch";
export default function HistoryDetails() {
    const { picture } = useParams();
    const { data: detail } = useFetch(
        `https://jsonplaceholder.typicode.com/photos?${picture}`
    );

    return detail[picture] ? (
        <div id="history-detail-card" className="card mx-auto mt-3 mb-3">
            <a href={detail[picture].url}>
                <img
                    className="history-detail-image card-img-top"
                    alt="picture"
                    src={detail[picture].url}
                />
            </a>
            <div className="card-body">
                <h4 className="card-title">{detail[picture].title}</h4>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Ullam assumenda totam fugiat alias mollitia ea, eveniet
                    magni eligendi delectus sit itaque id. Eius, id vel.
                    Quisquam necessitatibus ipsam ducimus facere?
                </p>
            </div>
        </div>
    ) : (
        <div>Loading...</div>
    );
}
