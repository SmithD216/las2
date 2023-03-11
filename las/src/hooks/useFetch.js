import { useState, useEffect } from "react";

const useFetch = function (url) {
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch(url)
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                setData(data);
            });
    }, []);
    return { data };
};

export default useFetch;
