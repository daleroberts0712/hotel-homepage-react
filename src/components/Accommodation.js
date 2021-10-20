import React from 'react'
import { Card, CardGroup, Container, Button } from 'react-bootstrap';
import Standard from '../img/standard-room.jpg';
import Deluxe from '../img/deluxe-room.jpg';
import Penthouse from '../img/penthouse-suite.jpg'

function Accommodation() {
    return (
        <section id="accommodation">
            <Container>
                <header>
                    <h2>Luxury Accommodation</h2>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore, a.</p>
                </header>
            <CardGroup>
                <Card id="card">
                    <Card.Img variant="top" src={Standard} />
                    <Card.Body>
                    <Card.Title>Standard Room <span>$150 per night</span></Card.Title>
                    <Card.Text>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat aliquam reprehenderit explicabo at officiis qui nesciunt optio quis asperiores quam, nulla blanditiis enim exercitationem id!.
                    </Card.Text>
                    </Card.Body>
                </Card>
                <Card id="card">
                    <Card.Img variant="top" src={Deluxe} />
                    <Card.Body>
                    <Card.Title>Deluxe Room <span>$170 per night</span></Card.Title>
                    <Card.Text>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique, veritatis! Assumenda deleniti voluptatem esse nemo, voluptatum, itaque impedit, molestias iure excepturi repudiandae iste et magnam.
                    </Card.Text>
                    </Card.Body>
                </Card>
                <Card id="card">
                    <Card.Img variant="top" src={Penthouse} />
                    <Card.Body>
                    <Card.Title>Penthouse Suite <span>$220 per night</span></Card.Title>
                    <Card.Text>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse recusandae blanditiis porro dicta necessitatibus quod, tempore molestiae ex voluptatem corrupti dolore, omnis, fugiat aliquam nesciunt?
                    </Card.Text>
                    </Card.Body>
                </Card>
            </CardGroup>
            <div className="text-center">
                <Button>See All Rooms</Button>
            </div>
            </Container>
        </section>
    )
}

export default Accommodation
