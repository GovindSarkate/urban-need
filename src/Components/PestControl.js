import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
//import '../CSS/PestControl.css'; // Import your CSS file here

export default function PestControl() {
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
          {/* Basic Pest Control */}
          <Card className="service-card" style={{ width: '100%', height: 'fit-content', marginBottom: '20px' }}>
            <Card.Body>
              <Card.Title>Basic Pest Control</Card.Title>
              <Card.Text>Price: ₹999</Card.Text>
              <Form.Check
                type="checkbox"
                label="Select this service"
                onChange={() => handleCheckboxChange('Basic Pest Control', 999)}
              />
              <img src="https://img.freepik.com/free-photo/person-protective-suit-getting-ready-disinfect-room_23-2148848560.jpg?w=996&t=st=1707293778~exp=1707294378~hmac=b426f8b6e597d52a1b92af0ac6b7eca1af8f56dd628e547df28a61e8de57d563" alt="Basic Pest Control" style={{ position: 'absolute', top: '5px', right: '5px', width: '180px', height: 'auto' }} />
            </Card.Body>
          </Card>

          {/* Advanced Pest Control */}
          <Card className="service-card" style={{ width: '100%', height: 'fit-content', marginBottom: '20px' }}>
            <Card.Body>
              <Card.Title>Advanced Pest Control</Card.Title>
              <Card.Text>Price: ₹1499</Card.Text>
              <Form.Check
                type="checkbox"
                label="Select this service"
                onChange={() => handleCheckboxChange('Advanced Pest Control', 1499)}
              />
              <img src="https://img.freepik.com/free-photo/people-disinfecting-together-dangerous-area_23-2148848567.jpg?w=996&t=st=1707293908~exp=1707294508~hmac=3c72a6075f88f2064bebf3cf49baf515befcc5b2dff9a9798598e4b0e1d39859" alt="Advanced Pest Control" style={{ position: 'absolute', top: '5px', right: '5px', width: '180px', height: 'auto' }} />
            </Card.Body>
          </Card>

          {/* Termite Control */}
          <Card className="service-card" style={{ width: '100%', height: 'fit-content' }}>
            <Card.Body>
              <Card.Title>Termite Control</Card.Title>
              <Card.Text>Price: ₹1999</Card.Text>
              <Form.Check
                type="checkbox"
                label="Select this service"
                onChange={() => handleCheckboxChange('Termite Control', 1999)}
              />
              <img src="https://img.freepik.com/premium-photo/exterminator-work-clothes-sprays-pesticides-with-spray-gun-fight-against-insects-apartments-houses-disinsection-premises_96336-2944.jpg?w=996" alt="Termite Control" style={{ position: 'absolute', top: '5px', right: '5px', width: '180px', height: 'auto' }} />
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
