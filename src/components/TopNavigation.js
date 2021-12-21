import { Dropdown, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import styles from "./Navigation.module.css";

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
                    {/* NOT LOGGED USER 
                        <Dropdown.Item>
                        <Link to="/login" className={styles.links}>Sign-in        </Link>
                        </Dropdown.Item>
                        <Dropdown.Item >
                        <Link to="/register" className={styles.links}>Register          </Link>
                        </Dropdown.Item>
                        */}

                        <Dropdown.Item>
                            <Link to="/account/uploads" className={styles.links}>My uploads</Link>
                        </Dropdown.Item>
                        <Dropdown.Item>
                            <Link to="/account/upload-puzzle" className={styles.links}>Upload puzzle</Link>
                        </Dropdown.Item>
                        <Dropdown.Item>
                            <Link to="/account/upload-solution" className={styles.links}>Upload solution</Link>
                        </Dropdown.Item>
                        <Dropdown.Item>
                            <Link to="/account/upload-collection" className={styles.links}>Upload collection</Link>
                        </Dropdown.Item>
                        <Dropdown.Item disabled>
                            <Link to="/account/upload-item-for-sale" className={styles.links}>Upload item for sale</Link>
                        </Dropdown.Item>
                        <Dropdown.Divider />
                        <Dropdown.Item>
                            <Link to="/logout" className={styles.links}>Logout</Link>
                        </Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </Nav>
        </>
    )
}