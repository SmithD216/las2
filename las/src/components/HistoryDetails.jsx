import React from "react";
import { useParams } from "react-router-dom";

export default function HistoryDetails() {
    const { picture } = useParams();
    return <div>{picture}</div>;
}
