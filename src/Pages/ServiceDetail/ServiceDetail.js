import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useNavigate, useParams } from 'react-router-dom';
import './ServiceDetails.css'


const ServiceDetail = () => {
    const navigate = useNavigate();
    const { serviceId } = useParams();
    const [terms, setTerms] = useState(false);
    const gotoCheckout =() => {
        navigate('/checkout');
    }
    return (
        <div>
            <h2 className='mt-3'>Book Now item No.{serviceId}</h2>
            <div className='text-center'>
                <Form className='container mx-auto form-style'>
                    <h2 className='text-primary text-center'>Booking Form</h2>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control type="text" name="name" placeholder="Enter your name" required />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control type="email" name="email" placeholder="Enter email" required />
                    </Form.Group>
                    <textarea rows="5" placeholder='Enter your address' required />
                    <input onClick={() => setTerms(!terms)} type="checkbox" name="terms" id="terms" />
                    <label className={terms ? 'ms-2 text-primary' : 'ms-2 text-danger'} htmlFor="terms">Accept terms & condistions</label> <br />

                        <button onClick={gotoCheckout} disabled={!terms} className='btn btn-primary d-block mx-auto mt-3 btn-m'>Proceed Checkout</button>
                </Form>
            </div>
        </div>
    );
};

export default ServiceDetail;