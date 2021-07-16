import React from 'react';
import car1 from "../src/images/Computer.png";
import car2 from "../src/images/PythonLog.png";
import car3 from "../src/images/favIot.png";

const WorkCarousel = () => {
    return (
        <>
            <div className="container-fluid" id="carousel-background">
                <div className="row my-5"></div>
                <div className="text-center" id="heading-work">
                    <h1>Work</h1>
                </div>
                <div className="row justify-content-center">
                    <div className="col-5">
                        <div id="carouselExampleControls" class="carousel carousel-dark slide" data-bs-ride="carousel">
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <img src={car1} class="d-block w-50 m-auto" alt="Carousel1" />
                                    <div class="carousel-caption d-none d-md-block carousel-set">
                                        <h3>Web Development</h3>
                                        <p>In this project I've created a Hospital Management using PHP.</p>
                                    </div>
                                </div>
                                <div className="carousel-item">
                                    <a href=""><img src={car2} class="d-block w-50 m-auto" alt="Carousel2" /></a>
                                    <div class="carousel-caption d-none d-md-block carousel-set">
                                        <h3>Python and OpenCV</h3>
                                        <p>Drowsiness Detection which alerts driver to avoid accidents.</p>
                                    </div>
                                </div>
                                <div className="carousel-item">
                                    <img src={car3} class="d-block w-50 m-auto" alt="Carousel3" />
                                    <div class="carousel-caption d-none d-md-block carousel-set">
                                        <h3>IoT</h3>
                                        <p>Gesture Control Car which works according to user's gesture.</p>
                                    </div>
                                </div>
                            </div>
                            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Previous</span>
                            </button>
                            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Next</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default WorkCarousel;