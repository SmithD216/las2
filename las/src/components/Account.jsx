import React from "react";
import "../styles/Account.css";

export default function Account() {
    return (
        <>
            <div>
                <div className="card mb-4">
                    <div className="card-body text-center">
                        <img
                            src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp"
                            alt="avatar"
                            className="rounded-circle img-fluid"
                            id="account-image"
                        />
                        <h5 className="my-3">Dylan Smith</h5>
                        <p className="text-muted mb-1">Full Stack Developer</p>
                        <p className="text-muted mb-4">Glasgow</p>
                        <div className="d-flex justify-content-center mb-2">
                            <button type="button" className="btn btn-primary">
                                Follow
                            </button>
                            <button
                                type="button"
                                className="btn btn-outline-primary ms-1"
                            >
                                Message
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
