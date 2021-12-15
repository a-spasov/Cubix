import { Col, Button } from "react-bootstrap";
import Categories from "./Categories";
import Search from "./Search";
import Statistic from "./Statistic";
import Contacts from "./Contacts";

export default function Aside() {
    return (
        <Col lg="2" className="text-center ms-5">
            <h3 className="text-center mt-5 mb-4">Categories</h3>
            <Categories />
            <Search />
            <p className="fst-italic text-secondary my-3 px-2">
                If you have a puzzle but don't know its name, then you can look at our
            </p>
            <Button variant="outline-secondary" className="mb-3">Graphical overview</Button>
            <h3 className="text-center mt-5 mb-4">Cubix in numbers</h3>
            <Statistic />
            <h3 className="text-center mt-5 mb-4">Contacts</h3>
            <p className="fst-italic text-secondary my-3 px-2">If you have some proposals, questions of any type or just want to hear us, do not hesitate! Please, </p>
            <Contacts />
        </Col>
    )
}