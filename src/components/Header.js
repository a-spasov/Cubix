import { Navbar } from "react-bootstrap";
import Logo from '../images/cubixLogo.jpg';
import TopNavigation from './TopNavigation';

export default function Header() {
    return (
        
            <Navbar bg="light">
                <Navbar.Brand className="col-2 ms-5 me-auto" href="#home">
                    <img
                        alt="cubix"
                        src={Logo}
                        width="99%"
                    />
                </Navbar.Brand>
                <TopNavigation className="col-10 text-end"/>
            </Navbar>
        
    )
}