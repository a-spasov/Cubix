import { Container, Card, Col, Button } from "react-bootstrap"
import { Link } from "react-router-dom/cjs/react-router-dom.min"

export default function PageNotFound() {
    return (
        <Container className="pe-0 mt-4">
            <Col lg="7" className="mx-auto">
                <Card className="my-3">
                    <Card.Header className="fw-bold fs-2">OOPS! There is nothing here...</Card.Header>
                    <Card.Body>
                        <Container className="text-center">
                            <img src="https://lh3.googleusercontent.com/proxy/xLE4s9kyb5A7-HFuonHXV6HumzORw4St4lQu9FubZZu0zqScjqMKzDWQvuiReC9sk1url2v7PLDtCg" />
                        </Container>
                        <Container className="text-end">
                            <Link to="/home" >
                                <Button variant="secondary">Home</Button>
                            </Link>
                        </Container>
                    </Card.Body>
                </Card>
            </Col>
        </Container>
    )
}