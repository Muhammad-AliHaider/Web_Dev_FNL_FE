// import {Video} from 'react-video-renderer';

import {MDBCard,MDBRow,MDBCol,MDBCardImage,MDBCardTitle} from 'mdb-react-ui-kit';
import {Button} from '@mui/material';
import { IoPlayCircle, IoPencil } from "react-icons/io5";
import React from "react";
import jwtDecode from 'jwt-decode';

import "./styleSheet.css"
// jwtDecode


export function VideoCard(props){

  function handlePlay(){
    console.log("play");
    window.sessionStorage.setItem('VideoID', props._id);
    window.sessionStorage.setItem('VideoURL', props.url);
    window.sessionStorage.setItem('QuizID', props.Quiz_ID);
    let token = window.localStorage.getItem("authtoken");

    const decodedToken = jwtDecode(token);
    const role = decodedToken.role;


    if(role == "2"){
    window.location.href = '/teacher/video'
    }
    else if(role == "1"){
      window.location.href = '/admin/video'
      }
    else{
      window.location.href = '/student/video'
      }
  }

  function handleEdit(){

    window.sessionStorage.setItem('Video', JSON.stringify(props));
    let token = window.localStorage.getItem("authtoken");

    const decodedToken = jwtDecode(token);
    const role = decodedToken.role;
    if(role == "2"){
    window.location.href = '/teacher/video_editor'
    }
    else if(role == "1"){
      // window.location.href = '/admin/edit_video'
      }
  }

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
        <MDBRow>
        <IoPlayCircle color= '#c44b99' size=  {37} onClick ={handlePlay}/>
        {/* <Button variant="text" style = {{color : "#c44b99", justifyContent : "flex-end" }} onClick ={handleChange}>Play</Button> */}
        </MDBRow>
      </MDBCol>
      <MDBCol>
        <IoPencil color='#c44b99'  size=  {25} onClick = {handleEdit}/>
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