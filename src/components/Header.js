import { Navbar } from "react-bootstrap";
import { Container } from "react-bootstrap";
import Logo from '../images/cubixLogo.jpg';
import TopNavigation from './TopNavigation';

export default function Header () {
    return (
        <Navbar bg="light">
            <Container>
                <Navbar.Brand href="#home">
                    <img
                        alt="cubix"
                        src= {Logo}
                        width="100%"
                        height="60em"
                    />
                </Navbar.Brand>
                <TopNavigation />
            </Container>
        </Navbar>
    )
}