import React, {useState, useContext} from 'react';
import AlertContext from '../../context/alert/alertContext';
export const Register = () => {
    const alertContext =  useContext(AlertContext);
    const [user, setUser] = useState({
        name : '',
        email: '',
        password: '',
        password2: '' 
    });
    const {name, email, password, password2} = user;
    const { alerts, setAlert } = alertContext;

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
