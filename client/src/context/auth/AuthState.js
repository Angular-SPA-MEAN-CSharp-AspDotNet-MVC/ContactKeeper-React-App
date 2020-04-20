import React, {useReducer} from 'react';
import authReducer from './authReducer';
import AuthContext from './authContext';

import {
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    USER_LOADED,
    AUTH_ERROR,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT,
    CLEAR_ERRORS
} from '../../types';

const AuthState = props => {
    const initialState = {
        token: localStorage.getItem('token'),
        isAuthenticated: null,
        loading: true,
        user: null,
        error: null
    };

    const [state, dispatch] = useReducer(authReducer, intialState);

   
    //Load User

    //Register User

    //Login User

    //Logout

    //Clear Error


    return (
        <AuthContext.Proider
            value={{

            }}        
        >
            {props.children}
        </AuthContext.Proider>
    );
}

export default AuthState;
