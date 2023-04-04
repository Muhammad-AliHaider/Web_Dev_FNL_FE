import React from "react";
import {  Col} from "reactstrap";
import {Button} from "@mui/material"
import "./styleSheet.css"
import {Link} from "react-router-dom" ;




export const CourseOfferedCardTemplate = (props) => {
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
                <Button variant="text" className="Button" LinkComponent={Link} to ={'/student/Course'} >Show Details</Button>
            </div>
            </div>
        </Col>  
    </>
    );
}
