 import React from 'react';
 import { useHistory } from 'react-router-dom';
import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBRow,
  MDBCol,
  MDBIcon,
  MDBInput
}
from 'mdb-react-ui-kit';

import { useState } from 'react';
import { Link } from "react-router-dom";
import {Button} from '@material-ui/core';
import Radio from "../../components/RadioButton/RadioButtonGender";
import RadioR from "../../components/RadioButton/RadioButtonRole";
import '../SignUp/SignUp.css';
import ImageUpload from '../../components/ImageUpload/ImageUpload'


function S() {

  const history = useHistory();
  const [UserName, setUserName] = useState("");
  const [Name, setName] = useState("");
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [Gender, setGender] = useState("");
  const [Age, setAge] = useState("");
  const [BIO, setBio] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [expirationDate, setExpirationDate] = useState("");
  const [securityCode, setSecurityCode] = useState("");
  const [Role, setRole] = useState("");
  const [ProfilePic, setProfilePic] = useState("");
  const [error, setError] = useState("");

  const handleFormSubmit = (event) => {
    event.preventDefault();

    if (!UserName || !Name || !Email || !Password || !Gender || !Age || !cardNumber || !expirationDate || !securityCode || !Role ) {
      setError("Please fill in all required fields.");
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(Email)) {
      setError("Invalid email address format.");
      return;
    }

    if (!/^[0-9]{3,4}$/.test(securityCode)) {
      setError("Invalid security code format.");
      return;
    }

    if (!/^(0[1-9]|1[0-2])\/[0-9]{2}$/.test(expirationDate)) {
      setError("Invalid expiration date format.");
      return;
    }



    // call API with the input valuesY
    fetch('http://127.0.0.1:3000/auth/signup', {
      method: 'POST',
      body: JSON.stringify({
        UserName,
        Name,
        Email,
        Password,
        Gender,
        Age,
        BIO,
        cardNumber,
        expirationDate,
        securityCode,
        Role,
        ProfilePic
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => console.error(error));
    history.push('/signin');
  };

  
  const handleGenderChange = (value) => {
    setGender(value);
  }; 

  const handleRoleChange = (value) => {
    if (value=='teacher'){
      setRole(2);
    }
    else{
      setRole(3);
    }  
  }; 

  const handleProfilePicChange = (url) => {
    setProfilePic(url);
  };

  return (
    <MDBContainer  className="my-5 "  >

      <MDBCard >
        <MDBRow className='g-0'>

          <MDBCol md='6'>
            <MDBCardImage src="https://i.ibb.co/n7sjvJ9/programming-languages-shutterstock-1680857539.png" className='rounded-start w-100'/>
          </MDBCol>

          <MDBCol md='6' >
            <MDBCardBody className='flex flex-cod-lumn'>

              <div className='d-flex flex-row mt-2'>
                <MDBIcon fas icon="cubes fa-3x me-3" style={{ color: '#ff6219' }}/>
                <span style={{ color: '#FFA500' }} className="h1 fw-bold mb-0">FNL</span>
              </div>

              <h5 className="fw-normal my-4 pb-3" style={{letterSpacing: '1px'}}>Create A New Account</h5>
              <div id="" style={{overflowY: 'scroll', height: '660px'}}>


                <ImageUpload onProfilePicChange={handleProfilePicChange} />
                <MDBInput wrapperClass='mb-4' label='Username*' id='formControlLg' type='text' size="lg" value={UserName} onChange={(e) => setUserName(e.target.value)}/>
                <MDBInput wrapperClass='mb-4' label='Name*' id='formControlLg' type='text' size="lg" value={Name} onChange={(e) => setName(e.target.value)}/>
                <MDBInput wrapperClass='mb-4' label='Email address*' id='formControlLg' type='email' size="lg" value={Email} onChange={(e) => setEmail(e.target.value)}/>
                <MDBInput wrapperClass='mb-4' label='Password*' id='formControlLg' type='password' size="lg" value={Password} onChange={(e) => setPassword(e.target.value)}/>
                <Radio onChange={handleGenderChange} />
                <MDBInput wrapperClass='mb-4' label='Age*' id='formControlLg' type='text' size="lg" value={Age} onChange={(e) => setAge(e.target.value)}/>
                <MDBInput wrapperClass='mb-4' label='Bio' id='formControlLg' type='text' size="lg"value={BIO} onChange={(e) => setBio(e.target.value)}/>
                <MDBInput wrapperClass='mb-4' label='Card Number*' id='formControlLg' type='text' size="lg" value={cardNumber} onChange={(e) => setCardNumber(e.target.value)}/>
                <MDBInput wrapperClass='mb-4' label='Expiration Date*' id='formControlLg' type='text' size="lg" value={expirationDate} onChange={(e) => setExpirationDate(e.target.value)}/>
                <MDBInput wrapperClass='mb-4' label='Security Code*' id='formControlLg' type='text' size="lg" value={securityCode} onChange={(e) => setSecurityCode(e.target.value)}/>
                <RadioR  onChange={handleRoleChange}></RadioR>

                {error && <p style={{ color: 'red' }}>{error}</p>}
                <Link to="/signin"><Button type='submit' color='dark' variant="contained" style={{margin:'8px 0'}} fullWidth onClick={handleFormSubmit}>SignUp</Button></Link>
                
             </div>
            </MDBCardBody>
          </MDBCol>

        </MDBRow>
      </MDBCard>

    </MDBContainer>
  );
}

export default S;