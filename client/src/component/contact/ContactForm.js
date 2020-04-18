import React, {useState, useContext, useEffect} from 'react';
import ContactContext from '../../context/contact/contactContext';

export const ContactForm = () => {
    const contactContext = useContext(ContactContext);
    const [contact, setContact] = useState({ 
            name  : '',
            email : '', 
            phone : '',
            type  : 'personal'
         });
         
    const { addContact , current, clearCurrent, updateContact } = contactContext;

    // Like the wathing in Angular, it will automatically update based on the change in the injections
    useEffect( () => {
        if(current !== null){
            setContact(current);
        } else {
            setContact({ 
                name  : '',
                email : '', 
                phone : '',
                type  : 'personal'
             });
        }
    }, [contactContext, current] )     ;
         
    const { name, email, phone, type}  = contact;
    const onChange= (e) => {
        setContact({...contact, [e.target.name]: e.target.value});        
    }
    const onSubmit = e => {
        e.preventDefault();

        if(current === null ){
            addContact(contact);           
        } else {
            updateContact(contact);
        }
        onClear();
        
    }
    const onClear = ()=> {
        clearCurrent();
    }
    return (
        <form className='form text-primary' onSubmit={onSubmit}>
            <h3> {!current? 'Add Contact' : 'Update Contact'} </h3>
            <input type='text'  placeholder='Name'  name='name'  value={name}  onChange={onChange}></input>
            <input type='email' placeholder='Email' name='email' value={email} onChange={onChange}></input>
            <input type='text'  placeholder='Phone' name='phone' value={phone} onChange={onChange}></input>
            <div>
                <h5>Phone Type</h5>
                <input 
                    type='radio' 
                    name='type'
                    value='professional' 
                    checked={type === 'professional'}
                    onChange={onChange}/> Professional {'  '}
                <input 
                    type='radio' 
                    name='type' 
                    value='personal' 
                    checked={type === 'personal'}
                    onChange={onChange}/> Personal
             </div>            
             <div>
                <input type='submit' className='btn btn-primary btn-block pull-right' onClick={onChange} value= {!current? 'Add Contact' : 'Update Contact'} />
           </div>
           {current? <button className='btn btn-grey btn-block' onClick={onClear} >Clear</button>: <span></span>}        
        </form>
    )
}

export default ContactForm;
