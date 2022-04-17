import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import './Login.css'
import auth from '../../firebase.init';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


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
    const [sendPasswordResetEmail, sending, error1] = useSendPasswordResetEmail(auth);
    const forgetPassword = async ()=> {
        const email = emailRef.current.value;
        if(email){
            await sendPasswordResetEmail(email);
            toast('Password reset email sent');
        }
        else{
            toast('Please enter your email');
        }
    }
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";
    const handleLogin = event => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;

        signInWithEmailAndPassword(email, password);
    }
    if (user) {
        // navigate('/home');
        navigate(from, { replace: true });
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
            <p className='mt-3'>new here? <Link to='/register' className='text-primary pe-auto'>please register</Link> </p>
            <p className='forget-pass-style'>Forget password?<Link onClick={forgetPassword} to='/login' className='text-primary pe-auto'>Reset Password</Link></p>
            <ToastContainer />
        </div>
    );
};

export default Login;