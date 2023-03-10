import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../styles/Home.css";
import useFetch from "../hooks/useFetch";

export default function Home() {
    const { data: posts } = useFetch(
        `https://jsonplaceholder.typicode.com/photos`
    );

    return (
        <>
            <div id="home-jumbotron" className="p-5 bg-light rounded-3">
                <div className="container-fluid py-5">
                    <h1 className="display-5 fw-bold">Last Artist Standing</h1>
                    <p className="col-md-8 fs-4">
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Excepturi, reprehenderit perspiciatis aperiam
                        totam minima voluptas doloribus rem consequuntur beatae
                        commodi neque ipsum ab repellat cupiditate, impedit,
                        culpa quae explicabo sit!
                    </p>
                </div>
            </div>
            <div className="container text-center mt-4 home-featured-container">
                <h3>Latest Posts</h3>
                <br />
                <div className="row">
                    <div className="col-sm-4">
                        <Link to={`/history/${posts.length - 1}`}>
                            <img
                                src={
                                    posts[posts.length - 1]
                                        ? posts[posts.length - 1].thumbnailUrl
                                        : "Loading"
                                }
                                className="img-responsive mb-3"
                                alt="Image"
                            />
                        </Link>
                        <p>
                            {posts[posts.length - 1] &&
                                posts[posts.length - 1].title}
                        </p>
                    </div>
                    <div className="col-sm-4">
                        <Link to={`/history/${posts.length - 2}`}>
                            <img
                                src={
                                    posts[posts.length - 2]
                                        ? posts[posts.length - 2].thumbnailUrl
                                        : "Loading"
                                }
                                className="img-responsive mb-3"
                                alt="Image"
                            />
                        </Link>
                        <p>
                            {posts[posts.length - 2] &&
                                posts[posts.length - 2].title}
                        </p>
                    </div>
                    <div className="col-sm-4">
                        <Link to={`/history/${posts.length - 3}`}>
                            <img
                                src={
                                    posts[posts.length - 3]
                                        ? posts[posts.length - 3].thumbnailUrl
                                        : "Loading"
                                }
                                className="img-responsive mb-3"
                                alt="Image"
                            />
                        </Link>
                        <p>
                            {posts[posts.length - 3] &&
                                posts[posts.length - 3].title}
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}
