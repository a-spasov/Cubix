import { Modal } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { useState } from "react";
import { Form } from "react-bootstrap";

export default function Contacts() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
            <Button variant="outline-secondary" onClick={handleShow} className="mb-5">
                Contact us!
            </Button>
            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Contact us</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3" controlId="ContactsInput1">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter e-mail..." />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="ContactsInput2">
                            <Form.Label>Title</Form.Label>
                            <Form.Control type="text" placeholder="Enter title..." />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="ContactsTextarea1">
                            <Form.Label>Your message</Form.Label>
                            <Form.Control as="textarea" rows={3} placeholder="Enter text..." />
                        </Form.Group>
                        <Button variant="primary" type="submit" className="mb-3">Send</Button>
                    </Form>
                </Modal.Body>
            </Modal>
        </>
    )
}