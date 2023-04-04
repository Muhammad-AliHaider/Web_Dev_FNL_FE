import React from "react";
import { Card, CardHeader, CardBody, Row , Col} from "reactstrap";
import { CourseOfferedCardTemplate } from "components/Basic_Templates/Course_Offered_Card_Template";
import {Button} from "@mui/material";
import "../components/Basic_Templates/styleSheet.css";
// import {Course} from "./Course.js";





function Courses_Offered() {

    return (
        <div className="content">
        <Card>
            <CardHeader>
                <Col >
                <h3 className="title">Courses Offered</h3>
                </Col>
                <Col>
                <Row style={{justifyContent : "flex-end"}}>
                <Button variant="text" className="Button"  style={{justifySelf : "flex-end"}}>ADD +</Button>
                <Button variant="text" className="Button" style={{justifySelf : "flex-end"}}>Delete -</Button>
                </Row>
                </Col>
            </CardHeader>
            <CardBody>
            <Row>
            <CourseOfferedCardTemplate  title = {"Course 1"} desc = {"lorem ipsum dolor sit amet"} />
            <CourseOfferedCardTemplate  title = {"Course 1"} desc = {"lorem ipsum dolor sit amet"}/>
            <CourseOfferedCardTemplate  title = {"Course 1"} desc = {"lorem ipsum dolor sit amet"}/>
            <CourseOfferedCardTemplate  title = {"Course 1"} desc = {"lorem ipsum dolor sit amet"}/>
            </Row>
            <Row>
            <CourseOfferedCardTemplate  title = {"Course 1"} desc = {"lorem ipsum dolor sit amet"}/>
            <CourseOfferedCardTemplate  title = {"Course 1"} desc = {"lorem ipsum dolor sit amet"}/>
            <CourseOfferedCardTemplate  title = {"Course 1"} desc = {"lorem ipsum dolor sit amet"}/>
            <CourseOfferedCardTemplate  title = {"Course 1"} desc = {"lorem ipsum dolor sit amet"}/>
            </Row>

            </CardBody>
        </Card>
        </div>
    );
    
}

export default Courses_Offered;
