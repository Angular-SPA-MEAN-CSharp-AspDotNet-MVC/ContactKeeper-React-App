import React, {Fragment, useContext} from 'react';
import ContactContext from '../../context/contact/contactContext';
import ContactItem from './ContactItem';

export const Contact = () => {
    const contactContext = useContext(ContactContext);
    const { contacts, filtered } = contactContext;
     
    if (filtered !== null){
        return (
            <Fragment>
                    { filtered.map( contact => (
                    // <h3>{contact.name}</h3>
                    <ContactItem key={contact.id} contact={contact}/>
                ) ) }
            </Fragment>                    
        );

    } else {
        return (
            <Fragment>
                { contacts.map( contact => (
                    // <h3>{contact.name}</h3>
                    <ContactItem key={contact.id} contact={contact}/>
                ) ) }
            </Fragment>
        );
    }      
    
}

export default Contact;