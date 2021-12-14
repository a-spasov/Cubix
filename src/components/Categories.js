import { Accordion } from "react-bootstrap";
import { ListGroup } from "react-bootstrap";


export default function Categories() {
    return (
        <Accordion>
            <Accordion.Item eventKey="0" className="border-0">
                <Accordion.Header>Flat pzzles</Accordion.Header>
                <Accordion.Body>
                    <ListGroup variant="flush">
                        <ListGroup.Item>Item 1</ListGroup.Item>
                        <ListGroup.Item>Item 4</ListGroup.Item>
                    </ListGroup>
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1" className="border-0">
                <Accordion.Header>Pyramids</Accordion.Header>
                <Accordion.Body>
                    <ListGroup variant="flush">
                        <ListGroup.Item>Item 1</ListGroup.Item>
                        <ListGroup.Item>Item 2</ListGroup.Item>
                        <ListGroup.Item>Item 3</ListGroup.Item>
                        <ListGroup.Item>Item 4</ListGroup.Item>
                    </ListGroup>
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2" className="border-0">
                <Accordion.Header>Cubes</Accordion.Header>
                <Accordion.Body>
                    <ListGroup variant="flush">
                        <ListGroup.Item>Item 1</ListGroup.Item>
                        <ListGroup.Item>Item 2</ListGroup.Item>
                        <ListGroup.Item>Item 3</ListGroup.Item>
                        <ListGroup.Item>Item 4</ListGroup.Item>
                        <ListGroup.Item>Item 2</ListGroup.Item>
                        <ListGroup.Item>Item 3</ListGroup.Item>
                        <ListGroup.Item>Item 4</ListGroup.Item>
                    </ListGroup>
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="3" className="border-0">
                <Accordion.Header>Spheres</Accordion.Header>
                <Accordion.Body>
                    <ListGroup variant="flush">
                        <ListGroup.Item>Item 1</ListGroup.Item>
                        <ListGroup.Item>Item 2</ListGroup.Item>
                        <ListGroup.Item>Item 3</ListGroup.Item>
                    </ListGroup>
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="4" className="border-0">
                <Accordion.Header>Cylinders</Accordion.Header>
                <Accordion.Body>
                    <ListGroup variant="flush">
                        <ListGroup.Item>Item 1</ListGroup.Item>
                        <ListGroup.Item>Item 2</ListGroup.Item>
                        <ListGroup.Item>Item 3</ListGroup.Item>
                        <ListGroup.Item>Item 4</ListGroup.Item>
                        <ListGroup.Item>Item 3</ListGroup.Item>
                        <ListGroup.Item>Item 4</ListGroup.Item>
                    </ListGroup>
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="5" className="border-0">
                <Accordion.Header>Prisms</Accordion.Header>
                <Accordion.Body>
                    <ListGroup variant="flush">
                        <ListGroup.Item>Item 1</ListGroup.Item>
                        <ListGroup.Item>Item 2</ListGroup.Item>
                        <ListGroup.Item>Item 3</ListGroup.Item>
                        <ListGroup.Item>Item 4</ListGroup.Item>
                    </ListGroup>
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="6" className="border-0">
                <Accordion.Header>Other N-sided</Accordion.Header>
                <Accordion.Body>
                    <ListGroup variant="flush">
                        <ListGroup.Item>Item 1</ListGroup.Item>
                        <ListGroup.Item>Item 2</ListGroup.Item>
                        <ListGroup.Item>Item 3</ListGroup.Item>
                        <ListGroup.Item>Item 4</ListGroup.Item>
                    </ListGroup>
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="7" className="border-0">
                <Accordion.Header>Miscellaneous</Accordion.Header>
                <Accordion.Body>
                    <ListGroup variant="flush">
                        <ListGroup.Item>Item 1</ListGroup.Item>
                        <ListGroup.Item>Item 2</ListGroup.Item>
                        <ListGroup.Item>Item 3</ListGroup.Item>
                        <ListGroup.Item>Item 4</ListGroup.Item>
                        <ListGroup.Item>Item 2</ListGroup.Item>
                        <ListGroup.Item>Item 2</ListGroup.Item>
                        <ListGroup.Item>Item 3</ListGroup.Item>
                        <ListGroup.Item>Item 4</ListGroup.Item>
                        <ListGroup.Item>Item 3</ListGroup.Item>
                        <ListGroup.Item>Item 4</ListGroup.Item>
                    </ListGroup>
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
    )
}