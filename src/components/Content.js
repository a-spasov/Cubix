import { Container, Row } from "react-bootstrap";
import Aside from "./Aside";
import Main from "./Main";

export default function Content() {
    return (
        <Container>
            <Row>
                <Aside />
                <Main />
            </Row>
        </Container>
    )
}