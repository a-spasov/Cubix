import { Button, Col, Card, Container, Form } from "react-bootstrap";

export default function Contacts() {
    return (
        <Container className="pe-0 mt-5">
            <Col lg="7" className="mx-auto">
                <Card className="my-3">
                    <Card.Header className="fw-bold fs-2">CONTACT US</Card.Header>
                    <Card.Body>
                        <Form>
                            <Form.Group className="mb-4 mt-2" controlId="ContactsInput1">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" placeholder="Enter e-mail..." />
                            </Form.Group>
                            <Form.Group className="mb-4" controlId="ContactsInput2">
                                <Form.Label>Title</Form.Label>
                                <Form.Control type="text" placeholder="Enter title..." />
                            </Form.Group>
                            <Form.Group className="mb-4" controlId="ContactsTextarea1">
                                <Form.Label>Your message</Form.Label>
                                <Form.Control as="textarea" rows={5} placeholder="Enter text..." />
                            </Form.Group>
                            <Container className="text-end p-0 mt-5">
                                <Button variant="outline-secondary" type="button" className="mt-3">Back</Button>
                                <Button variant="secondary" type="submit" className="mt-3 ms-2">
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