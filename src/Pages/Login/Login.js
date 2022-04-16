import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import './Login.css'
import auth from '../../firebase.init';


const Login = () => {
    let errorElement;
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const navigate = useNavigate();
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const handleLogin = event => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;

        signInWithEmailAndPassword(email, password);
    }
    if (user) {
        navigate('/home');
    }
    if (error) {
        errorElement = <p className='text-danger mt-3'>Error: {error?.message}</p>
    }
    return (
        <div className='container mx-auto form-style'>
            <h2 className='text-primary text-center'>Login</h2>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control type="email" placeholder="Enter email" ref={emailRef} required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control type="password" placeholder="Password" ref={passwordRef} required />
                </Form.Group>
                <Button onClick={handleLogin} variant="primary" type="submit">
                    Login
                </Button>
                {errorElement}
            </Form>
            <p>new here? <Link to='/register' className='text-primary pe-auto'>please register</Link> </p>
            <p>Forget password?<Link to='/login' className='text-primary pe-auto'>Reset Password</Link></p>

        </div>
    );
};

export default Login;