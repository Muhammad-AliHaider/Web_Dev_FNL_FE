// import {Video} from 'react-video-renderer';

import {MDBCard,MDBRow,MDBCol,MDBCardImage,MDBCardTitle} from 'mdb-react-ui-kit';
import {Button} from '@mui/material';
import logo from '../../assets/logo.png';



export function VideoCard(props){
  return(
  <MDBCard  style = {{border: '1px solid '}} >
    <MDBRow className='g-0 d-flex align-items-center' >
      <MDBCol md='2'>
        <MDBCardImage src={props.image} alt='image' className='rounded-t-5 rounded-tr-lg-0' fluid />
        </MDBCol>
        <MDBCol md='8'>
            <MDBCardTitle tag="h5">{props.title}</MDBCardTitle>
        </MDBCol>
      <MDBCol>
        <Button variant="text" style = {{color : "#c44b99", justifyContent : "flex-end" }}>Play</Button>
      </MDBCol>
    </MDBRow>
  </MDBCard>);
}


// export function Video_renderer(){
// return(<Video src="https://mysite.com/video.mp4">
// {(video, state, actions) => (
//   <div>
//     {video}
//     <div>{state.currentTime} / {state.duration} / {state.buffered}</div>
//     <progress value={state.currentTime} max={state.duration} onChange={actions.navigate} />
//     <progress value={state.volume} max={1} onChange={actions.setVolume} />
//     <button onClick={actions.play}>Play</button>
//     <button onClick={actions.pause}>Pause</button>
//     <button onClick={actions.requestFullScreen}>Fullscreen</button>
//   </div>
// )}
// </Video>)
// }