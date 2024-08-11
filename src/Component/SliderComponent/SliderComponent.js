import React from 'react'
import image1 from "../../assests/about.jpg"
import image2 from "../../assests/contact-us-pc.png";
import image3 from "../../assests/contact.jpg";

function SliderComponent() {

    const images = [image1, image2, image3];

    // do +1%5  forward
    // (currentIndex - 1 + n) % n backward
    return (
        <>
            <div className='container my-5'>

                <div className='row text-center'>

                    <div className='col-6'>
                        <div id="carouselExample" className="carousel slide">
                           
                           {
                            images.map((value, index)=>{
                                return (
                                <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <img src={value} className="d-block w-100" alt="..." />
                                </div>
                            </div>)
                            })
                           }


                            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Previous</span>
                            </button>
                            
                            <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
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

export default SliderComponent
