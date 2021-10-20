import React from 'react'
import { Carousel, Button } from 'react-bootstrap'
import Explore from '../img/explore.jpg';
import Accom from '../img/hotel-room.jpg';
import Restaurant from '../img/restaurant.jpg';
import Gallery from '../img/photo-gallery.jpg';
import Offers from '../img/special-offers.jpg';
import Location from '../img/location.jpg';

function Experience() {
    return (
        <section id="experience">
            <Carousel fade>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={Explore}
                    alt="Explore"
                    />
                    <Carousel.Caption>
                    <Button size="lg">Explore Hotel</Button>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={Accom}
                    alt="Accommodation"
                    />

                    <Carousel.Caption>
                    <Button size="lg">Accommodation</Button>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={Restaurant}
                    alt="Restaurant"
                    />

                    <Carousel.Caption>
                    <Button size="lg">Restaurant</Button>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={Gallery}
                    alt="Photo Gallery"
                    />

                    <Carousel.Caption>
                    <Button size="lg">Photo Gallery</Button>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={Offers}
                    alt="Special Offers"
                    />

                    <Carousel.Caption>
                    <Button size="lg">Special Offers</Button>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={Location}
                    alt="Location"
                    />

                    <Carousel.Caption>
                    <Button size="lg">Location</Button>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </section>
    )
}

export default Experience
