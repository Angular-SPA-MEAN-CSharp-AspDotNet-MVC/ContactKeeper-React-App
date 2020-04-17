import React from 'react'

export const ContactItem = ({contact}) => {
    const {id, name, email, phone, type} = contact;
    return (
        <div className='card card-light'>
            <h3 className='text-primary text-left'>
                {name}{'  '}<span className={'badge '
                    + ( type === 'professional' ? 'badge-primary':'badge-success' )}
                >{type.charAt(0).toUpperCase()+type.slice(1)}</span> 
            </h3>
            <ul>
                <li>
                     <i className='fas fa-envelope'/>{email}
                </li>
                <li>
                    <i className='fas fa-phone'>{phone}</i>
                </li>               
            </ul>
            <p>
                <button className='btn btn-dark btn-sm'>Save</button>
                <button className='btn btn-danger btn-sm'>Delete</button>
            </p>
        </div>
    )
}

export default ContactItem;
