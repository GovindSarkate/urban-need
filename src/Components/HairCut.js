import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import '../CSS/HairCut.css'; // Import your CSS file here

export default function HairCut() {
    const [selectedServices, setSelectedServices] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);

    const handleCheckboxChange = (serviceName, price) => {
        const index = selectedServices.findIndex(service => service.name === serviceName);
        if (index === -1) {
            const updatedServices = [...selectedServices, { name: serviceName, price }];
            setSelectedServices(updatedServices);
            const total = updatedServices.reduce((acc, curr) => acc + curr.price, 0);
            setTotalPrice(total);
        } else {
            setSelectedServices(selectedServices.filter(service => service.name !== serviceName));
            const total = selectedServices.reduce((acc, curr) => acc + curr.price, 0) - price;
            setTotalPrice(total);
        }
    };

    return (
        <div className="container">
            <div className="row">
                <div className="col-lg-8">
                    {/* First Service Card: Just Haircut for 399 rupees */}
                    <Card className="service-card" style={{ width: '100%', height: 'fit-content', marginBottom: '20px' }}>
                        <Card.Body>
                            <Card.Title>Just Haircut</Card.Title>
                            <Card.Text>Price: ₹399</Card.Text>
                            <Form.Check
                                type="checkbox"
                                label="Select this service"
                                onChange={() => handleCheckboxChange('Just Haircut', 399)}
                            />
                            <img src="https://plus.unsplash.com/premium_photo-1661420297394-a8a9590e93a8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Just Haircut" style={{ position: 'absolute', top: '5px', right: '5px', width: '180px', height: 'auto' }} />
                        </Card.Body>
                    </Card>

                    {/* Second Service Card: Haircut and Hair Spa for 799 rupees */}
                    <Card className="service-card" style={{ width: '100%', height: 'fit-content', marginBottom: '20px' }}>
                        <Card.Body>
                            <Card.Title>Haircut and Hair Spa</Card.Title>
                            <Card.Text>Price: ₹799</Card.Text>
                            <Form.Check
                                type="checkbox"
                                label="Select this service"
                                onChange={() => handleCheckboxChange('Haircut and Hair Spa', 799)}
                            />
                            <img src="https://img.freepik.com/free-photo/pleasure-face-during-massage_23-2147638155.jpg?w=996&t=st=1707247274~exp=1707247874~hmac=fe62aaf4d3d3de9745b46f231715ac77c5fe36577ffa2ea9dceb1634365e9c7d" alt="Haircut and Hair Spa" style={{ position: 'absolute', top: '5px', right: '5px', width: '180px', height: 'auto' }} />
                        </Card.Body>
                    </Card>

                    {/* Third Service Card: Haircut with Keratin Treatment for 1299 rupees */}
                    <Card className="service-card" style={{ width: '100%', height: 'fit-content' }}>
                        <Card.Body>
                            <Card.Title>Haircut with Keratin Treatment</Card.Title>
                            <Card.Text>Price: ₹1299</Card.Text>
                            <Form.Check
                                type="checkbox"
                                label="Select this service"
                                onChange={() => handleCheckboxChange('Haircut with Keratin Treatment', 1299)}
                            />
                            <img src="https://images.unsplash.com/photo-1590540179852-2110a54f813a?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWVuJTIwaGFpcnxlbnwwfHwwfHx8MA%3D%3D" alt="Haircut with Keratin Treatment" style={{ position: 'absolute', top: '5px', right: '5px', width: '180px', height: 'auto' }} />
                        </Card.Body>
                    </Card>
                </div>
                <div className="col-lg-4">
                    {/* Shopping Cart */}
                    <Card>
                        <Card.Body>
                            <Card.Title>Shopping Cart</Card.Title>
                            <Card.Text>
                                <strong>Total Amount: {totalPrice} ₹</strong>
                            </Card.Text>
                            {selectedServices.map((service, index) => (
                                <Card.Text key={index}>
                                    {service.name}: {service.price} ₹
                                </Card.Text>
                            ))}
                            {/* Use anchor tag to navigate and pass totalPrice as query parameter */}
                            <a href={`/payment?totalPrice=${totalPrice}`} className="btn btn-primary">Checkout</a>
                        </Card.Body>
                    </Card>
                </div>
            </div>
        </div>
    );
}
