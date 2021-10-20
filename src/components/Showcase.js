import React from 'react'
import { Carousel, Button } from 'react-bootstrap'
import hotelRoom from '../img/hotel-room.jpg'
import Service from '../img/service.jpg'

function Showcase() {
    
    function zoom(){
        const image = document.querySelector('.showcase-img');
        image.classList.toggle('zoom');
    }

    function zoomOut(){
        const image = document.querySelector('.showcase-img');
        image.classList.toggle('zoom-out');
    }

    function zoom2(){
        const imageTwo = document.querySelector('.imageTwo');
        imageTwo.classList.toggle('zoom2');
    }

    function zoomOut2(){
        const imageTwo = document.querySelector('.imageTwo');
        imageTwo.classList.toggle('zoom-out2');
    }

    return (
        <section id="showcase">
            <Carousel fade>
                <Carousel.Item interval={2000}>
                    <img
                        className="showcase-img d-block w-100"
                        src={hotelRoom}
                        alt="Hotel-room"
                        />

                    <Carousel.Caption>
                        <Button size="lg" onMouseOver={zoom} onMouseLeave={zoomOut}>See Hotel Rooms</Button>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item interval={2000}>
                     <img
                        className="imageTwo d-block w-100"
                        src={Service}
                        alt="Services"
                        />

                    <Carousel.Caption className="text-center">
                        <h1>Luxurious</h1>
                        <p>5 STAR SERVICE</p>
                        <Button size="lg" onMouseOver={zoom2} onMouseLeave={zoomOut2}>Explore Hotel</Button>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </section>
    )
}

export default Showcase
