import React from 'react'
import { Container, Button } from 'react-bootstrap'

function Footer() {
    return (
        <footer>
            <Container>
                <div className="buttons">
                    <button className="btn btn-default"><i className="fab fa-facebook fa-2x"></i></button>
                    <button className="btn btn-default"><i className="fab fa-twitter fa-2x"></i></button>
                    <button className="btn btn-default"><i className="fab fa-google fa-2x"></i></button>
                    <button className="btn btn-default"><i className="fab fa-instagram fa-2x"></i></button>
                </div>
                <div className="links">
                    <a href="#" disable>The Embassy &copy; 2021</a>
                    <a href="#">Home</a>
                    <a href="#">Theme</a>
                    <a href="#">Careers</a>
                    <a href="#">+61 3 1234 5678</a>
                </div>
            </Container>
        </footer>
    )
}

export default Footer
