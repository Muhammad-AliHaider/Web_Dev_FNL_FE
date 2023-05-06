import React from "react";
import {Video_uploader} from '../components/Basic_Templates/Video_uploader.jsx';
import {ImageUpload} from '../components/ImageUpload/ImageUpload.js';
import {
    MDBCard,
    MDBCardBody,
    MDBRow,
  }
  from 'mdb-react-ui-kit';

import "./styleSheet.css"

import { useState } from "react";
import { Button } from "@mui/material";
import { Input } from "reactstrap";
// import "./styleSheet.css"

function Videos(){
    // const [VideoData, setVideoData] = useState();
    const defaultPicUrl = window.sessionStorage.getItem("ThumbnailURL");
    const DefaultName = JSON.parse(window.sessionStorage.getItem("Video"))["title"];
    // const [VideoThumbnail, setVideoThumbnail] = useState();

    const [Name, SetName] = useState(DefaultName);


    async function handleSubmit(){

        
    }

    const [isOpen, setIsOpen] = useState(false);
 
    const togglePopup = () => {
        setIsOpen(!isOpen);
    }

    const Popup = props => {
        return (
            <div className = "content">
            <div className="popup-box">
                <div className="box">
                <span className="close-icon" onClick={props.handleClose}>x</span>
                {props.content}
                </div>
            </div>
          </div>
        );
      };

    return(
        <div className = "content">
            <MDBCard>
                <MDBCardBody>
                <Video_uploader default_url/>
                <ImageUpload defaultPicUrl={defaultPicUrl}/>

                <Input
                    value={Name}
                    onChange={(e)=> SetName(e.target.value)}
                    label="Name*"
                    id="Name"
                    placeholder={Name}
                    type="text"
                />
                <br/>
                <MDBRow style={{justifyContent : "center"}}>
                <Button onClick = {handleSubmit}  style={{justifySelf : "center"  ,color : "#A31ACD"}}>Update</Button>
                </MDBRow>

                
                {/* <MDBCardImage src={downloadURL} alt='image' className='rounded-t-5 rounded-tr-lg-0' fluid /> */}
                </MDBCardBody>
                <input
                    type="button"
                    value="Click to Open Popup"
                    onClick={togglePopup}
                />
                {isOpen ? <Popup
                    content={<>
                    <b>Design your Popup</b>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    <button>Test button</button>
                    </>}
                    handleClose={togglePopup}
                />:<></>}
            </MDBCard>
        </div>
    )

}

export default Videos;