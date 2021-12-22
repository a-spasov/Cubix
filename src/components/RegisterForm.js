import React from 'react';
import { useState } from "react";
import { createUserWithEmailAndPassword, onAuthStateChanged, updateProfile } from "firebase/auth";
import { auth } from "../utils/firebase";
import { Button, Card, Container, Col, Form } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function RegisterForm() {
    const [registerName, setRegisterName] = useState("");
    const [registerEmail, setRegisterEmail] = useState("");
    const [registerPassword, setRegisterPassword] = useState("");
    const [user, setUser] = useState({});

    onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser);
    });

    
    const register = async () => {
        try {
            let user = await createUserWithEmailAndPassword(
            auth,
            registerEmail,
            registerPassword
          );
          
          await updateProfile(auth.currentUser, { displayName: registerName }).catch(
            (err) => console.log(err)
          );
        } catch (error) {
          alert(error.message);
        }
    };

    return (
        <Container className="pe-0 mt-5">
            <Col lg="7" className="mx-auto">
                <Card className="my-3">
                    <Card.Header className="fw-bold fs-2">REGISTRATION</Card.Header>
                    <Card.Body>
                        <Form>
                            
                            <Form.Group className="mb-4 mt-2" controlId="formBasicUsername">
                                <Form.Label>Username</Form.Label>
                                <Form.Control 
                                type="text" 
                                placeholder="Enter username..."
                                onChange={(event) => {
                                    setRegisterName(event.target.value);
                                    }} />
                            </Form.Group>                    
                            <Form.Group className="mb-4" controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control  
                                    type="email" 
                                    placeholder="Enter email..." 
                                    onChange={(event) => {
                                        setRegisterEmail(event.target.value);
                                        }}/>
                                <Form.Text className="text-muted fst-italic">
                                    * We'll never share your email with anyone else.
                                </Form.Text>
                            </Form.Group>
                            <Form.Group className="mb-4" controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Enter password..." onChange={(event) => {setRegisterPassword(event.target.value);}}/>
                            </Form.Group>
                            {/* 
                            <Form.Group className="mb-4" controlId="formBasicRepeatPass">
                                <Form.Label>Repeat password </Form.Label>
                                <Form.Control type="password" placeholder="Enter password..." />
                            </Form.Group>*/}

                            <Form.Text>You have an account? <Link to="/login" className="text-decoration-none">Sign-in.</Link></Form.Text>
                            <Container className="text-end p-0 mt-5">
                                <Button variant="outline-secondary" type="button" className="mt-3">Back</Button>
                                <Button variant="secondary" onClick={register} className="mt-3 ms-2">
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