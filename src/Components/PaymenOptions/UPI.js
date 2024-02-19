import React, { useState } from 'react';
import QRCode from 'qrcode.react';

const UpiPayment = () => {
    const [upiId, setUpiId] = useState('');
    const [amount, setAmount] = useState('');
    const [upiIdError, setUpiIdError] = useState(false);
    const [amountError, setAmountError] = useState(false);

    const handlePayment = () => {
        // Check if any fields are empty
        if (!upiId || !amount) {
            setUpiIdError(!upiId);
            setAmountError(!amount);
            return;
        }

        // If all validations pass, submit payment
        console.log('UPI Payment submitted:', { upiId, amount });

        // Reset form fields after payment
        setUpiId('');
        setAmount('');
        // Reset error states
        setUpiIdError(false);
        setAmountError(false);
    };

    return (
        <div className="container">
            <div className="row">
                <div className="col-lg-8">
                    <h2 style={{ color: 'blue' }}>UPI Payment</h2> {/* Change color here */}
                    <form>
                        <div className={`form-group ${upiIdError ? 'error' : ''}`}>
                            <label>UPI ID</label>
                            <input
                                type="text"
                                className={`form-control ${upiIdError ? 'error-input' : ''}`}
                                value={upiId}
                                onChange={(e) => setUpiId(e.target.value)}
                                placeholder="Enter UPI ID"
                            />
                        </div>
                        <div className={`form-group ${amountError ? 'error' : ''}`}>
                            <label>Amount</label>
                            <input
                                type="text"
                                className={`form-control ${amountError ? 'error-input' : ''}`}
                                value={amount}
                                onChange={(e) => setAmount(e.target.value)}
                                placeholder="Enter amount"
                            />
                        </div>
                        <br></br>
                        <button type="button" className="btn btn-primary" onClick={handlePayment}>
                            Pay Now
                        </button>
                    </form>
                </div>
                <div className="col-lg-4">
                    {/* Display QR code */}
                    {upiId && amount && (
                        <div>
                            <h3>Scan QR Code to Pay</h3>
                            <QRCode value={`upi://${upiId}?amount=${amount}`} />
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default UpiPayment;
