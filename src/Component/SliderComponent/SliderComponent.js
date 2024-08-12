import React, { useState } from 'react'
import image1 from "../../assests/about.jpg"
import image2 from "../../assests/contact-us-pc.png";
import image3 from "../../assests/contact.jpg";

import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css"

function SliderComponent() {

    const [curr, setCurr] = useState(0)
    const images = [image1, image2, image3]

    const nextSlide = () => {

        setCurr((curr + 1) % images.length)
    }

    const prevSlide = () => {
        setCurr((curr - 1 + images.length) % images.length)
    }

    // do +1%5  forward
    // (currentIndex - 1 + n) % n backward
    return (
        <>
            <button type="button" className="btn btn-primary">Primary</button>
            <div className='container my-5'>

                <div className='row text-center'>

                    <div className='col-6'>
                        <div id="carouselExample" className="carousel slide">

                            {
                                images.map((value, index) =>
                                    curr === index && (
                                        <div className="carousel-inner">
                                            <div className="carousel-item active">
                                                <img src={value} className="d-block w-100" style={{ width: '500px', height: '300px' }} alt="..." />
                                            </div>
                                        </div>)
                                )
                            }


                            {/* <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev"
                                onClick={prevSlide}
                            >
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Previous</span>
                            </button>

                            <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next"
                                onClick={nextSlide}
                            >
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Next</span>
                            </button> */}

                            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev"
                            onClick={prevSlide}
                            >
                                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Previous</span>
                            </button>
                            <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next"
                            onClick={nextSlide}
                            >
                                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Next</span>
                            </button>
                        </div>
                    </div>
                </div>


            </div>
        </>
    )
}

export default SliderComponent
