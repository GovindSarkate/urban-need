import axios from 'axios';
import React, { useState } from 'react'; 
import { Navbar, Container, Form, Button, NavDropdown } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min';

function NavBar() {
    const [selectedLocation, setSelectedLocation] = useState(null);
    const isLoggedIn=localStorage.getItem("isLoggedIn")
    const [navigator,setNavigator] = useState(1);

    const handleLocationSelect = (eventKey, event) => {
        setSelectedLocation(eventKey);
    };

    const onClickHandlerLogin=()=>{
        console.log("Demo");
        setNavigator(2);
        return;
    }
    const onClickHandlerLogout=()=>{
        setNavigator(3);
        return;
    }
    if (navigator===2){
        
        return(<Redirect to={{pathname:"/login"}}/>)
    }
    if (navigator===3){
        return(<Redirect to={{pathname:"/login"}}/>)
    }

    return (
        <Navbar expand="lg" className="bg-body-tertiary" style={{ border: '1px solid rgba(0, 0, 0, 0.1)' }}>
            <Container fluid>
                <Navbar.Brand> {/* Use Link component here */}
                    <a href='/' style={{textDecoration:'none' , color:'black'}}><strong>The Urban Needs</strong></a> 
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <div className="d-flex justify-content-center flex-grow-1">
                        <NavDropdown title={selectedLocation || "Select Location"} id="basic-nav-dropdown" onSelect={handleLocationSelect} className="me-3">
                            <NavDropdown.Item eventKey="Pune">Pune</NavDropdown.Item>
                            <NavDropdown.Item eventKey="Mumbai">Mumbai</NavDropdown.Item>
                            <NavDropdown.Item eventKey="Nashik">Nashik</NavDropdown.Item>
                        </NavDropdown>
                        <div className="me-3"></div> {/* Spacer */}
                        <Form className="d-flex">
                            <Form.Control
                                type="search"
                                placeholder="Search Services"
                                aria-label="Search"
                                className="me-2"
                            />
                            <Button variant="outline-success">Search</Button>
                        </Form>
                    </div>
                    {/* Use Link component to redirect to LoginandRegister component */}
                    {/* <Link to="/login" className="btn btn-outline-dark">Login</Link> */}
                    {
                        (isLoggedIn || isLoggedIn===false)?(<button onClick={onClickHandlerLogout} className="btn btn-outline-dark">Logout</button>):(<button onClick={onClickHandlerLogin} className="btn btn-outline-dark">Login</button>)
                    }
                    
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavBar;
