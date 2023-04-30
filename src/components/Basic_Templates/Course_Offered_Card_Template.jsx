import React from "react";
import {  Col} from "reactstrap";
import {Button} from "@mui/material";
import "./styleSheet.css";
import jwtDecode from 'jwt-decode';
//import {Link} from "react-router-dom" ;




export const CourseOfferedCardTemplate = (props) => {
    const id = props._id;

    function handleButtonClick(){
        // console.log(id);
        window.sessionStorage.setItem("CourseID", id);
        let token = window.localStorage.getItem("authtoken");

        const decodedToken = jwtDecode(token);
        const role = decodedToken.role;
        if(role == "2"){
        window.location.href = "/teacher/course";}
        else if(role == "1"){
            window.location.href = "/admin/course";
            }
        else{
            window.location.href = "/student/course";
            }
    
    }
    return (
    <>
        <Col lg="3" md="6" sm="4" className="content">
            <div className="font-icon-list" >
            <div className="font-icon-detail">
                <i className="tim-icons icon-coins" />
                <div className = "Title">
                {props.title}
                </div>
                <div className="Description">
                {props.desc}
                </div>
                <Button variant="text" onClick={handleButtonClick} className="Button"  >Show Details</Button>
                
            </div>
            </div>
        </Col>  
    </>
    );
}
