import { Card, Button, Row, Col, Container } from "react-bootstrap";
import PagePagination from "./PagePagination";

export default function SolutionsCatalog() {
    return (
        <Container className="pe-0 mt-4">
            <Card className="my-3">
                <Card.Header className="fw-bold fs-2">SOLUTIONS</Card.Header>
                <Card.Body>
                    <Card.Title>The ultimate guide for any puzzle</Card.Title>
                    <Card.Text>
                        Here you'll find most detailed information about any kind of puzzles. Go and treat yourself!
                        <Container className="mt-4">
                            <Row className="mt-3">
                                <Col>
                                    <Card className="h-100">
                                        <Card.Body>
                                            <Card.Title>Babylon tower</Card.Title>
                                            <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                                            <Card.Text className="mt-4">
                                                Detailed solution with video.
                                            </Card.Text>
                                            <Card.Link href="#">Details</Card.Link>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col>
                                    <Card className="h-100">
                                        <Card.Body>
                                            <Card.Title>Alexander's star</Card.Title>
                                            <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                                            <Card.Text className="mt-4">
                                                Detailed solution with video. Some quick example text to build on the card title and make up the bulk of
                                                the card's content.
                                            </Card.Text>
                                            <Card.Link href="#">Details</Card.Link>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            </Row>
                            <Row className="mt-3">
                                <Col>
                                    <Card className="h-100">
                                        <Card.Body>
                                            <Card.Title>3x3x3</Card.Title>
                                            <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                                            <Card.Text className="mt-4">
                                                Some quick example text to build on the card title and make up the bulk of
                                                the card's content.
                                            </Card.Text>
                                            <Card.Link href="#" >Details</Card.Link>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col>
                                    <Card className="h-100">
                                        <Card.Body>
                                            <Card.Title>Babylon tower</Card.Title>
                                            <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                                            <Card.Text className="mt-4">
                                                Detailed solution with video.
                                            </Card.Text>
                                            <Card.Link href="#">Details</Card.Link>
                                        </Card.Body>
                                    </Card>
                                </Col>

                            </Row>
                            <Row className="mt-3">
                                <Col>
                                    <Card className="h-100">
                                        <Card.Body>
                                            <Card.Title>3x3x3</Card.Title>
                                            <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                                            <Card.Text className="mt-4">
                                                Some quick example text to build on the card title and make up the bulk of
                                                the card's content.
                                            </Card.Text>
                                            <Card.Link href="#" >Details</Card.Link>
                                        </Card.Body>
                                    </Card>
                                </Col>

                                <Col>
                                    <Card className="h-100">
                                        <Card.Body>
                                            <Card.Title>Alexander's star</Card.Title>
                                            <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                                            <Card.Text className="mt-4">
                                                Detailed solution with video. Some quick example text to build on the card title and make up the bulk of
                                                the card's content.
                                            </Card.Text>
                                            <Card.Link href="#">Details</Card.Link>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            </Row>
                        </Container>
                    </Card.Text>
                    <PagePagination />
                    <Button variant="primary" >Home</Button>
                </Card.Body>
            </Card>
        </Container>
    )
}