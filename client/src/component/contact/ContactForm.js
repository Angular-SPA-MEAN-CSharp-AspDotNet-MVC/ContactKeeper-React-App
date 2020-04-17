import React, {useState, useContext} from 'react';
import contactContext from '../../context/contact/contactContext';

export const ContactForm = () => {
    const ContactContext = useContext(contactContext);
    const [contact, setContact] = useState({ 
            name  : '',
            email : '', 
            phone : '',
            type  : 'personal'
         });
         
    const { name, email, phone, type}  = contact;
    const onChange= (e) => {
        setContact({...contact, [e.target.name]: e.target.value});            
    }
    const onSubmit = e => {
        e.preventDefault();
        ContactContext.addContact(contact);
    }
    return (
        <form className='form text-primary' onSubmit={onSubmit}>
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
                <input type='submit' className='btn btn-primary btn-block pull-right' onClick={onChange} value='Add Contact'/>
           </div>        
        </form>
    )
}

export default ContactForm;
