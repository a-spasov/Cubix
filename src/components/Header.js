import { Container, Navbar } from "react-bootstrap";
import Logo from '../images/cubixLogo.jpg';
import TopNavigation from './TopNavigation';

export default function Header() {
    return (

        <Navbar bg="light">
            <Container>
                <Navbar.Brand className="col-2 me-auto" href="#home">
                    <img alt="cubix" src={Logo} width="100%" />
                </Navbar.Brand>
                <TopNavigation className="col-10 text-end" />
            </Container>
        </Navbar>

    )
}