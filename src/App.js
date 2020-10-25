import React from 'react';
import './App.css'

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

import Roadmap from "./Components/Roadmap/Roadmap";


function App() {
    return (
        <>
            <Navbar bg="light" expand="lg">
                <Navbar.Brand href="#home"><img alt={'ProductPlan'} src={"/img/logo.png"} width={160}/> | Candidate Roadmap</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">

                </Navbar.Collapse>
            </Navbar>

            <Container fluid>

                <br/>

                <Row className={'borderBottom'}>
                    <Col md="6"><h2>Product roadmap</h2></Col>
                    <Col md="6">
                        <Nav variant="pills" className="justify-content-end" activeKey="/home">
                            <Nav.Item>
                                <Nav.Link href="/home" active={true}>Roadmap</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="link-1">Planning Board</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="link-2">Parking Lot</Nav.Link>
                            </Nav.Item>

                        </Nav>
                    </Col>
                </Row>


                <Roadmap/>

            </Container>
        </>
    );
}

export default App;
