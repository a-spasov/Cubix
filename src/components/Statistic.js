import { Badge, Nav } from "react-bootstrap";

export default function Statistic() {
    return (
        <Nav  className="flex-column text-start ">
            <Nav.Link className="text-secondary my-1" eventKey="link-1">
                Puzzles <Badge className="mx-3" bg="secondary">178</Badge>
            </Nav.Link>
            <Nav.Link className="text-secondary my-1" eventKey="link-2">
                Solutions <Badge className="mx-3" bg="secondary">95</Badge>
            </Nav.Link>
            <Nav.Link className="text-secondary my-1" eventKey="link-3">
                Collections <Badge className="mx-3" bg="secondary">
                    19
                </Badge>
            </Nav.Link>
            <Nav.Link className="text-secondary my-1" eventKey="link-4">
                Items for sale <Badge className="mx-3" bg="secondary">
                    48
                </Badge></Nav.Link>
            <Nav.Link className="text-secondary my-1" eventKey="disabled">
                Users <Badge className="mx-3" bg="secondary">
                    69
                </Badge></Nav.Link>
        </Nav>
    )
}