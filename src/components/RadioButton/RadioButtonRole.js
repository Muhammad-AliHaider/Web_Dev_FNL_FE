import React from 'react';
import { MDBRadio } from 'mdb-react-ui-kit';

export default function RadioR() {
  return (
    <div style={{marginBottom:'40px' }} >
      <p wrapperClass='mb-4' id='formControlLg' size="lg"> Role </p>
      <MDBRadio name='inlineRadio' id='inlineRadio1' value='option1' label='Student' inline />
      <MDBRadio name='inlineRadio' id='inlineRadio2' value='option2' label='Teacher' inline />
    </div>
  );
}