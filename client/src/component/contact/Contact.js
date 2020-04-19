import React, {Fragment, useContext} from 'react';
import {TransitionGroup, CSSTransition} from 'react-transition-group';
import ContactContext from '../../context/contact/contactContext';
import ContactItem from './ContactItem';


export const Contact = () => {
    const contactContext = useContext(ContactContext);
    const { contacts, filtered } = contactContext;
     
    if (filtered !== null){
        return (
            <Fragment>
                <TransitionGroup>
                    { filtered.map( contact => (
                        // <h3>{contact.name}</h3>
                    
                        <CSSTransition key={contact.id} classNames='item' timeout={1000}>
                            <ContactItem contact={contact}/>
                        </CSSTransition>                        
                   
                    
                ) ) } 
                </TransitionGroup>
            </Fragment>                    
        );

    } else {
        return (
            <Fragment>
                    <TransitionGroup>
                        { contacts.map( contact => (
                            // <h3>{contact.name}</h3>
                            <CSSTransition key={contact.id} classNames='item' timeout={1000}>
                                <ContactItem contact={contact}/> 
                            </CSSTransition> 
                        ) ) }
                    </TransitionGroup>                   
            </Fragment>
        );
    }      
    
}

export default Contact;