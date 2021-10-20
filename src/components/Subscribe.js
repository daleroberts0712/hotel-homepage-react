import React from 'react'
import backGround from '../img/subscribe.jpg';
import { Card, Form, Button } from 'react-bootstrap'

function Subscribe() {
    return (
        <section id="subscribe">
            <Card>
            <Card.Img src={backGround} alt="Subscribe" />
            <Card.ImgOverlay>
                <Card.Title className="content">
                        <h1>Subscribe</h1>
                        <p>FOR OUR SPECIALS</p>
                </Card.Title>
                <Card.Text className="my-form">
                    <Form>
                        <input type="text" className="form-control" placeholder="Email Address" /> 
                        <Button size="lg">Sign Up</Button>            
                    </Form>
                </Card.Text>
            </Card.ImgOverlay>
            </Card>
        </section>


    )
}

export default Subscribe
