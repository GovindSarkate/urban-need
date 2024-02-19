import React, { useState } from 'react';
import 'react-credit-cards/es/styles-compiled.css';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import '../../CSS/CreditCard.css'; // Import your CSS file for styling

const CreditCardPayment = () => {
    const [cardNumber, setCardNumber] = useState('');
    const [cardHolder, setCardHolder] = useState('');
    const [expiryDate, setExpiryDate] = useState(null);
    const [cvv, setCvv] = useState('');
    const [cardNumberError, setCardNumberError] = useState(false);
    const [cardHolderError, setCardHolderError] = useState(false);
    const [expiryDateError, setExpiryDateError] = useState(false);
    const [cvvError, setCvvError] = useState(false);

    const handlePayment = () => {
        // Check if any fields are empty
        if (!cardNumber || !cardHolder || !expiryDate || !cvv) {
            setCardNumberError(!cardNumber);
            setCardHolderError(!cardHolder);
            setExpiryDateError(!expiryDate);
            setCvvError(!cvv);
            return;
        }

        // Validate card number (must be exactly 16 digits)
        if (!/^\d{16}$/.test(cardNumber)) {
            setCardNumberError(true);
            return;
        }

        // Validate expiry date (must be in the future)
        const today = new Date();
        if (expiryDate <= today) {
            setExpiryDateError(true);
            return;
        }

        // Validate CVV (must be exactly 3 digits)
        if (!/^\d{3}$/.test(cvv)) {
            setCvvError(true);
            return;
        }

        // If all validations pass, submit payment
        console.log('Payment submitted:', { cardNumber, cardHolder, expiryDate, cvv });

        // Reset form fields after payment
        setCardNumber('');
        setCardHolder('');
        setExpiryDate(null);
        setCvv('');
        // Reset error states
        setCardNumberError(false);
        setCardHolderError(false);
        setExpiryDateError(false);
        setCvvError(false);
    };

    const handleCardNumberChange = (e) => {
        const input = e.target.value;
        // Validate if input contains only digits
        if (/^\d*$/.test(input)) {
            setCardNumber(input);
            setCardNumberError(false); // Set error state to false when input is valid
        } else {
            setCardNumberError(true); // Set error state to true when input is invalid
        }
    };

    return (
        <div className="container">
            <div className="row">
                <div className="col-lg-8 offset-lg-2">
                    <div className="payment-box"> {/* Apply CSS to style it as a box */}
                        <h2 style={{ color: 'green' }}>Credit Card Payment</h2>
                        <form>
                            <div className={`form-group ${cardNumberError ? 'error' : ''}`}>
                                <label>Card Number</label>
                                <input
                                    type="text"
                                    className={`form-control ${cardNumberError ? 'error-input' : ''}`}
                                    value={cardNumber}
                                    onChange={handleCardNumberChange}
                                    placeholder="Enter card number"
                                />
                            </div>
                            <div className={`form-group ${cardHolderError ? 'error' : ''}`}>
                                <label>Card Holder</label>
                                <input
                                    type="text"
                                    className={`form-control ${cardHolderError ? 'error-input' : ''}`}
                                    value={cardHolder}
                                    onChange={(e) => setCardHolder(e.target.value)}
                                    placeholder="Enter card holder name"
                                />
                            </div>
                            &nbsp;
                            <div className={`form-group ${expiryDateError ? 'error' : ''}`}>
                                <label>Expiration Date</label>
                                <DatePicker
                                    className={`form-control ${expiryDateError ? 'error-input' : ''}`}
                                    selected={expiryDate}
                                    onChange={(date) => setExpiryDate(date)}
                                    dateFormat="MM/yyyy"
                                    showMonthYearPicker
                                    placeholderText="Select expiration date"
                                    minDate={new Date()} // Ensures that only future dates are selectable
                                />
                            </div>
                            <div className={`form-group ${cvvError ? 'error' : ''}`}>
                                <label>CVV</label>
                                <input
                                    type="text"
                                    className={`form-control ${cvvError ? 'error-input' : ''}`}
                                    value={cvv}
                                    onChange={(e) => setCvv(e.target.value)}
                                    placeholder="Enter CVV"

                                />
                                &nbsp;
                            </div>

                            <button type="button" className="btn btn-primary" onClick={handlePayment}>
                                Pay Now
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CreditCardPayment;
