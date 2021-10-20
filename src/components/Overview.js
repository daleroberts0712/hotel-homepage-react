import React from 'react'
import { Container } from 'react-bootstrap';

function Overview() {
    return (
        <section id="overview">
            <Container className="text-center">
                <header>
                    <h2>The Embassy Hotel</h2>
                    <h4>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, ratione!</h4>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo sed in, magni expedita cumque architecto asperiores at assumenda aperiam, consequatur autem iusto distinctio delectus! Sed eveniet cumque nostrum sunt illo in accusamus quae quasi suscipit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, perferendis? </p>
                </header>
                <div className="content">
                    <div id="info">
                        <i class="fas fa-star fa-2x"></i>
                        <h4>#1 on TripAdvisor</h4>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur facilis ab non quis, reiciendis nostrum quisquam. Quae accusamus error voluptatum!</p>
                    </div>
                    <div id="info">
                        <i class="fas fa-eye fa-2x"></i>
                        <h4>Award-Winning Chef</h4>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur facilis ab non quis, reiciendis nostrum quisquam. Quae accusamus error voluptatum!</p>
                    </div>
                    <div id="info">
                        <i class="far fa-smile-beam fa-2x"></i>
                        <h4>24 Hour Concierge</h4>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur facilis ab non quis, reiciendis nostrum quisquam. Quae accusamus error voluptatum!</p>
                    </div>
                </div>
            </Container>
        </section>
    )
}

export default Overview
