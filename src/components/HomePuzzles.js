import { Button, Col, Card, Row, Container } from "react-bootstrap";

export default function HomePuzzles() {
    return (
        <Card className="my-3">
            <Card.Header className="fw-bold fs-2">PUZZLES</Card.Header>
            <Card.Body>
                <Card.Title>Puzzle's library</Card.Title>
                <Card.Text>
                Here you'll find detailed information (for example: date of release, name of inventor, etc.) about the latest puzzles added to our library. For more puzzles, please <span className="text-primary">Sign-in</span> or <span className="text-primary">Register</span>.
                    <Container className="mt-4">
                        <Row>
                            <Col lg="2" className="text-center vertical-align-center bg-secondary">

                            </Col>
                            <Col lg="10">
                                <Row>
                                    <Col lg="3">
                                        <Card >
                                            <Card.Img variant="top" src="https://www.jaapsch.net/puzzles/images/tetramin.jpg" />
                                            <Card.Body>
                                                <Card.Title>Tetraminx</Card.Title>
                                                <Card.Text>
                                                    Category name
                                                </Card.Text>
                                                <Button variant="primary">Explore</Button>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                    <Col lg="3">
                                        <Card >
                                            <Card.Img variant="top" src="https://www.jaapsch.net/puzzles/images/tetramin.jpg" />
                                            <Card.Body>
                                                <Card.Title>Tetraminx</Card.Title>
                                                <Card.Text>
                                                    Category name
                                                </Card.Text>
                                                <Button variant="primary">Explore</Button>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                    <Col lg="3">
                                        <Card >
                                            <Card.Img variant="top" src="https://www.jaapsch.net/puzzles/images/jingpyra.jpg" />
                                            <Card.Body>
                                                <Card.Title>Tetraminx</Card.Title>
                                                <Card.Text>
                                                    Category name
                                                </Card.Text>
                                                <Button variant="primary">Explore</Button>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                    <Col lg="3">
                                        <Card >
                                            <Card.Img variant="top" src="https://cubezz.com/images/201610/goods_img/5082_P_1477625781833.jpg" />
                                            <Card.Body>
                                                <Card.Title>Skewb</Card.Title>
                                                <Card.Text>
                                                    Category name
                                                </Card.Text>
                                                <Button variant="primary">Explore</Button>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                </Row>
                                <Row className="mt-3">
                                    <Col lg="3">
                                        <Card >
                                            <Card.Img variant="top" src="https://logicbg.com/wp-content/uploads/2019/05/%D0%BA%D1%83%D0%B1-Axis.jpg" />
                                            <Card.Body>
                                                <Card.Title>Axis</Card.Title>
                                                <Card.Text>
                                                    Category name
                                                </Card.Text>
                                                <Button variant="primary">Explore</Button>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                    <Col lg="3">
                                        <Card >
                                            <Card.Img variant="top" src="https://www.lovech.bg/uploads/posts/rubik-kub.jpg" />
                                            <Card.Body>
                                                <Card.Title>2x2x2</Card.Title>
                                                <Card.Text>
                                                    Category name
                                                </Card.Text>
                                                <Button variant="primary">Explore</Button>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                    <Col lg="3">
                                        <Card >
                                            <Card.Img variant="top" src="https://www.lovech.bg/uploads/posts/rubik-kub.jpg" />
                                            <Card.Body>
                                                <Card.Title>2x2x2</Card.Title>
                                                <Card.Text>
                                                    Category name
                                                </Card.Text>
                                                <Button variant="primary">Explore</Button>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                    <Col lg="3">
                                        <Card >
                                            <Card.Img variant="top" src="https://cubezz.com/images/201610/goods_img/5082_P_1477625781833.jpg" />
                                            <Card.Body>
                                                <Card.Title>Skewb</Card.Title>
                                                <Card.Text>
                                                    Category name
                                                </Card.Text>
                                                <Button variant="primary">Explore</Button>
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