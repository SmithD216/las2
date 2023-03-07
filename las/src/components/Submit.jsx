import React from "react";
import "../styles/Submit.css";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

export default function Submit() {
    return (
        <div id="submission-form" className="mt-5 mx-auto">
            <Form className="submissions">
                <Form.Group className="mb-3" controlId="formTitle">
                    <Form.Label>Title</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter title of work"
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formUrl">
                    <Form.Label>URL</Form.Label>
                    <Form.Control type="url" placeholder="https://imgur.com/" />
                </Form.Group>
                <Button
                    variant="primary"
                    type="submit"
                    className="submit-button mx-auto d-md-block"
                >
                    Submit
                </Button>
            </Form>
        </div>
    );
}
