import React from 'react';
import '../ImageIcon/ImageIcon.css';

export default function Image({props}) {
  return (
  <div className='d-inline-flex position-relative'>
    <img
      className='rounded-4 shadow-4 imgary'
      src={props}
      alt='Avatar'
      style={{ width: '150px', height: '150px' }}
    />
  </div>
  );
}