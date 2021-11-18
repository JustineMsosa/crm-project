import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { TicketTable } from "./ticket-table/ticket-table";

export const Dashboard = ()=>{
    return(
        <div>
              <Container>
      <Row>
        {/* <Col>
          Dashboard
        </Col> */}
      </Row>
      <Row>
        <Col className="text-center mt-5 mb-2">
          
            <Button
              variant="info"
              style={{ fontSize: "2rem", padding: "10px 30px" }}
            >
              Add New Ticket
            </Button>
         
        </Col>
      </Row>
      <Row>
        <Col className="text-center  mb-2">
          <div>Total Tickets: 4</div>
          <div>Pending Tickets: 1 </div>
        </Col>
      </Row>
      <Row>
        </Row>
      
        <Row>
        <Col className="mt-3 text-left"><h5 >Recently Added Tickets</h5></Col>
      </Row>
      <hr />

      <Row>
        <Col className="recent-ticket">
          <TicketTable />
        </Col>
      </Row>
    </Container>
        </div>
    )
}