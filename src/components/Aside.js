import { Col, Button } from "react-bootstrap";
import Categories from "./Categories";
import Search from "./Search";
import Statistic from "./Statistic";
import Contacts from "./Contacts";
import { Link } from "react-router-dom";

export default function Aside() {
    return (
        <Col lg="2" className="text-center border-end border-start">
            <h3 className="text-center mt-5 mb-4">Categories</h3>
            <Categories />
            <Search />
            <p className="fst-italic text-secondary my-3 px-2">
                If you have a puzzle but don't know its name, then you can look at our
            </p>
            <Link to="graphical-overview" className="text-decoration-none "><Button variant="secondary" className="mb-3">Graphical overview</Button></Link>
            
            <h3 className="text-center mt-5 mb-4">Cubix in numbers</h3>
            <Statistic />
            <h3 className="text-center mt-5 mb-4">Contacts</h3>
            <p className="fst-italic text-secondary my-3 px-2">If you have some proposals, questions of any type or just want to hear us, do not hesitate! Please, </p>
            <Link to="contact-us" className="text-decoration-none text-gray">
                <Button variant="outline-secondary" type="button" className="mb-5">Contact us!</Button>
            </Link>

        </Col>
    )
}