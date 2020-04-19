import React from 'react'
import Contact from '../contact/Contact';
import ContactForm from '../contact/ContactForm';
import SearchContact from '../contact/SearchContact';

export const Home = () => {
    return (
        <div className='grid-2'>            
            <div><ContactForm/></div>
            <div>
                <SearchContact/>
                <Contact/>
            </div>
        </div>
    );
}

export default Home;