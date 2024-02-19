import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
//import '../CSS/SkinCare.css'; // Import your CSS file here

export default function SkinCare() {
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
          {/* Basic Skin Care */}
          <Card className="service-card" style={{ width: '100%', height: 'fit-content', marginBottom: '20px' }}>
            <Card.Body>
              <Card.Title>Basic Skin Care</Card.Title>
              <Card.Text>Price: ₹599</Card.Text>
              <Form.Check
                type="checkbox"
                label="Select this service"
                onChange={() => handleCheckboxChange('Basic Skin Care', 599)}
              />
              <img src="https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Basic Skin Care" style={{ position: 'absolute', top: '5px', right: '5px', width: '180px', height: 'auto' }} />
            </Card.Body>
          </Card>

          {/* Advanced Skin Treatment */}
          <Card className="service-card" style={{ width: '100%', height: 'fit-content', marginBottom: '20px' }}>
            <Card.Body>
              <Card.Title>Advanced Skin Treatment</Card.Title>
              <Card.Text>Price: ₹999</Card.Text>
              <Form.Check
                type="checkbox"
                label="Select this service"
                onChange={() => handleCheckboxChange('Advanced Skin Treatment', 999)}
              />
              <img src="https://img.freepik.com/premium-photo/shot-beautiful-young-woman-getting-facial-mask-treatment-beauty-salon_360066-21259.jpg?w=996" alt="Advanced Skin Treatment" style={{ position: 'absolute', top: '5px', right: '5px', width: '180px', height: 'auto' }} />
            </Card.Body>
          </Card>

          {/* Skin Rejuvenation */}
          <Card className="service-card" style={{ width: '100%', height: 'fit-content' }}>
            <Card.Body>
              <Card.Title>Skin Rejuvenation</Card.Title>
              <Card.Text>Price: ₹1299</Card.Text>
              <Form.Check
                type="checkbox"
                label="Select this service"
                onChange={() => handleCheckboxChange('Skin Rejuvenation', 1299)}
              />
              <img src="https://img.freepik.com/free-photo/beautiful-girl-face-perfect-skin_155003-10633.jpg?w=996&t=st=1707291815~exp=1707292415~hmac=0a26e718c25e7e66b5a928b1f05966fbb64fc25c195d94d4accc805bd9e3ace9" alt="Skin Rejuvenation" style={{ position: 'absolute', top: '5px', right: '5px', width: '180px', height: 'auto' }} />
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
              <Button variant="primary">Checkout</Button>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  );
}
