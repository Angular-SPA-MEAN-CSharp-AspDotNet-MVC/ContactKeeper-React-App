import React, {useState, useContext, useEffect} from 'react';
import AlertContext from '../../context/alert/alertContext';
import AuthContext from '../../context/auth/authContext';
import { CLEAR_ERRORS } from '../../types';

export const Register = props => {
    const alertContext =  useContext(AlertContext);
    const authContext  =  useContext(AuthContext);
    const [user, setUser] = useState({
        name : '',
        email: '',
        password: '',
        password2: '' 
    });
    const {name, email, password, password2} = user;
    const { alerts, setAlert } = alertContext;
    const { loadUser, register, error, clearErrors, isAuthenticated } = authContext;

    useEffect ( () => {
        if(isAuthenticated) {
            props.history.push('/');
        }

        // professional way is to check the 'error.id'
        if (error === "The user exists.") {
            setAlert(error, 'danger');
            clearErrors();
        }
        //eslint-disable-next-line
    }, [error, isAuthenticated, props.history]);

    const onChange = (e) => {
        setUser({...user, [e.target.name] : e.target.value});
    }

    const onSubmit = (e) => {
        e.preventDefault(); 
        if(name==='' || email === '' 
            || password === '' || password2 === '')
        {
            setAlert('Please Fill in All Fields', 'danger');
        } else if (password !== password2) {
            setAlert('Password fields must match', 'danger');
        } else{
            register({
                name,
                email,
                password
            });
           console.log('Click the Registriation Button');
        }

    }

    return (
        <div className='form-container'>
            <h1>
                Account <span className='text-primary'>Register</span>
            </h1>            
            <hr/><br/>
            <form onSubmit={onSubmit}>
                <div className='formGroup'>
                    <label htmlFor='name'>Name</label>
                    <input type='text' name='name' value={name} 
                    onChange={onChange}
                    // required //another validate method
                    ></input>
                </div>
                <div className='formGroup'>
                    <label htmlFor='email'>Email</label>
                    <input type='email' name='email' 
                    value={email} onChange={onChange}
                    // required //another validate method
                    // minLength = '6' // another validate method
                    ></input>
                </div>
                <div className='formGroup'>
                    <label htmlFor='password'>Password</label>
                    <input type='password' name='password' value={password} onChange={onChange}></input>
                </div>
                <div className='formGroup'>
                    <label htmlFor='password2'>Confirm Password</label>
                    <input type='password' name='password2' value={password2} onChange={onChange}></input>
                </div>

                <input type ='submit' value='Register' className='btn btn-primary btn-block'/>
            </form>
        </div>
    )
}

export default Register;
