import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
//import '../CSS/Pedicure.css'; // Import your CSS file here

export default function Pedicure() {
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
          {/* First Service Card: Pedicure for 799 rupees */}
          <Card className="service-card" style={{ width: '100%', height: 'fit-content', marginBottom: '20px' }}>
            <Card.Body>
              <Card.Title>Pedicure</Card.Title>
              <Card.Text>Price: ₹799</Card.Text>
              <Form.Check
                type="checkbox"
                label="Select this service"
                onChange={() => handleCheckboxChange('Pedicure', 799)}
              />
              <img src="https://img.freepik.com/free-photo/young-man-doing-pedicure-salon-beauty-concept_1301-3370.jpg?w=996&t=st=1707290746~exp=1707291346~hmac=3b0d311de1ae6fb7ff7ddfecf548e92fd3a39d085a6d12be7d6e670a36469d04" alt="Pedicure" style={{ position: 'absolute', top: '5px', right: '5px', width: '180px', height: 'auto' }} />
            </Card.Body>
          </Card>

          {/* Second Service Card: Manicure and Pedicure for 1199 rupees */}
          <Card className="service-card" style={{ width: '100%', height: 'fit-content' }}>
            <Card.Body>
              <Card.Title>Manicure and Pedicure</Card.Title>
              <Card.Text>Price: ₹1199</Card.Text>
              <Form.Check
                type="checkbox"
                label="Select this service"
                onChange={() => handleCheckboxChange('Manicure and Pedicure', 1199)}
              />
              <img src="https://img.freepik.com/free-photo/woman-nail-salon-receiving-manicure-by-beautician-beauty-treatment-concept_186202-8769.jpg?w=996&t=st=1707290863~exp=1707291463~hmac=317cc166b118b141a30964fdc72ae981a5aa71a3dceb50e0c4615cda2b6ff26e" alt="Manicure and Pedicure" style={{ position: 'absolute', top: '5px', right: '5px', width: '180px', height: 'auto' }} />
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
