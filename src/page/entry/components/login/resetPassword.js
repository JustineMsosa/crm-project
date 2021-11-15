import React,  {useState} from "react";
import {Button} from "react-bootstrap";

import { Container, Row, Col, Form, FormGroup, FormLabel, FormControl } from "react-bootstrap";


export const ResetPassword= ({formSwitcher}) =>{

    const [email, setEmail] = useState("");

    const handleOnChange = e => {
		const { name, value } = e.target;

		switch (name) {
			case "email":
				setEmail(value);
				break;

			default:
				break;
		}
	};

    const handleOnSubmit = async e => {
		e.preventDefault();

            return alert("pin reset has just sent to "+email)
        
	};
    
    return (
        <Container>
            <Row>
                <Col>
                    <h1 className="text-info ">Reset password</h1>
                    <hr />
                <Form className="text-left" autoComplete="off" onSubmit={handleOnSubmit}>
                    <Form.Group  className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" name="email"  onChange={handleOnChange} placeholder="Enter email" required />
                        <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>
                
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </Col>
          </Row>
          <hr />
          <Row>
              <Col>
                <a href="#" onClick={()=> formSwitcher("login")}>  Login now?</a>
              </Col>
          </Row>
        </Container>
    )

}