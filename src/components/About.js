import { Card, Button } from "react-bootstrap";
import Logo from '../images/cubixLogo.jpg';

export default function About() {
    return (
        <Card className="my-3">
            <Card.Header className="fw-bold fs-2">ABOUT US</Card.Header>
            <Card.Body>
                <Card.Img src={Logo} className="my-4"/>
                <Card.Title>What is Cubix?</Card.Title>
                <Card.Text>
                    <p> Cubix is the most comprehensive platform about magic puzzles.
                     Here you can find information of any kind (for example: name of the inventor, date of release, interesting facts, etc.) for all around twisty puzzles.
                     Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolor
                    </p>
                </Card.Text>
                <Card.Title>Our mission</Card.Title>
                <Card.Text>
                    <p> Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </p>
                </Card.Text>
                <Card.Title>Our name</Card.Title>
                <Card.Text>
                    <p> Our name, Cubix, initially began as a simple play on the word "cube." Since then, it has also come to represent our strong work ethic and our drive to exceed expectations.  </p>
                </Card.Text>
                <Card.Title>Accuracy of Information and Disclaimer of Warranty</Card.Title>
                <Card.Text>
                    <p> Cubix has made every effort to present the content on the website accurately, but additions, deletions and changes may occur. Content on the website is provided 'as is'; neither TwistyPuzzles.com nor its representatives make any representation or warranty with respect to the content. </p>
                </Card.Text>
                <Card.Title>Registration</Card.Title>
                <Card.Text>
                    <p> You are required to register to use most features of the site. If you decide to become a member, we will collect and store contact information including your e-mail address so we can confirm your authenticity.</p>
                </Card.Text>
                <Button variant="primary">Home</Button>
            </Card.Body>
        </Card>
    )
}