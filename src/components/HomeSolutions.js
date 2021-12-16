import { Button, Col, Card, Row, Container } from "react-bootstrap";

export default function HomeSolutions() {
    return (
        <Card className="my-3">
            <Card.Header className="fw-bold fs-2">SOLUTIONS</Card.Header>
            <Card.Body>
                <Card.Title>Dive into the deep</Card.Title>
                <Card.Text>
                    This is the place where you can search for solutions. Detailed instructions, hints, videos - all you need is here. To see all the solutions, please <span className="text-primary">Sign-in</span> or <span className="text-primary">Register</span>.
                    <Container className="mt-4">
                        <Row>
                            <Col lg="2" className="text-center vertical-align-center bg-secondary">

                            </Col>
                            <Col lg="10">
                                <Row>
                                    <Col lg="6">
                                        <Card >
                                            <Card.Body>
                                                <Card.Title>3x3x3</Card.Title>
                                                <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                                                <Card.Text>
                                                    Some quick example text to build on the card title and make up the bulk of
                                                    the card's content.
                                                </Card.Text>
                                                <Card.Link href="#">Details</Card.Link>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                    <Col lg="6">
                                        <Card >
                                            <Card.Body>
                                                <Card.Title>Babylon tower</Card.Title>
                                                <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                                                <Card.Text>
                                                    Detailed solution with video.
                                                </Card.Text>
                                                <Card.Link href="#">Details</Card.Link>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                </Row>
                                <Row className="my-3">
                                    <Col lg="6">
                                        <Card >
                                            <Card.Body>
                                                <Card.Title>Alexander's star</Card.Title>
                                                <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                                                <Card.Text>
                                                    Detailed solution with video. Some quick example text to build on the card title and make up the bulk of
                                                    the card's content.
                                                </Card.Text>
                                                <Card.Link href="#">Details</Card.Link>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                    <Col lg="6">
                                        <Card >
                                            <Card.Body>
                                                <Card.Title>Babylon tower</Card.Title>
                                                <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                                                <Card.Text>
                                                    Detailed solution with video.
                                                </Card.Text>
                                                <Card.Link href="#">Details</Card.Link>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col lg="6">
                                        <Card >
                                            <Card.Body>
                                                <Card.Title>3x3x3</Card.Title>
                                                <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                                                <Card.Text>
                                                    Some quick example text to build on the card title and make up the bulk of
                                                    the card's content.
                                                </Card.Text>
                                                <Card.Link href="#">Details</Card.Link>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                    <Col lg="6">
                                        <Card >
                                            <Card.Body>
                                                <Card.Title>Babylon tower</Card.Title>
                                                <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                                                <Card.Text>
                                                    Detailed solution with video.
                                                </Card.Text>
                                                <Card.Link href="#">Details</Card.Link>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </Container>
                </Card.Text>
                <Button variant="primary">More</Button>
            </Card.Body>
        </Card>
    )
}