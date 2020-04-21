import React, {useState, useReducer} from 'react';
import AlertContext from './alertContext';
import alertReducer from './alertReducer';
import {v4 as uuid} from 'uuid';
//import {uuid} from 'uuid';
import {
    SET_ALERT,
    REMOVE_ALERT
} from '../../types';

const AlertState = props => {
    //const alertReducer = useReducer(AlertReducer);
    const initialState = [];
        // useState({
        //   alerts: [],
        //   alert : '',
        //   type: null
        // });
    const [state, dispatch] = useReducer(alertReducer, initialState)
  
    //SET_ALERT
    const setAlert = (msg, type, timeout=5000) =>{
        const id = uuid();
        dispatch({
            type : SET_ALERT,
            payload : {msg, type, id}
        });

        setTimeout(()=>dispatch({type: REMOVE_ALERT, payload: id}), timeout );
    }
    
    // //REMOVE_ALERT
    // const removeAlert = (id) => {
    //     dispatch({
    //         type: REMOVE_ALERT,
    //         payload: id
    //     });
    // }

    return (
        <AlertContext.Provider
            value = {{
                alerts:state,
                setAlert
            }}>
            {props.children}
        </AlertContext.Provider>
    );
}

export default AlertState;