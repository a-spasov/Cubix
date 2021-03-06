import React from 'react';
import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../utils/firebase";
import { Button, Card, Col, Container, Form } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function LoginForm() {
    const [loginEmail, setLoginEmail] = useState("");
    const [loginPassword, setLoginPassword] = useState("");
    
    
    const login = async () => {
        try {
            await signInWithEmailAndPassword(
            auth,
            loginEmail,
            loginPassword
          );
        } catch (error) {
          console.log(error.message);
        }
    };

    return (
        <Container className="pe-0 mt-5">
            <Col lg="7" className="mx-auto">
                <Card className="my-3">
                    <Card.Header className="fw-bold fs-2">SIGN-IN</Card.Header>
                    <Card.Body>
                        <Form>
                            <Form.Group className="mt-2 mb-4" controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control 
                                    onChange={(event) => {
                                        setLoginEmail(event.target.value);
                                    }} 
                                    type="email" 
                                    placeholder="Enter email" />
                            </Form.Group>
                            <Form.Group className="mb-4" controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control 
                                    type="password" 
                                    placeholder="Password" 
                                    onChange={(event) => {
                                        setLoginPassword(event.target.value);
                                    }}/>
                            </Form.Group>
                            <Form.Text >You don't have an account? <Link to='/register' className="text-decoration-none">Register.</Link></Form.Text>             
                            <Container className="text-end p-0 mt-5">
                                <Button variant="outline-secondary" type="button" className="mt-3">Back</Button>
                                <Button variant="secondary" onClick={login} className="mt-3 ms-2">
                                    Submit
                                </Button>
                            </Container>
                        </Form>
                    </Card.Body>
                </Card>
            </Col>
        </Container>
    )
}