import { Dropdown, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import styles from "./TopNavigation.module.css";

export default function TopNavigation() {
    return (
        <>
            <Nav activeKey="/home" >
                <Nav.Item>
                    <Nav.Link>
                        <Link to="/home" className={styles.links}>Home</Link>
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link>
                        <Link to="/puzzles" className={styles.links}>Puzzles </Link>
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link>
                        <Link to="/solutions" className={styles.links}>Solutions</Link>
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link>
                        <Link to="/collections" className={styles.links}>Collections</Link>
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link>
                        <Link to="/marketplace" className={styles.links}>Marketplace</Link>
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link> 
                        <Link to="/about" className={styles.links}>About us</Link> 
                    </Nav.Link>
                </Nav.Item>
            </Nav>
            <Nav className="ms-4">
                <Dropdown align="end">
                    <Dropdown.Toggle variant="outline-secondary" id="dropdown-basic">
                        Account
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        <Dropdown.Item >
                        <Link to="/login" className={styles.links}>Sign-in</Link>
                        </Dropdown.Item>
                        <Dropdown.Item>
                        <Link to="/register" className={styles.links}>Register</Link>
                        </Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </Nav>
        </>
    )
}