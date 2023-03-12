import React from "react";
import { useState } from "react";
import "../styles/Account.css";

import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";

export default function Account() {
    const [follow, setFollow] = useState(false);

    function followed() {
        setFollow((prevFollow) => !prevFollow);
    }

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <div className="card mb-4">
                <div className="card-body text-center">
                    <img
                        src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp"
                        alt="avatar"
                        className="rounded-circle img-fluid"
                        id="account-image"
                    />
                    <h5 className="my-3">Artist Name</h5>
                    <p className="text-muted mb-1">Art Medium</p>
                    <p className="text-muted mb-4">Location</p>
                    <div className="d-flex justify-content-center mb-2">
                        <button
                            type="button"
                            className="btn btn-primary"
                            onClick={followed}
                        >
                            {follow ? "Followed" : "Follow"}
                        </button>
                        <button
                            type="button"
                            className="btn btn-outline-primary ms-1"
                            onClick={handleShow}
                        >
                            Message
                        </button>
                    </div>
                </div>
            </div>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Message Artist</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group
                            className="mb-3"
                            controlId="exampleForm.ControlInput1"
                        >
                            <Form.Label>Your email address</Form.Label>
                            <Form.Control
                                type="email"
                                placeholder="name@example.com"
                                autoFocus
                            />
                        </Form.Group>
                        <Form.Group
                            className="mb-3"
                            controlId="exampleForm.ControlTextarea1"
                        >
                            <Form.Label>Your message</Form.Label>
                            <Form.Control as="textarea" rows={3} />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Send Message
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}
