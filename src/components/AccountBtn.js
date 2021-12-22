import { useState } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { Dropdown, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import styles from "./Navigation.module.css";

export default function AccountBtn() {
    const [user, setUser] = useState({});

    onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser);
    });
    const logout = async () => {
        await signOut(auth);
    };

    if (user === null) {
        return (
            <Nav className="ms-4">
            <Dropdown align="end">
                <Dropdown.Toggle variant="outline-secondary" id="dropdown-basic">
                    Account
                </Dropdown.Toggle>
                <Dropdown.Menu>
                    {/* NOT LOGGED USER */}
                    <Dropdown.Item>
                        <Link to="/login" className={styles.links}>Sign-in</Link>
                    </Dropdown.Item>
                    <Dropdown.Item >
                        <Link to="/register" className={styles.links}>Register</Link>
                    </Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        </Nav>
        )
    }
    return (
        <Nav className="ms-4">
            <Dropdown align="end">
                <Dropdown.Toggle variant="outline-secondary" id="dropdown-basic">
                    Account
                </Dropdown.Toggle>
                <Dropdown.Menu>
                    <Dropdown.ItemText className="text-dark fst-italic fw-bold text-center mb-3">Welcome, {user.displayName}!</Dropdown.ItemText>
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
                    <Dropdown.Item as="button" onClick={logout}>Logout</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        </Nav>
    )
}