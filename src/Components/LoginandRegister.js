import React, { useState } from 'react';
import {
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBInput,
    MDBBtn,
} from 'mdb-react-ui-kit';
import axios from 'axios';
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min';

export default function LoginandRegister() {
    const [loginFormData, setLoginFormData] = useState({
        loginEmail: '',
        loginPassword: ''
    });
    const [navigator,SetNavigator]= useState(1)

    const [registerFormData, setRegisterFormData] = useState({
        registerName: '',
        registerEmail: '',
        registerPassword: '',
        registerState: '',
        registerCity: '',
        registerAddress: '',
        registerPincode: '',
        registerMobile: ''
    });

    const [showRegister, setShowRegister] = useState(false);

    const handleLoginChange = (e) => {
        const { name, value } = e.target;
        setLoginFormData({ ...loginFormData, [name]: value });
    };

    const handleRegisterChange = (e) => {
        const { name, value } = e.target;
        setRegisterFormData({ ...registerFormData, [name]: value });
    };

    const handleLoginSubmit = (e) => {
        e.preventDefault();
        console.log("Login form submitted with data:", loginFormData);
        // You can add your login logic here
        axios.post("/api/login",{"email":loginFormData.loginEmail, "password":loginFormData.loginPassword})
        .then((response) => {
            localStorage.setItem("isLoggedIn",true);
            SetNavigator(2);
        })
        .catch((error) => {
            console.error(error);
            SetNavigator(4)
        })
    };

    const handleRegisterSubmit = (e) => {
        e.preventDefault();
        console.log("Register form submitted with data:", registerFormData);
        // You can add your register logic here
        axios.post("/api/",{})
        .then((response)=>{
            SetNavigator(3);
        })
        .catch((error)=>{
            console.error(error);
        })
    };

    const toggleRegister = () => {
        setShowRegister(!showRegister);
    };

    // Object containing major cities for each state
    const majorCitiesByState = {
        'Andhra Pradesh': ['Visakhapatnam', 'Vijayawada', 'Guntur', 'Nellore', 'Kurnool'],
        'Arunachal Pradesh': ['Itanagar', 'Naharlagun', 'Tawang', 'Pasighat', 'Bomdila'],
        'Assam': ['Guwahati', 'Silchar', 'Dibrugarh', 'Nagaon', 'Tezpur'],
        'Bihar': ['Patna', 'Gaya', 'Bhagalpur', 'Muzaffarpur', 'Purnia'],
        'Chhattisgarh': ['Raipur', 'Bhilai', 'Bilaspur', 'Korba', 'Raigarh'],
        'Goa': ['Panaji', 'Margao', 'Vasco Da Gama', 'Mapusa', 'Ponda'],
        'Gujarat': ['Ahmedabad', 'Surat', 'Vadodara', 'Rajkot', 'Bhavnagar'],
        'Haryana': ['Faridabad', 'Gurgaon', 'Panipat', 'Ambala', 'Yamunanagar'],
        'Himachal Pradesh': ['Shimla', 'Mandi', 'Solan', 'Dharamshala', 'Kullu'],
        'Jharkhand': ['Ranchi', 'Jamshedpur', 'Dhanbad', 'Bokaro Steel City', 'Deoghar'],
        'Karnataka': ['Bangalore', 'Mysore', 'Hubli', 'Mangalore', 'Belgaum'],
        'Kerala': ['Thiruvananthapuram', 'Kochi', 'Kozhikode', 'Thrissur', 'Malappuram'],
        'Madhya Pradesh': ['Bhopal', 'Indore', 'Jabalpur', 'Gwalior', 'Ujjain'],
        'Maharashtra': ['Mumbai', 'Pune', 'Nagpur', 'Thane', 'Nashik'],
        'Manipur': ['Imphal', 'Thoubal', 'Kakching', 'Ukhrul', 'Bishnupur'],
        'Meghalaya': ['Shillong', 'Tura', 'Nongstoin', 'Jowai', 'Williamnagar'],
        'Mizoram': ['Aizawl', 'Lunglei', 'Saiha', 'Champhai', 'Serchhip'],
        'Nagaland': ['Kohima', 'Dimapur', 'Mokokchung', 'Wokha', 'Tuensang'],
        'Odisha': ['Bhubaneswar', 'Cuttack', 'Rourkela', 'Brahmapur', 'Sambalpur'],
        'Punjab': ['Ludhiana', 'Amritsar', 'Jalandhar', 'Patiala', 'Bathinda'],
        'Rajasthan': ['Jaipur', 'Jodhpur', 'Udaipur', 'Kota', 'Bikaner'],
        'Sikkim': ['Gangtok', 'Namchi', 'Gyalshing', 'Mangan', 'Ravangla'],
        'Tamil Nadu': ['Chennai', 'Coimbatore', 'Madurai', 'Tiruchirappalli', 'Salem'],
        'Telangana': ['Hyderabad', 'Warangal', 'Nizamabad', 'Karimnagar', 'Ramagundam'],
        'Tripura': ['Agartala', 'Udaipur', 'Bishramganj', 'Kamalpur', 'Khowai'],
        'Uttar Pradesh': ['Lucknow', 'Kanpur', 'Ghaziabad', 'Agra', 'Meerut'],
        'Uttarakhand': ['Dehradun', 'Haridwar', 'Roorkee', 'Haldwani', 'Rudrapur'],
        'West Bengal': ['Kolkata', 'Howrah', 'Asansol', 'Siliguri', 'Durgapur'],
    };

    // List of Indian states
    const indianStates = Object.keys(majorCitiesByState);

    // Function to handle state change
    const handleStateChange = (e) => {
        const { value } = e.target;
        setRegisterFormData({
            ...registerFormData,
            registerState: value,
            registerCity: '' // Reset city when state changes
        });
    };
    if (navigator === 2){
        return (<Redirect to={{pathname:"/"}}/>);
    }
    if (navigator=== 3){
        return(<Redirect to={{pathname:"/login"}}/>)
    }
    if (navigator === 4){
        return (<Redirect to={{ pathname:"/error"}}/>)
    }
    return (
        <MDBContainer className="py-5">
            <MDBRow className="justify-content-center">
                <MDBCol md="6">
                    {!showRegister ? (
                        <>
                            <h2 className="text-center mb-4">Login</h2>
                            <form onSubmit={handleLoginSubmit}>
                                <div className="mb-3">
                                    <label htmlFor="loginEmail" className="form-label">Email address</label>
                                    <input
                                        type="email"
                                        className="form-control"
                                        id="loginEmail"
                                        name="loginEmail"
                                        value={loginFormData.loginEmail}
                                        onChange={handleLoginChange}
                                        required
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="loginPassword" className="form-label">Password</label>
                                    <input
                                        type="password"
                                        className="form-control"
                                        id="loginPassword"
                                        name="loginPassword"
                                        value={loginFormData.loginPassword}
                                        onChange={handleLoginChange}
                                        required
                                    />
                                </div>
                                <MDBBtn type="submit" color="primary" className="w-100">Login</MDBBtn>
                            </form>
                            <p className="text-center mt-3">Don't have an account? <button onClick={toggleRegister} className="btn btn-secondary">Register</button></p>
                        </>
                    ) : (
                        <>
                            <h2 className="text-center mb-4">Register</h2>
                            <form onSubmit={handleRegisterSubmit}>
                                <div className="mb-3">
                                    <label htmlFor="registerName" className="form-label">Full Name</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="registerName"
                                        name="registerName"
                                        value={registerFormData.registerName}
                                        onChange={handleRegisterChange}
                                        required
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="registerEmail" className="form-label">Email address</label>
                                    <input
                                        type="email"
                                        className="form-control"
                                        id="registerEmail"
                                        name="registerEmail"
                                        value={registerFormData.registerEmail}
                                        onChange={handleRegisterChange}
                                        required
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="registerPassword" className="form-label">Password</label>
                                    <input
                                        type="password"
                                        className="form-control"
                                        id="registerPassword"
                                        name="registerPassword"
                                        value={registerFormData.registerPassword}
                                        onChange={handleRegisterChange}
                                        required
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="registerState" className="form-label">State</label>
                                    <select
                                        className="form-select"
                                        id="registerState"
                                        name="registerState"
                                        value={registerFormData.registerState}
                                        onChange={handleStateChange}
                                        required
                                    >
                                        <option value="">Select State</option>
                                        {indianStates.map((state, index) => (
                                            <option key={index} value={state}>{state}</option>
                                        ))}
                                    </select>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="registerCity" className="form-label">City</label>
                                    <select
                                        className="form-select"
                                        id="registerCity"
                                        name="registerCity"
                                        value={registerFormData.registerCity}
                                        onChange={handleRegisterChange}
                                        required
                                    >
                                        <option value="">Select City</option>
                                        {majorCitiesByState[registerFormData.registerState]?.map((city, index) => (
                                            <option key={index} value={city}>{city}</option>
                                        ))}
                                    </select>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="registerAddress" className="form-label">Address</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="registerAddress"
                                        name="registerAddress"
                                        value={registerFormData.registerAddress}
                                        onChange={handleRegisterChange}
                                        required
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="registerPincode" className="form-label">Pincode</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="registerPincode"
                                        name="registerPincode"
                                        value={registerFormData.registerPincode}
                                        onChange={handleRegisterChange}
                                        required
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="registerMobile" className="form-label">Mobile Number</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="registerMobile"
                                        name="registerMobile"
                                        value={registerFormData.registerMobile}
                                        onChange={handleRegisterChange}
                                        required
                                    />
                                </div>
                                <MDBBtn type="submit" color="primary" className="w-100">Register</MDBBtn>
                            </form>
                            <p className="text-center mt-3">Already have an account? <button onClick={toggleRegister} className="btn btn-secondary">Login</button></p>
                        </>
                    )}
                </MDBCol>
            </MDBRow>
        </MDBContainer>
    );
}
