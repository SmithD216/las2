import React from "react";
import { useState } from "react";
import "../styles/Submit.css";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Container } from "react-bootstrap";

export default function Submit() {
    const [urlValue, setUrlValue] = useState("");
    const onChange = (e) => {
        setUrlValue(e.target.value);
    };
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
                    <Form.Control
                        type="url"
                        placeholder="https://imgur.com/"
                        onChange={onChange}
                    />
                </Form.Group>
                <Container>
                    <img
                        id="submit-preview"
                        className="img-fluid rounded d-block mx-auto mb-2"
                        src={urlValue}
                        alt=""
                    />
                </Container>
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
