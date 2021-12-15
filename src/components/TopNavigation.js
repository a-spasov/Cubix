import { Dropdown, Nav } from "react-bootstrap";

export default function TopNavigation() {
    return (
        <>
        <Nav activeKey="/home" >
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
            </Nav>
            <Nav className="mx-5">
                <Dropdown align="end">
                <Dropdown.Toggle variant="outline-secondary" id="dropdown-basic">
                    Account
                </Dropdown.Toggle>
                <Dropdown.Menu>
                    <Dropdown.Item >Sign-in</Dropdown.Item>
                    <Dropdown.Item >Register</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
            </Nav>
            </>
            
            
        
    )
}