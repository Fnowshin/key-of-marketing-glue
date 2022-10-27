import React from 'react';
import { Container, Image } from 'react-bootstrap';
import Header from '../Shared/Header';
import { BsFillEmojiSunglassesFill } from "react-icons/bs";
import { FaUser } from 'react-icons/fa';
import Footer from '../Shared/Footer';
import { useContext } from 'react';
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';
import './CheckOut.css'


const CheckOut = (props) => {

    const { user } = useContext(AuthContext)

    return (
        <div>
            
            <Container>
            <Header></Header>
                <h3 className='text-center mt-5'> Congratulations! You Are Now One Of Our Member <BsFillEmojiSunglassesFill></BsFillEmojiSunglassesFill>  </h3>
                <div className='checkout'>
                {user ?.photoURL?
              <Image
              style={{height: '50px'}} roundedCircle src={user.photoURL}
              ></Image>
            : <FaUser></FaUser>}
            {
                user?.uid?
                <h4>{user?.displayName}</h4>
                :
                <FaUser></FaUser>
            }
              
                </div>
            </Container>
            
        </div>
    );
};

export default CheckOut;