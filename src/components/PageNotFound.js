import { Container, Card, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import NotFound from "../images/notFound.jpg";

export default function PageNotFound() {
    return (
        <Container className="pe-0 mt-4">
            <Col lg="7" className="mx-auto">
                <Card className="my-3">
                    <Card.Header className="fw-bold fs-2">OOPS! There is nothing here...</Card.Header>
                    <Card.Body>
                        <Container className="text-center">
                            <img src={NotFound} className="w-100" />
                        </Container>
                        <Container className="text-end">
                            <Link to="/home" >
                                <Button variant="secondary" className="mb-2">Home</Button>
                            </Link>
                        </Container>
                    </Card.Body>
                </Card>
            </Col>
        </Container>
    )
}