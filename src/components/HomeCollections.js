import { Button, Col, Card, Row, Container } from "react-bootstrap";

export default function HomeCollections() {
    return (
        <Card className="my-3">
            <Card.Header className="fw-bold fs-2">Collections</Card.Header>
            <Card.Body>
                <Card.Title>Explore the world of collectors</Card.Title>
                <Card.Text>
                    Here you can enjoy some of the most spectacular collections in the world. For more pictures, please <span className="text-primary">Sign-in</span> or <span className="text-primary">Register</span>.
                    <Container className="mt-4">
                        <Row>
                            <Col lg="2" className="text-center vertical-align-center bg-secondary">

                            </Col>
                            <Col lg="10">
                                <Row>
                                    <Col lg="12">
                                        <Card >
                                            <Card.Img style={{ height: '240px' }} variant="top" src="https://i.pinimg.com/736x/1b/a3/5e/1ba35e43580707fe88e64cf4773645d3--rubiks-cube-display-case.jpg" />
                                            <Card.Body>
                                                <Card.Title>Username</Card.Title>
                                                <Card.Text>
                                                    Small collection of cubes.
                                                </Card.Text>
                                                <Button variant="primary">Details</Button>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                </Row>
                                <Row className="my-3">
                                    <Col lg="12">
                                        <Card >
                                            <Card.Img style={{ height: '240px' }} variant="top" src="https://i.pinimg.com/originals/39/d8/15/39d8152e41aeb94998f02aedd0bf724c.jpg" />
                                            <Card.Body>
                                                <Card.Title>Username</Card.Title>
                                                <Card.Text>
                                                    Small collection of cubes.
                                                </Card.Text>
                                                <Button variant="primary">Details</Button>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col lg="12">
                                        <Card >
                                            <Card.Img style={{ height: '240px' }} variant="top" src="https://i.ytimg.com/vi/UiLbmZbZArA/hqdefault.jpg" />
                                            <Card.Body>
                                                <Card.Title>Username</Card.Title>
                                                <Card.Text>
                                                    Small collection of cubes.
                                                </Card.Text>
                                                <Button variant="primary">Details</Button>
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