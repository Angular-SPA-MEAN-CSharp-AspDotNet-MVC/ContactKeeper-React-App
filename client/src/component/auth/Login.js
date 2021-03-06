import React, {useState} from 'react';

export const Login = () => {
    const [user, setUser] = useState({
        email: '',
        password: ''
    });
    const {email, password} = user;

    const onChange = (e) => {
        setUser({...user, [e.target.name] : e.target.value});
    }

    const onSubmit = (e) => {
        e.preventDefault();
        console.log('Click the Login Button');
    }

    return (
        <div className='form-container'>
            <h1>
                Account <span className='text-primary'>Login</span>
            </h1>            
            <hr/><br/>
            <form onSubmit ={onSubmit}>                
                <div className='formGroup'>
                    <label htmlFor='email'>Email</label>
                    <input type='email' name='email' value={email} onChange={onChange}></input>
                </div>
                <div className='formGroup'>
                    <label htmlFor='password'>Password</label>
                    <input type='password' name='password' value={password} onChange={onChange}></input>
                </div>
                <input type ='submit' value='Log In' className='btn btn-primary btn-block'/>
            </form>
        </div>
    )
}

export default Login;
