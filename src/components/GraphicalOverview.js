import { Card, Badge, Button, Row, Col, Container, Nav } from "react-bootstrap";

export default function GraphicalOverview() {
    return (
        <Container className="pe-0 mt-4">
        <Card className="my-3">
            <Card.Header className="fw-bold fs-2">GRAPHICAL OVERVIEW</Card.Header>
            <Card.Body>
                <Card.Text className="my-4">
                    At this moment there are <Badge bg="secondary">178</Badge> puzzle pictures below, all of which are featured on this site.
                    <Nav fill variant="tabs" defaultActiveKey="link-1" className="my-4">
                        <Nav.Item>
                            <Nav.Link href="link-1">Flat puzzles</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="link-2">Pyramids</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="link-3">Cubes</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="link-4">Spheres</Nav.Link>                           
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="link-5">Cylinders</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="link-6">Prisms</Nav.Link>                           
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="link-7">Other N-sided</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="link-8">Miscellaneous</Nav.Link>                           
                        </Nav.Item>
                    </Nav>
                    <Container className="mt-4">
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
                        <Row className="mt-3">

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
                    </Container>
                </Card.Text>
                <Button variant="primary" >Home</Button>
            </Card.Body>
        </Card>
        </Container>
    )
}