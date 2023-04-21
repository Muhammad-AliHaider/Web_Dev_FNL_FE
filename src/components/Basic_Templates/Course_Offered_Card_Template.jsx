import React from "react";
import {  Col} from "reactstrap";
import {Button} from "@mui/material"
import "./styleSheet.css"
//import {Link} from "react-router-dom" ;




export const CourseOfferedCardTemplate = (props) => {
    const id = props._id;

    function handleButtonClick(){
        // console.log(id);
        window.sessionStorage.setItem("CourseID", id);
        window.location.href = "/student/course";
    
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
