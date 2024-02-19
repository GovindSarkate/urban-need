import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
//import '../CSS/BodyMassage.css'; // Import your CSS file here

export default function BodyMassage() {
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
          {/* Full Body Massage */}
          <Card className="service-card" style={{ width: '100%', height: 'fit-content', marginBottom: '20px' }}>
            <Card.Body>
              <Card.Title>Full Body Massage</Card.Title>
              <Card.Text>Price: ₹999</Card.Text>
              <Form.Check
                type="checkbox"
                label="Select this service"
                onChange={() => handleCheckboxChange('Full Body Massage', 999)}
              />
              <img src="https://img.freepik.com/free-photo/front-view-woman-working-spa_23-2150911815.jpg?w=996&t=st=1707291169~exp=1707291769~hmac=c6793ef60f79c9c63af0b1eb44a475b2e219570b6ce7d61c40118bf587ac5648" alt="Full Body Massage" style={{ position: 'absolute', top: '5px', right: '5px', width: '180px', height: 'auto' }} />
            </Card.Body>
          </Card>

          {/* Head and Neck Massage */}
          <Card className="service-card" style={{ width: '100%', height: 'fit-content', marginBottom: '20px' }}>
            <Card.Body>
              <Card.Title>Head and Neck Massage</Card.Title>
              <Card.Text>Price: ₹499</Card.Text>
              <Form.Check
                type="checkbox"
                label="Select this service"
                onChange={() => handleCheckboxChange('Head and Neck Massage', 499)}
              />
              <img src="https://img.freepik.com/free-photo/woman-getting-head-massage-spa_23-2148345773.jpg?w=996&t=st=1707291227~exp=1707291827~hmac=e3e2974d0622acae191a638de89f4e877ae28eaa972430ee32cd34a7e8786362" alt="Head and Neck Massage" style={{ position: 'absolute', top: '5px', right: '5px', width: '180px', height: 'auto' }} />
            </Card.Body>
          </Card>

          {/* Foot Reflexology Massage */}
          <Card className="service-card" style={{ width: '100%', height: 'fit-content', marginBottom: '20px' }}>
            <Card.Body>
              <Card.Title>Foot Reflexology Massage</Card.Title>
              <Card.Text>Price: ₹599</Card.Text>
              <Form.Check
                type="checkbox"
                label="Select this service"
                onChange={() => handleCheckboxChange('Foot Reflexology Massage', 599)}
              />
              <img src="https://img.freepik.com/premium-photo/filling-foot-with-reiki-energy_172134-959.jpg?w=996" alt="Foot Reflexology Massage" style={{ position: 'absolute', top: '5px', right: '5px', width: '180px', height: 'auto' }} />
            </Card.Body>
          </Card>

          {/* Thai Massage */}
          <Card className="service-card" style={{ width: '100%', height: 'fit-content' }}>
            <Card.Body>
              <Card.Title>Thai Massage</Card.Title>
              <Card.Text>Price: ₹799</Card.Text>
              <Form.Check
                type="checkbox"
                label="Select this service"
                onChange={() => handleCheckboxChange('Thai Massage', 799)}
              />
              <img src="https://img.freepik.com/free-photo/closeup-relaxed-woman-getting-back-massage-with-herbal-balls-health-spa_637285-2100.jpg?w=996&t=st=1707291371~exp=1707291971~hmac=07414c7aa55687a36efaa67b423670a5507603a1737a01fb33586ed016c84980" alt="Thai Massage" style={{ position: 'absolute', top: '5px', right: '5px', width: '180px', height: 'auto' }} />
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
