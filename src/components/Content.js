import { Container, Row } from "react-bootstrap";
import Aside from "./Aside";
import Main from "./Main";

export default function Content() {
    return (
            <Row>
                <Aside />
                <Main />
            </Row>
    )
}