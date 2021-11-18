import React from "react";

import { Table } from "react-bootstrap";


export const TicketTable = () => {


  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Subjects</th>
          <th>Location</th>
          <th>Status</th>
          <th>Opened Date</th>
        </tr>
      </thead>
      <tbody>
            <tr>
              <td>1</td>
              <td>
                  blackout
              </td>
              <td>
                  Zomba
              </td>
              <td>escaleted to eskom</td>
              <td>11/15/2021</td>
            </tr>

            <tr>
              <td>2</td>
              <td>
                  Transformer fault
              </td>
              <td>
                  Zomba
              </td>
              <td>escaleted to eskom</td>
              <td>11/15/2021</td>
            </tr>

            <tr>
              <td>3</td>
              <td>
                  blackout
              </td>
              <td>
                  Blantyre
              </td>
              <td>escaleted to eskom</td>
              <td>11/15/2021</td>
            </tr>

            <tr>
              <td>4</td>
              <td>
                  blackout
              </td>
              <td>
                  Lilongwe
              </td>
              <td>pending...</td>
              <td>11/15/2021</td>
            </tr>
        
          <tr>
            <td colSpan="5" className="text-center">
              No ticket show{" "}
            </td>
          </tr>

      </tbody>
    </Table>
  );
};
