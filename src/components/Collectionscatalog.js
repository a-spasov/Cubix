import { Card, Button, Row, Col, Container } from "react-bootstrap";
import PagePagination from "./PagePagination";

export default function CollectionsCatalog() {
    return (
        <Container className="pe-0 mt-4">
            <Card className="my-3">
                <Card.Header className="fw-bold fs-2">COLLECTIONS</Card.Header>
                <Card.Body>
                    <Card.Title>Explore the world of collectors</Card.Title>
                    <Card.Text>
                        Here you can share your passion with others or see what they have.
                        <Container className="mt-4">
                            <Row className="mt-3">
                                <Col lg="12">
                                    <Card className="h-100">
                                        <Card.Img style={{ height: '240px' }} variant="top" src="https://i.ytimg.com/vi/UiLbmZbZArA/hqdefault.jpg" />
                                        <Card.Body>
                                            <Card.Title>Title</Card.Title>
                                            <Card.Subtitle className="mb-2 text-muted">Username</Card.Subtitle>
                                            <Card.Text>
                                                Small collection of cubes.
                                            </Card.Text>
                                            <Button variant="primary">Details</Button>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            </Row>
                            <Row className="mt-3">
                                <Col lg="12">
                                    <Card >
                                        <Card.Img style={{ height: '240px' }} variant="top" src="https://i.pinimg.com/originals/39/d8/15/39d8152e41aeb94998f02aedd0bf724c.jpg" />
                                        <Card.Body>
                                            <Card.Title>Title</Card.Title>
                                            <Card.Subtitle className="mb-2 text-muted">Username</Card.Subtitle>
                                            <Card.Text>
                                                Small collection of cubes.
                                            </Card.Text>
                                            <Button variant="primary">Details</Button>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            </Row>
                            <Row className="mt-3">
                                <Col lg="12">
                                    <Card >
                                        <Card.Img style={{ height: '240px' }} variant="top" src="https://i.ytimg.com/vi/UiLbmZbZArA/hqdefault.jpg" />
                                        <Card.Body>
                                            <Card.Title>Title</Card.Title>
                                            <Card.Subtitle className="mb-2 text-muted">Username</Card.Subtitle>
                                            <Card.Text>
                                                Small collection of cubes.
                                            </Card.Text>
                                            <Button variant="primary">Details</Button>
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