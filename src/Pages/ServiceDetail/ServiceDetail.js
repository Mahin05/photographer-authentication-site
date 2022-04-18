import React, { useState } from 'react';
import { Button, FloatingLabel, Form } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';
import './ServiceDetails.css'


const ServiceDetail = () => {
    const navigate = useNavigate();
    const { serviceId } = useParams();
    const [terms, setTerms] = useState(false);
    const gotoCheckout = () => {
        navigate('/checkout');
    }
    return (
        <div>
            <h2 className='mt-3'>Checkout item No.{serviceId}</h2>
            <div className='text-center form-set-style'>
                <Form onSubmit={gotoCheckout} className='container mx-auto form-style'>
                    <h2 className='text-style text-center'>Checking Form</h2>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control type="text" name="name" placeholder="Enter name" required />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control type="email" name="email" placeholder="Enter email" required />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control type="number" name="number" placeholder="Enter phone number" required />
                    </Form.Group>
                    <FloatingLabel controlId="floatingTextarea2" label="address">
                        <Form.Control
                            as="textarea"
                            placeholder="Enter address"
                            style={{ height: '100px' }}
                            required
                        />
                    </FloatingLabel>
                    <input onClick={() => setTerms(!terms)} type="checkbox" name="terms" id="terms" />
                    <label className={terms ? 'ms-2 text-primary' : 'ms-2 text-danger'} htmlFor="terms">Accept terms & condistions</label> <br />
                    <Button disabled={!terms} className='checkout-btn-style' variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </div>
        </div>
    );
};

export default ServiceDetail;