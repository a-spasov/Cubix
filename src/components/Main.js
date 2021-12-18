import { Col } from "react-bootstrap";
import CollectionsCatalog from "./Collectionscatalog";
import GraphicalOverview from "./GraphicalOverview";
import Home from "./Home";
import About from "./About";
import PuzzlesCatalog from "./PuzzlesCatalog";
import SolutionsCatalog from "./SolutionsCatalog";

export default function Main() {
    return (
        <Col lg="10" >
            <About />
        </Col>
    )
}