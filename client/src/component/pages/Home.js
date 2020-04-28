import React, {useContext, useEffect} from 'react'
import Contact from '../contact/Contact';
import ContactForm from '../contact/ContactForm';
import SearchContact from '../contact/SearchContact';
import AuthContext from '../../context/auth/authContext';

export const Home = () => {
    const authContext = useContext(AuthContext);

    useEffect(() => {
        authContext.loadUser();
        // eslint-disable-next-line
    }, []);
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