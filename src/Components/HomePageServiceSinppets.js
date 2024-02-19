import React from 'react';
import '../CSS/HomePageServiceSnippets.css'; // Import the CSS file

export default function HomePageServiceSnippets() {
    return (
        <div className="container">
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
                <div className="col">
                    <div className="card service-card">
                        <a href="/haircut">
                            <img src="https://img.freepik.com/free-photo/guy-barbershop_1157-7718.jpg?w=996&t=st=1707294108~exp=1707294708~hmac=52b4f8c0de3a7a551e6d93b11818bee5dccd7a63b1073d394e28bbe34f021524" className="card-img-top" alt="Card 1" />
                        </a>
                        <div className="card-body">
                            <h5 className="card-title">HairCut</h5>
                            <p className="card-text"> Professional trimming and styling tailored to your preferences for a refreshed and groomed look.</p>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card service-card">
                        <a href="/pedicure">
                            <img src="https://img.freepik.com/free-photo/young-man-doing-pedicure-salon-beauty-concept_1301-3371.jpg?w=996&t=st=1707295443~exp=1707296043~hmac=8f430fb234609138c4552b68582e7a461c860c6853e6585d6e64170c0bda99ee" className="card-img-top" alt="Card 2" />
                        </a>
                        <div className="card-body">
                            <h5 className="card-title">Pedicure</h5>
                            <p className="card-text">Relaxing foot treatment for soft, pampered feet, including nail care and massage for ultimate relaxation and rejuvenation.</p>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card service-card">
                        <a href="/pestcontrol">
                            <img src="https://img.freepik.com/free-photo/people-protective-equipment-disinfecting_23-2148848576.jpg?w=996&t=st=1707294709~exp=1707295309~hmac=5ab84d6d7b77c38c87e180a7b5dadc287d3c685dd2cfb92445489ea9bfcd2d48" className="card-img-top" alt="Card 3" />
                        </a>
                        <div className="card-body">
                            <h5 className="card-title">Pest Control</h5>
                            <p className="card-text"> Effective elimination of pests from your surroundings, ensuring a safe and hygienic environment for you and your property.</p>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card service-card">
                        <a href="/skincare">
                            <img src="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="card-img-top" alt="Card 4" />
                        </a>
                        <div className="card-body">
                            <h5 className="card-title">Skin Care</h5>
                            <p className="card-text">Personalized treatments and regimens to enhance skin health, addressing concerns and promoting a radiant and youthful complexion.</p>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card service-card">
                        <a href="/acrepair">
                            <img src="https://st5.depositphotos.com/10614052/67721/i/600/depositphotos_677210874-stock-photo-female-technician-air-conditioner-showing.jpg" className="card-img-top" alt="Card 5" />
                        </a>
                        <div className="card-body">
                            <h5 className="card-title">AC Cleaning</h5>
                            <p className="card-text">Swift and professional maintenance and repair solutions to ensure optimal performance and comfort in your indoor environment.</p>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card service-card">
                        <a href="/massage">
                            <img src="https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="card-img-top" alt="Card 6" />
                        </a>
                        <div className="card-body">
                            <h5 className="card-title">Massage</h5>
                            <p className="card-text">Relaxing and rejuvenating therapies aimed at relieving tension, promoting circulation, and enhancing overall well-being for a blissful experience.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
