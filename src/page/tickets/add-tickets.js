import React,  {useState} from "react";
import {Button} from "react-bootstrap";
import "../entry/Entry.style.css"

import { Container, Row, Col, Form, FormGroup, FormLabel, FormControl } from "react-bootstrap";
import { Entry } from "../entry/Entry.page";

export const AddTicket = () => {
  return (
    <div className ="entry-page "> 
    
    <div className="bg-light p-5 rounded-lg m-3 form-box" >
                <Container >
            <Row>
                <Col>
                    <h1 className="text-info ">New Ticket</h1>
                    <hr />
                <Form className="text-left" autoComplete="off" >
                    <Form.Group as={Row}  className="mb-3 " controlId="formBasicEmail">
                        <Form.Label column sm={3}>Name</Form.Label>
                        <Col sm={9}><Form.Control type="text" name="email" placeholder="Enter name" required /></Col>
                        <Form.Label column sm={3}></Form.Label>
                    
                    </Form.Group>

                    <Form.Group as={Row}  className="mb-3 " controlId="formBasicPassword">
                        <Form.Label column sm={3}>Location</Form.Label>

                        <Col sm={9}> <Form.Control type="text" name="location"  placeholder="Enter location" required /></Col>
                    </Form.Group>

                    <Form.Group as={Row}  className="mb-3 " controlId="formBasicEmail">
                    <Form.Label column sm={7}>Issue found</Form.Label>
                    <Col sm={12}><select class="form-control" id="sel1">
                            <option>Transformer fault</option>
                            <option>Blackout</option>
                            <option>ESKOM fault</option>
                            <option>Units fault</option>
                        </select></Col>
                    </Form.Group>
                    

                    <Button  variant="info" type="submit" block>
                        Done
                    </Button>
                </Form>
            </Col>
          </Row>
          <hr />
        </Container>
        </div>
    </div>
  );
};