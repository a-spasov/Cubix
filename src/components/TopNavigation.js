import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import styles from "./Navigation.module.css";

export default function TopNavigation() {
    return (
            <Nav activeKey="/home" >
                <Nav.Item>
                        <Link to="/home" className={styles.links}>Home</Link>
                </Nav.Item>
                <Nav.Item>
                        <Link to="/puzzles" className={styles.links}>Puzzles </Link>
                </Nav.Item>
                <Nav.Item>
                        <Link to="/solutions" className={styles.links}>Solutions</Link>
                </Nav.Item>
                <Nav.Item>
                        <Link to="/collections" className={styles.links}>Collections</Link>
                </Nav.Item>
                <Nav.Item>
                        <Link to="/marketplace" className={styles.links}>Marketplace</Link>
                </Nav.Item>
                <Nav.Item>
                    <Link to="/about" className={styles.links}>
                         About us
                    </Link>
                </Nav.Item>
            </Nav>
    )
}