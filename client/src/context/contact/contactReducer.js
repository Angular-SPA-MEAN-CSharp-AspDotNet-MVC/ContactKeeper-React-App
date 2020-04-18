import React from 'react';
import {
    ADD_CONTACT,
    DELETE_CONTACT,
    SET_CURRENT,
    CLEAR_CURRENT,
    UPDATE_CONTACT,
    FILTER_CONTACTS,
    CLEAR_FILTER
} from '../../types';

export default (state, action) => {
    switch(action.type){    
        case ADD_CONTACT:
            return{
                //state: [...contacts, [id: uuid.v4(), contact]],
                //action: 'ADD_CONTACT'
                ...state,
                contacts: [ ...state.contacts, action.payload]
            };
        case DELETE_CONTACT:
            return {
                ...state,
                //contacts: [contact => contact.filter(contact.id !== action.payload)] ?? think again
                contacts: state.contacts.filter(contact => contact.id !== action.payload)
            };
        case SET_CURRENT:
            return {
                ...state,
                current: action.payload
            };
        case CLEAR_CURRENT:
            return {
                ...state,
                current: null
            };
        case UPDATE_CONTACT:
            return{
                ...state,
                contacts: state.contacts.map( contact => { return contact.id === action.payload.id ? action.payload : contact })
            };
        default: 
            return state;            
    }
}

//export default contactReducer;
