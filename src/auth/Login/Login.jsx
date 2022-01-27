import React, { useState } from 'react';
import LoginLayout from '../../components/layout/Layout';
import { Navigate } from 'react-router-dom';
import { authenticate, isAuth } from './helpers';
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios';
import 'react-toastify/dist/ReactToastify.min.css';

function LoginForm() {

    const [values, setValues] = useState({
        email: 'admin@akademisains.gov.my',
        password: 'Abc1234$',
        buttonText: 'Log In' //autofill form for development
    });

    const { email, password, buttonText } = values;

    const handleChange = name => event => {
        setValues({ ...values, [name]: event.target.value });
    };

    const clickSubmit = event => {
        event.preventDefault();
        setValues({ ...values, buttonText: 'Logging' });
        axios({
            method: 'POST',
            url: 'http://localhost:8080/api/users/login',
            data: { email, password }
        })
            .then(response => {
                console.log('LOGIN SUCCESS', response);
                authenticate(response, () => {
                    setValues({ ...values, name: '', email: '', password: '', buttonText: 'Submitted' });
                    toast.success(`Hey ${response.data.user.email}, Welcome back!`);
                })

            })
            .catch(error => {
                console.log('LOGIN ERROR', error.response.data);
                setValues({ ...values, buttonText: 'Log In' });
                toast.error(error.response.data.error);
            });
    };

    const loginForm = () => (

        <form>
            <div className="mb-3">
                <label className="form-label">Email address</label>
                <input onChange={handleChange('email')} type="email" value={email} className="form-control" id="inputEmail" placeholder="Enter email" required />
            </div>
            <div className="mb-3">
                <label className="form-label">Password</label>
                <input onChange={handleChange('password')} type="password" value={password} className="form-control" id="inputPassword" placeholder="Enter password" required />
            </div>
            <div className="mb-3 form-check">
                <input type="checkbox" className="form-check-input" id="inputCheckMeOut" />
                <label className="form-check-label" >Check me out</label>
            </div>
            <div className="d-grid gap-2">
                <button
                    className="btn btn-primary py-2"
                    onClick={clickSubmit}>
                    {buttonText}
                </button>
            </div>
        </form>

    );
    return (
        <>
            <div style={{ marginTop: 10 + 'rem' }}>
                <LoginLayout>
                    {isAuth() && isAuth().user_type === 'admin' ? (
                        <div>
                            <ToastContainer />
                            <Navigate to="admin/dashboard" />
                        </div>
                    ) : null}
                    {isAuth() && isAuth().user_type === 'fellow' ? (
                        <div>
                            <ToastContainer />
                            <Navigate to="fellow/dashboard" />
                        </div>
                    ) : null}
                    <ToastContainer />
                    <h3>Login</h3>
                    {loginForm()}
                </LoginLayout>
            </div>
        </>
    )
}

export default LoginForm
