import React from 'react'
import { Card, CardGroup, Container } from 'react-bootstrap';
import Service from '../img/service.jpg';
import Accomm from '../img/hotel-room.jpg';
import Restaurant from '../img/restaurant.jpg';

function Services() {
    return (
        <section id="services">
            <Container>
                <CardGroup>
                    <Card>
                        <Card.Img src={Service} alt="Service" />
                        <Card.ImgOverlay>
                            <Card.Title>Explore Hotel</Card.Title>
                            <Card.Text>
                            Luxurious 5 Star Service.
                            </Card.Text>
                        </Card.ImgOverlay>
                    </Card>
                    <Card>
                        <Card.Img src={Accomm} alt="Service" />
                        <Card.ImgOverlay>
                            <Card.Title>Accommodation</Card.Title>
                            <Card.Text>
                            Rooms & Suites.
                            </Card.Text>
                        </Card.ImgOverlay>
                    </Card>
                    <Card>
                        <Card.Img src={Restaurant} alt="Service" />
                        <Card.ImgOverlay>
                            <Card.Title>Restaurant</Card.Title>
                            <Card.Text>
                            Sumptuous Dining.
                            </Card.Text>
                        </Card.ImgOverlay>
                    </Card>
                </CardGroup>
            </Container>
        </section>
    )
}

export default Services
