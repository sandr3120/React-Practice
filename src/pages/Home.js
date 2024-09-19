import React from 'react'
import '../style.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Quote from '../partials/First'
import Middle from '../partials/Middle'
import Footer from '../partials/Footer'
import Props from '../partials/Props'
import Header from '../partials/Header';

const link = "https://tinyurl.com/2jrjy6pp";
const sty1 = { maxWidth: '580px' };

function Home() {
    return (
        <>
            <Header />
            <div className="container centered-content pt-4">
                <div className="row">
                    <div className="col-sm-6 mb-3 mb-sm-0">
                        <div className="card">
                            <div className="card-body">
                                <h1 className="kitty text-center">Your Ultimate Guide to All Things Cats</h1>
                                <h6 className="card-subtitle mb-2 text-body-secondary">Welcome to React</h6>
                                <Quote />
                                <Middle />
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="card mb-3" style={sty1}>
                            <div className="row g-0">
                                <div className="col-md-4">
                                    <img src={link} class="img-fluid rounded-start" alt="calico" />
                                </div>
                                <div className="col-md-8">
                                    <div className="card-body">
                                        <h5 className="card-title">The Colorful Charm of Calico Cats</h5>
                                        <p className="card-text">A calico cat is known for its distinctive coat pattern featuring patches of white, black, and orange
                                            (or their diluted versions). Each calico cat has a unique and vibrant coloration, often with a playful and affectionate personality.
                                            These cats are as individual in their appearance as they are in their behavior.</p>
                                        <p className="card-text"><small class="text-body-secondary">Last updated 3 mins ago</small></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        Other Coat Colours:
                        <div className="row">
                            <div className="col-sm-3">
                                <ul><Props clr='Tabby' />
                                    <Props clr='Tortoiseshell' /></ul>
                            </div>
                            <div className="col-sm-3">
                                <ul><Props clr='Tuxedo' />
                                    <Props clr='Fawn' /></ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Home