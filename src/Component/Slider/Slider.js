import React from 'react'
import './Slider.css'
export default function Slider() {
    const slider3="https://www.macquarie.com/assets/macq/impact/case-studies/making-the-switch-to-renewable-energy/australian-solar-panels-hero.jpg"
    const slider1= "https://img.onmanorama.com/content/dam/mm/en/news/india/images/2022/1/22/rooftop-solar.jpg"
    const slider2= "https://thisoldhouse.jppadmin.com/wp-content/uploads/sites/10/2022/06/Types_of_Solar_Panels-min-scaled.jpeg"
    return (
        <>
            <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    
                    <div className="carousel-item active">
                        <img src={slider2} className="d-block w-100  " alt="demo image" />
                    </div>
                    <div className="carousel-item">
                        <img src={slider3} className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src={slider1} className="d-block w-100" alt="..." />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>

        </>
    )
}
