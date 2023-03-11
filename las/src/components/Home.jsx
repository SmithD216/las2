import React from "react";
import { useState, useEffect } from "react";
import "../styles/Home.css";

export default function Home() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/photos?limit=50`)
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                setPosts(data);
            });
    }, []);

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
                        <img
                            src={
                                posts[posts.length - 1]
                                    ? posts[posts.length - 1].thumbnailUrl
                                    : "Loading"
                            }
                            className="img-responsive"
                            alt="Image"
                        />
                        <p>
                            {posts[posts.length - 1] &&
                                posts[posts.length - 1].title}
                        </p>
                    </div>
                    <div className="col-sm-4">
                        <img
                            src={
                                posts[posts.length - 2]
                                    ? posts[posts.length - 2].thumbnailUrl
                                    : "Loading"
                            }
                            className="img-responsive"
                            alt="Image"
                        />
                        <p>
                            {posts[posts.length - 2] &&
                                posts[posts.length - 2].title}
                        </p>
                    </div>
                    <div className="col-sm-4">
                        <img
                            src={
                                posts[posts.length - 3]
                                    ? posts[posts.length - 3].thumbnailUrl
                                    : "Loading"
                            }
                            className="img-responsive"
                            alt="Image"
                        />
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
