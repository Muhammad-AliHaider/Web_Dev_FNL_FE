import React, { useState } from 'react';
import { Button } from '@material-ui/core';
import { MDBBtn, MDBContainer, MDBCard, MDBCardBody, MDBCardImage, MDBRow, MDBCol, MDBIcon, MDBInput } from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';
import jwtDecode from "jwt-decode";
import { useHistory } from 'react-router-dom';

function S() {
  const [UserName, setUserName] = useState('');
  const [Password, setPassword] = useState('');
  const [error, setError] = useState('');
  const history = useHistory();

  const handleLogin = async () => {
    if (!UserName) {
      setError('Please enter your Username');
      return;
    }

    if (!Password) {
      setError('Please enter your Password');
      return;
    }

    try {
      const response = await fetch('http://127.0.0.1:3000/auth/signin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ UserName, Password })
      });

      const data = await response.json();
      if (response.ok) {
        localStorage.setItem('authToken', data.data.token);
        localStorage.setItem('refToken', data.data.rtoken);
        const decodedToken = jwtDecode(data.data.token);
        const role = decodedToken.role;
        if(role==1){
        history.push('/admin/dashboard');
        }
        else if(role==2){
          console.log(role)
          history.push('/teacher/dashboard');
        }
        else{
          history.push('/student/dashboard');
        }
      } else {
        setError('Invalid username or password');
      }
    } catch (error) {
      console.error(error);
      setError('An error occurred while logging in');
    }
  };

  return (
    <MDBContainer className="my-5">
      <MDBCard>
        <MDBRow className="g-0">
          <MDBCol md="6">
            <MDBCardImage src="https://i.ibb.co/n7sjvJ9/programming-languages-shutterstock-1680857539.png" className="rounded-start w-100" />
          </MDBCol>
          <MDBCol md="6">
            <MDBCardBody className='d-flex flex-column'>
              <div className='d-flex flex-row mt-2'>
                <MDBIcon fas icon="cubes fa-3x me-3" style={{ color: '#ff6219' }} />
                <span style={{ color: '#FFA500' }} className="h1 fw-bold mb-0">FNL</span>
              </div>
              <h5 className="fw-normal my-4 pb-3" style={{ letterSpacing: '1px' }}>Sign into your account</h5>
              <MDBInput wrapperClass='mb-4' label='UserName' id='formControlLg' type='email' size="lg" onChange={(e) => setUserName(e.target.value)} />
              <MDBInput wrapperClass='mb-4' label='Password' id='formControlLg' type='password' size="lg" onChange={(e) => setPassword(e.target.value)} />
              <Button type='submit' color='dark' variant="contained" style={{ margin: '8px 0' }} fullWidth onClick={handleLogin}>Log In </Button>
              {error && <p style={{ color: 'red' }}>{error}</p>}
              <a wrapperClass='mb-4' href="#!">Forgot password?</a>
              <p wrapperClass='mb-4'>Don't have an account? <Link to="/signup">Register here</Link></p>
              <div className='d-flex flex-row justify-content-start'>
                <a href="#!" wrapperClass='mb-4'>Terms of use.</a>
                <a href="#!" wrapperClass='mb-4'>Privacy policy</a>
              </div>
            </MDBCardBody>
          </MDBCol>
        </MDBRow>
      </MDBCard>
    </MDBContainer>
  );
}


export default S;