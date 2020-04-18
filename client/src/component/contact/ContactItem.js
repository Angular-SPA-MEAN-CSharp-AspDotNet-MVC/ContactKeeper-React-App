import React, { useContext } from 'react';
import ContactContext from '../../context/contact/contactContext';

export const ContactItem = ({contact}) => {
    const {id, name, email, phone, type} = contact;
    const contactContext = useContext(ContactContext);
    const { deleteContact } = contactContext;

    const onDelete = () => {
        deleteContact(id);
    }
    return (
        <div className='card card-light'>
            <h3 className='text-primary text-left'>
                {name}{'  '}<span className={'badge '
                    + ( type === 'professional' ? 'badge-primary':'badge-success' )}
                >{type.charAt(0).toUpperCase()+type.slice(1)}</span> 
            </h3>
            <ul>
                <li>
                     <i className='fa fa-envelope'/>{email}
                </li>
                <li>
                    <i className='fa fa-phone'>{phone}</i>
                </li>               
            </ul>
            <p>
                <button className='btn btn-dark btn-sm'>Save</button>
                <button className='btn btn-danger btn-sm' onClick={onDelete}>Delete</button>
            </p>
        </div>
    )
}

export default ContactItem;
