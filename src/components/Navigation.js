import React, { useState } from 'react';
import { Navbar, NavDropdown, Container, Nav, Button, Dropdown, Offcanvas, Collapse } from 'react-bootstrap';
import Logo from '../img/logo.png';

function Navigation({ name, ...props }) {
    // Navbar Hover
    const [ showDropdown, setShowDropdown ] = useState(false);
    const [ showDropdown2, setShowDropdown2 ] = useState(false);
    const [ showDropdown3, setShowDropdown3 ] = useState(false);
    const [ showDropdown4, setShowDropdown4 ] = useState(false);
    const [ showDropdown5, setShowDropdown5 ] = useState(false);

    // Menu Button
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    // Menu Collapse
    const [open, setOpen] = useState(false)
    const [open2, setOpen2] = useState(false)
    const [open3, setOpen3] = useState(false)
    const [open4, setOpen4] = useState(false)
    const [open5, setOpen5] = useState(false)
    
    return (
        <>
            <Navbar sticky="top" id="navbar">
                <Container>
                    <Navbar.Brand href="#"><img src={Logo} alt="the-embassy-logo" /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto justify-content-center">

                        <Dropdown onMouseOver={() => setShowDropdown(true)} onMouseLeave={() => setShowDropdown(false)}>
                            <NavDropdown title="Home" id="basic-nav-dropdown" menuVariant="dark" show={showDropdown}>
                                <NavDropdown.Item href="#action/3.1">Single Hotel</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Multiple Hotel</NavDropdown.Item>
                            </NavDropdown>
                        </Dropdown> 

                        <Dropdown onMouseOver={() => setShowDropdown2(true)} onMouseLeave={() => setShowDropdown2(false)}>
                            <NavDropdown title="Accommodation" id="basic-nav-dropdown" menuVariant="dark" show={showDropdown2}>
                                <NavDropdown.Item href="#action/3.1">Rooms - List</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Rooms - Single</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Rooms - Single2</NavDropdown.Item>
                            </NavDropdown>
                        </Dropdown>

                        <Dropdown onMouseOver={() => setShowDropdown3(true)} onMouseLeave={() => setShowDropdown3(false)}>
                            <NavDropdown title="Templates" id="basic-nav-dropdown" menuVariant="dark" show={showDropdown3}>
                                <NavDropdown.Item href="#action/3.1">About Hotel</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Photo Gallery</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Special Offers</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Location</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Restaurant</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Blog</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Guest Book</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">FAQs</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Contact</NavDropdown.Item>
                            </NavDropdown>
                        </Dropdown>

                        <Dropdown onMouseOver={() => setShowDropdown4(true)} onMouseLeave={() => setShowDropdown4(false)}>
                            <NavDropdown title="Sections" id="basic-nav-dropdown" menuVariant="dark" show={showDropdown4}>
                                <NavDropdown.Item href="#action/3.1">Slideshows</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Panels</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Room Boxes</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Google Maps</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Content</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">More Sections</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Promo Popup</NavDropdown.Item>
                            </NavDropdown>
                        </Dropdown>

                        <Nav.Link id="link" href="#">Mega Menu</Nav.Link>

                    </Nav>

                    <Nav className="justify-content-end">

                        <Dropdown onMouseOver={() => setShowDropdown5(true)} onMouseLeave={() => setShowDropdown5(false)}>
                            <NavDropdown title="EN" id="basic-nav-dropdown" menuVariant="dark" show={showDropdown5}>
                                <NavDropdown.Item href="#action/3.1">CN</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">FR</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">DE</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">IT</NavDropdown.Item>
                            </NavDropdown>
                        </Dropdown>
                        
                        <Button variant="default" id="book">Book <i className="far fa-check-circle"></i></Button>
                        <Button variant="default" onClick={handleShow} id="open"><i className="far fa-bars fa-2x"></i></Button>

                    </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            {/* Hamburger Menu */}

            <section id="menu">
                

                <Offcanvas menuVarient="dark" show={show} onHide={handleClose} {...props}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title><img src={Logo} alt="the-embassy-logo" /></Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>

                <Container>

                    <h1 id="basic-nav-dropdown" onClick={() => setOpen(!open)} aria-expanded={open} >Home</h1>
                    <Collapse in={open}> 
                        <div id="collapse-text">
                            <NavDropdown.Item href="#action/3.1">Single Hotel</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Multiple Hotel</NavDropdown.Item>
                        </div>
                    </Collapse>

                    <h1 id="basic-nav-dropdown" onClick={() => setOpen2(!open2)} aria-expanded={open2} >Accommodation</h1>
                    <Collapse in={open2}>
                        <div id="collapse-text">
                            <NavDropdown.Item href="#action/3.1">Rooms - List</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Rooms - Single</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Rooms - Single2</NavDropdown.Item>
                        </div>
                    </Collapse>

                    <h1 id="basic-nav-dropdown" onClick={() => setOpen3(!open3)} aria-expanded={open3} >Templates</h1>
                    <Collapse in={open3}>
                        <div id="collapse-text">
                            <NavDropdown.Item href="#action/3.1">About Hotel</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Photo Gallery</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Special Offers</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Location</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Restaurant</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Blog</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Guest Book</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">FAQs</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Contact</NavDropdown.Item>
                        </div>
                    </Collapse>

                    <h1 id="basic-nav-dropdown" onClick={() => setOpen4(!open4)} aria-expanded={open4} >Sections</h1>
                    <Collapse in={open4}>
                        <div id="collapse-text">
                            <NavDropdown.Item href="#action/3.1">Slideshows</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Panels</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Room Boxes</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Google Maps</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Content</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">More Sections</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Promo Popup</NavDropdown.Item>
                        </div>
                    </Collapse>

                    <Nav.Link id="link" href="#">Mega Menu</Nav.Link>
                    
                    <h1 id="basic-nav-dropdown" onClick={() => setOpen5(!open5)} aria-expanded={open5} >EN</h1>
                    <Collapse in={open5}>
                        <div id="collapse-text">
                            <NavDropdown.Item href="#action/3.1">CN</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">FR</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">DE</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">IT</NavDropdown.Item>
                        </div>
                    </Collapse>

                    <Button variant="default">Book <i className="far fa-check-circle"></i></Button>
                    
                    </Container>
                </Offcanvas.Body>
                </Offcanvas>

                
            </section>
        </>
    )
}

export default Navigation
