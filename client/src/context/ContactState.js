import React, {userReducer} from 'react';
import uuid from 'uuid';
import ContactContext from './contactContext';
import contactReducer from './contactReducer';

import {
    ADD_CONTACT,
    DELETE_CONTACT,
    SET_CURRENT,
    CLEAR_CURRENT,
    UPDATE_CONTACT,
    FILTER_CONTACTS,
    CLEAR_FILTER
} from '../types';

const ContactState = props => {
    const initialState = {
        constacts: [ // temporary add some dummy data
            {
                id:     1,
                name:   'Jill Johnson',
                email:  'JillJ@yopmail.com',
                phone:  '111-111-1111',
                type:   'personal'
            },
            {
                id:     2,
                name:   'Sara Watson',
                email:  'SaraW@yopmail.com',
                phone:  '222-222-2222',
                type:   'personal'
            },
            {
                id:     3,
                name:   'Harry White',
                email:  'HarryW@yopmail.com',
                phone:  '333-333-3333',
                type:   'professional'
            }
    ]
    };


    const [state, dispatch] = userReducer(contactReducer, initialState);

    // Add Contact

    //Delete Contact

    // Set Current contact

    // Clear Current Contact

    // Update Contact

    // Filter Contacts

    // Clear Filter

    return (
        <ContactContext.Provider
            value ={{ contacts : state.constacts}}
        >
        {props.childern}
        </ContactContext.Provider>
    );
}

export default ContactState;