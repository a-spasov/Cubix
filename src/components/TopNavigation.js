import { Nav } from "react-bootstrap";
import { NavDropdown } from "react-bootstrap";

export default function TopNavigation() {
    return (
        <Nav className="justify-content-center" activeKey="/home" >
            <Nav.Item>
                <Nav.Link href="/home">Home</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey="link-1">About us</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey="link-2">Puzzles</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey="link-3">Solutions</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey="link-4">Collections</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey="link-5">Marketplace</Nav.Link>
            </Nav.Item>
            <NavDropdown title="Account" id="nav-dropdown">
                <NavDropdown.Item eventKey="6.1">Login</NavDropdown.Item>
                <NavDropdown.Item eventKey="6.2">Register</NavDropdown.Item>
            </NavDropdown>
            
        </Nav>
    )
}