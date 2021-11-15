import React from "react";

import { Table } from "react-bootstrap";


export const TicketTable = () => {


  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Subjects</th>
          <th>Status</th>
          <th>Opened Date</th>
        </tr>
      </thead>
      <tbody>
            <tr>
              <td>1</td>
              <td>
                  Malaria symptoms
              </td>
              <td>escaleted to doctor</td>
              <td>11/15/2021</td>
            </tr>

            <tr>
              <td>2</td>
              <td>
                  covid symptoms
              </td>
              <td>escaleted to doctor</td>
              <td>11/15/2021</td>
            </tr>

            <tr>
              <td>3</td>
              <td>
                  Malaria symptoms
              </td>
              <td>escaleted to doctor</td>
              <td>11/15/2021</td>
            </tr>

            <tr>
              <td>4</td>
              <td>
                  pregnant symptoms
              </td>
              <td>pending...</td>
              <td>11/15/2021</td>
            </tr>
        
          <tr>
            <td colSpan="4" className="text-center">
              No ticket show{" "}
            </td>
          </tr>

      </tbody>
    </Table>
  );
};
