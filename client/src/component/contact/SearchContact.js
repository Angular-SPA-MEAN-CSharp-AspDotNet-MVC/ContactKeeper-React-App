import React, {useContext, useRef, Fragment} from 'react';
import contactContext from '../../context/contact/contactContext';

export const SearchContact = () => {
    const ContactContext = useContext(contactContext);
    const {filterContact, clearFilter, filtered, contacts} = ContactContext;
    const text = useRef('');
    const onChange= e => {
        if(text.current.value !==''){
            filterContact(e.target.value);
        } else {
            clearFilter();
        }        
    }

    if( contacts!==null && contacts!==undefined && contacts.length === 0 ){
        return (<Fragment><h4>There is no contacts</h4></Fragment>);
    }

    if(filtered!== null && filtered.length === 0) {
        return (
            <Fragment>
                <form>
                <input ref={text} type='text' 
                    placeholder='Search text for contacts'
                    onChange={onChange}
                />
            </form>
                <h4>There is no any matched contact(s).</h4>
            </Fragment>  
        );
    } else {
        return (
            <form>
                <input ref={text} type='text' 
                    placeholder='Search text for contacts'
                    onChange={onChange}
                />
            </form>
        )
    }
}

export default SearchContact;
