import React from 'react';
import { ChangeEvent,useState } from 'react';
import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBIcon,
  MDBRow,
  MDBCol,
  MDBCheckbox,
  MDBRadio
}
from 'mdb-react-ui-kit';

import {Button, FormLabel,FormControl,FormControlLabel,RadioGroup,Radio} from '@mui/material';

import "./SignUp.css"

function App() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [userName , setuserName] = useState('');
  const [age , setAge] = useState('');
  const [role , setRole] = useState('');
  const [name , setName] = useState('');
  const [gender, setGender] = useState('');
  const [Bio, setBio] = useState('');
  
  function handleButtonClick(event) {
    event.preventDefault();

    setError('');

    if(!email || !password || !userName || !name || !age ){
      setError('Please fill in all required fields.');
      return;
    }

    if(!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)){
      setError('Invalid email address format.');
      return;
    }

    if(!/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*#?&]{8,}$/.test(password)){
      setError('Password must be at least 8 characters long and must contain at least one letter and one number.');
      return;
    }

    console.log("Gender : " , gender)

    
  }


  return (
    <MDBContainer fluid  className='my-5'>

      <MDBRow className='g-0 align-items-center'>
        <MDBCol col='6'>

          <MDBCard className='my-5 cascading-right' style={{background: 'hsla(0, 0%, 100%, 0.55)',  backdropFilter: 'blur(30px)'}}>
            <MDBCardBody className='p-5 text-center'>

              <h2 className="fw-bold mb-5">Sign up now</h2>

              <MDBRow>
                <MDBCol col='6'>
                  <MDBInput wrapperClass='mb-4' label='User name*' value={userName} onChange={(e)=> setuserName(e.target.value)} id='form1' type='text'/>
                </MDBCol>

                <MDBCol col='6'>
                  <MDBInput wrapperClass='mb-4' label='Name*' id='form2' value={name} onChange={(e)=> setName(e.target.value)} type='text'/>
                </MDBCol>
              </MDBRow>

              <MDBInput wrapperClass='mb-4' label='Email*' value={email} onChange={(e)=> setEmail(e.target.value)} id='form3' type='email'/>
              <MDBInput wrapperClass='mb-4' label='Password*' value={password} onChange={(e)=> setPassword(e.target.value)} id='form4' type='password'/>

              <MDBRow>
                <MDBCol col='6'>
                  <MDBInput wrapperClass='mb-4' label='Age*' value={age} onChange={(e)=> setAge(e.target.value)} id='form5' type='text'/>
                </MDBCol>

              <MDBCol col='6'>
                <FormControl>
                    
                    <RadioGroup
                      row
                      aria-labelledby="demo-row-radio-buttons-group-label"
                      name="row-radio-buttons-group"
                    >
                      <FormControlLabel value="female" control={<Radio value={"Female"} onChange={(e) => setGender(e.target.value)}  />} label="Female" />
                      <FormControlLabel value="male" control={<Radio value={"Male"} onChange={(e) => setGender(e.target.value)}/>} label="Male" />
                    </RadioGroup>
                    <FormLabel id="demo-row-radio-buttons-group-label">Gender</FormLabel>
                </FormControl>
              </MDBCol>
              </MDBRow>

              <div className='d-flex justify-content-center mb-4'>
                <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Subscribe to our newsletter' />
              </div>

              <p>{(()=>{
                if(error){
                  return <span className='text-danger'>{error}</span>
                }
              })()}</p>

              <Button variant='contained' className='w-100 mb-4' onClick={handleButtonClick}>Sign Up</Button>


            </MDBCardBody>
          </MDBCard>
        </MDBCol>

        <MDBCol col='6'>
          <img src="https://mdbootstrap.com/img/new/ecommerce/vertical/004.jpg" class="w-100 rounded-4 shadow-4"
            alt="" fluid/>
        </MDBCol>

      </MDBRow>

    </MDBContainer>
  );
}

export default App;