import { Container } from "react-bootstrap";
import HomeCollections from "./HomeCollections";
import HomeMarketplace from "./HomeMarketplace";
import HomePuzzles from "./HomePuzzles";
import HomeSolutions from "./HomeSolutions";

export default function Home() {
    return (
        <Container>
            <HomePuzzles />
            <HomeSolutions />
            <HomeCollections />
            <HomeMarketplace />
        </Container>
    )
}