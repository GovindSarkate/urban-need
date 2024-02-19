import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
//import '../CSS/AcRepair.css'; // Import your CSS file here

export default function AcRepair() {
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
          {/* Basic AC Service */}
          <Card className="service-card" style={{ width: '100%', height: 'fit-content', marginBottom: '20px' }}>
            <Card.Body>
              <Card.Title>Basic AC Service</Card.Title>
              <Card.Text>Price: ₹799</Card.Text>
              <Form.Check
                type="checkbox"
                label="Select this service"
                onChange={() => handleCheckboxChange('Basic AC Service', 799)}
              />
              <img src="https://img.freepik.com/premium-photo/male-technician-overalls-blue-cap-repairs-air-conditioner-wall_353017-470.jpg?w=996" alt="Basic AC Service" style={{ position: 'absolute', top: '5px', right: '5px', width: '180px', height: 'auto' }} />
            </Card.Body>
          </Card>

          {/* AC Repair and Maintenance */}
          <Card className="service-card" style={{ width: '100%', height: 'fit-content', marginBottom: '20px' }}>
            <Card.Body>
              <Card.Title>AC Repair and Maintenance</Card.Title>
              <Card.Text>Price: ₹1299</Card.Text>
              <Form.Check
                type="checkbox"
                label="Select this service"
                onChange={() => handleCheckboxChange('AC Repair and Maintenance', 1299)}
              />
              <img src="https://img.freepik.com/premium-photo/technician-service-removing-air-filter-air-conditioner-cleaning_35076-3617.jpg?w=996" alt="AC Repair and Maintenance" style={{ position: 'absolute', top: '5px', right: '5px', width: '180px', height: 'auto' }} />
            </Card.Body>
          </Card>

          {/* AC Gas Refilling */}
          <Card className="service-card" style={{ width: '100%', height: 'fit-content' }}>
            <Card.Body>
              <Card.Title>AC Gas Refilling</Card.Title>
              <Card.Text>Price: ₹999</Card.Text>
              <Form.Check
                type="checkbox"
                label="Select this service"
                onChange={() => handleCheckboxChange('AC Gas Refilling', 999)}
              />
              <img src="https://images.unsplash.com/photo-1510467181625-c419e443bdfa?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="AC Gas Refilling" style={{ position: 'absolute', top: '5px', right: '5px', width: '180px', height: 'auto' }} />
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
