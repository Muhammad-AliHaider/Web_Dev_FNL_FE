 import React from 'react';
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
import { Link } from "react-router-dom";
import {Button} from '@material-ui/core';
import Radio from "../../components/RadioButton/RadioButtonGender";
import RadioR from "../../components/RadioButton/RadioButtonRole";
import '../SignUp/SignUp.css';
import ImageUpload from '../../components/ImageUpload/ImageUpload'

function S() {
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

                <ImageUpload></ImageUpload>
                <MDBInput wrapperClass='mb-4' label='Username' id='formControlLg' type='text' size="lg"/>
                <MDBInput wrapperClass='mb-4' label='Name' id='formControlLg' type='text' size="lg"/>
                <MDBInput wrapperClass='mb-4' label='Email address' id='formControlLg' type='email' size="lg"/>
                <MDBInput wrapperClass='mb-4' label='Password' id='formControlLg' type='password' size="lg"/>
                <Radio></Radio>
                <MDBInput wrapperClass='mb-4' label='Age' id='formControlLg' type='text' size="lg"/>
                <MDBInput wrapperClass='mb-4' label='Bio' id='formControlLg' type='text' size="lg"/>
                <MDBInput wrapperClass='mb-4' label='Card Number' id='formControlLg' type='text' size="lg"/>
                <MDBInput wrapperClass='mb-4' label='Expiration Date' id='formControlLg' type='text' size="lg"/>
                <MDBInput wrapperClass='mb-4' label='Security Code' id='formControlLg' type='text' size="lg"/>
                <RadioR></RadioR>

                <Link to="/signin"><Button type='submit' color='dark' variant="contained" style={{margin:'8px 0'}} fullWidth>SignUp</Button> </Link>
             </div>
            </MDBCardBody>
          </MDBCol>

        </MDBRow>
      </MDBCard>

    </MDBContainer>
  );
}

export default S;