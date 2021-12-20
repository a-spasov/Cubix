import { Badge, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import styles from "./Navigation.module.css";

export default function Statistic() {
    return (
        <Nav className="flex-column text-start ">
            <Nav.Link>
                <Link className={styles.links} to="/puzzles">
                    Puzzles <Badge className="mx-2" bg="warning">178</Badge>
                </Link>
            </Nav.Link>
            <Nav.Link>
                <Link className={styles.links} to="/solutions">
                    Solutions <Badge className="mx-2" bg="warning">95</Badge>
                </Link>
            </Nav.Link>
            <Nav.Link>
                <Link className={styles.links} to="/collections">
                    Collections <Badge className="mx-2" bg="warning">19</Badge>
                </Link>
            </Nav.Link>
            <Nav.Link>
                <Link className={styles.links} to="/marketplace">
                    Items for sale <Badge className="mx-2" bg="warning">48</Badge>
                </Link>
            </Nav.Link>
            <Nav.Link className="text-secondary my-1" disabled>
                Users <Badge className="mx-2" bg="warning">69</Badge>
            </Nav.Link>
        </Nav>
    )
}