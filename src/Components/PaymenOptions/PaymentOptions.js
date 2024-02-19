import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCreditCard, faMobile } from '@fortawesome/free-solid-svg-icons'; // Import the icons you need

const PaymentOptions = ({ location }) => {
    // Access totalPrice from query parameters
    const totalPrice = new URLSearchParams(location.search).get('totalPrice') || 0;

    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-lg-6">
                    <Card className="shadow-sm">
                        <Card.Body>
                            <Card.Title className="text-center mb-4">Select Payment Option</Card.Title>
                            <div className="text-center mb-4">
                                <p className="lead">Total Amount: <span className="text-primary">{totalPrice} ₹</span></p>
                            </div>
                            <div className="d-flex justify-content-center">
                                <Button href='/creditcard' className="btn btn-primary mr-2">
                                    <FontAwesomeIcon icon={faCreditCard} className="mr-2" /> Pay with Credit Card
                                </Button>
                                &nbsp;
                                <Button href='/upi' className="btn btn-success">
                                    <FontAwesomeIcon icon={faMobile} className="mr-2" /> Pay with UPI
                                </Button>
                            </div>
                            {/* Add more payment options as needed */}
                        </Card.Body>
                    </Card>
                </div>
            </div>
        </div>
    );
}

export default PaymentOptions;
