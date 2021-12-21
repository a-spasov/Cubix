import { Col } from "react-bootstrap";
import { Switch, Route } from "react-router-dom";
import CollectionsCatalog from "./Collectionscatalog";
import GraphicalOverview from "./GraphicalOverview";
import Home from "./Home";
import About from "./About";
import PuzzlesCatalog from "./PuzzlesCatalog";
import SolutionsCatalog from "./SolutionsCatalog";
import Marketplace from "./Marketplace";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";
import Contacts from "./Contacts";
import PageNotFound from "./PageNotFound";

export default function Main() {
    return (
        <Col lg="10" className="px-0">
            <Switch>              
                <Route path="/" exact>
                    <Home />
                </Route>
                <Route path="/home" exact>
                    <Home />
                </Route>
                <Route path="/puzzles" exact>
                    <PuzzlesCatalog />
                </Route>
                <Route path="/solutions" exact>
                    <SolutionsCatalog />
                </Route>
                <Route path="/collections" exact>
                    <CollectionsCatalog />
                </Route>
                <Route path="/marketplace" exact>
                    <Marketplace />
                </Route>
                <Route path="/graphical-overview" exact>
                    <GraphicalOverview />
                </Route>
                <Route path="/about" exact>
                    <About />
                </Route>
                <Route path="/login" exact>
                    <LoginForm />
                </Route>
                <Route path="/register" exact>
                    <RegisterForm />
                </Route>
                <Route path="/contact-us" exact>
                    <Contacts />
                </Route>
                <Route>
                    <PageNotFound />   
                </Route>
            </Switch>
        </Col>
    )
}