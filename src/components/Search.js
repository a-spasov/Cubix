import { Form } from "react-bootstrap";
import { FormControl } from "react-bootstrap";
import { InputGroup } from "react-bootstrap";

export default function Search() {
    return (
        <Form className="mt-4">
            <InputGroup className="mb-2">
                <FormControl id="inlineFormInputGroup" placeholder="Search..." />
            </InputGroup>
        </Form> 
    ) 
}