import React,  {useState} from "react";
import {Button} from "react-bootstrap";

import { Container, Row, Col, Form, FormGroup, FormLabel, FormControl } from "react-bootstrap";


export const LoginForm = ({ formSwitcher }) =>{
    const [email, setEmail] = useState("justine@unima.com");
    const [password, setPassword] = useState("12345678");

    const handleOnChange = e => {
		const { name, value } = e.target;

		switch (name) {
			case "email":
				setEmail(value);
				break;

			case "password":
				setPassword(value);
				break;

			default:
				break;
		}
	};

    const handleOnSubmit = async e => {
		e.preventDefault();

		if (!email || !password) {
			return alert("Fill up all the form!");
        
		}

        else if (email=="justine@unima.com" & password=="12345678"){
			return alert("successful");

		}

        else {
            return alert("incorect password")
        }
	};
    
    return (
        <Container>
            <Row>
                <Col>
                    <h1 className="text-info ">Client Login</h1>
                    <hr />
                <Form className="text-left" autoComplete="off" onSubmit={handleOnSubmit}>
                    <Form.Group  className="mb-3 " controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" name="email" onChange={handleOnChange} placeholder="Enter email" required />
                        <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3 " controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>

                        <Form.Control type="password" name="password" onChange={handleOnChange} placeholder="Password" required />
                    </Form.Group>
                
                    <Button  variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </Col>
          </Row>
          <hr />
          <Row>
              <Col>
                <a href="#" onClick = {()=> formSwitcher("reset")}> Forget Password?</a>
              </Col>
          </Row>
        </Container>
    )

}