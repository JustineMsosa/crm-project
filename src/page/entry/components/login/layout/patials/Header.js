import React from "react";
import { Navbar, Nav, NavbarBrand } from "react-bootstrap";
import NavbarCollapse from "react-bootstrap/esm/NavbarCollapse";
import NavbarToggle from "react-bootstrap/esm/NavbarToggle";
import logo from "../../../../../assets/img/logo.png";

export const Header = () =>{
    return(
        <Navbar
        collapseOnSelect
        bg ="info" 
        variant="dark"
        expand="md">
            <Navbar.Brand>
                <img src={logo} alt="logo" width="50px" />
            </Navbar.Brand>
            <NavbarToggle arial-controls="basic-navebar-nav" />
            <NavbarCollapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                    <Nav.Link href="/dashboard">Dashboard</Nav.Link>
                    <Nav.Link href="dashboard">Tickets</Nav.Link>
                    <Nav.Link href="/dashboard">Logout</Nav.Link>
                </Nav>
            </NavbarCollapse>
        </Navbar>
    )

}