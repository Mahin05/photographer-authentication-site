import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';


const Register = () => {
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);

    const handleRegistration = event => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;
        createUserWithEmailAndPassword(email, password)

    }
    return (
        <div>
            <Form onSubmit={handleRegistration} className='container mx-auto form-style'>
                <h2 className='text-primary text-center'>Register</h2>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control type="email" name="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control type="password" name="password" placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" name="terms" id="terms" label="Accept terms & conditions" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
                <p>Already registered? <Link to='/login' className='text-primary pe-auto'>please login</Link> </p>
            </Form>
        </div>
    );
};

export default Register;