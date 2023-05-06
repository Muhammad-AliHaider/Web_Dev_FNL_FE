import React from "react";
import { useState,useEffect } from "react";
import { Card, CardHeader, CardBody, Row , Col} from "reactstrap";
import { CourseOfferedCardTemplate } from "components/Basic_Templates/Course_Offered_Card_Template";
import {Button} from "@mui/material";
import "../components/Basic_Templates/styleSheet.css";
import { getAllCourses } from "../APIs/userAPIs.jsx";



// import {Course} from "./Course.js";





function Courses_Offered() {


    const [Courses, setCourses] = useState();

    useEffect(  () => {
        async function getCourses(){
            const data = await getAllCourses();
            // console.log("useEffect -> getAllCourses-> data");
            // console.log(data);
        
        if(data)
        setCourses(data);
        else
        setCourses();
        } 
        getCourses();
        
    },[]);
    
    // console.log(Courses)

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

                {
                    (()=>{
                        const array_to_render = [];

                        function make_element(name,desc,_id){
                            return <CourseOfferedCardTemplate  title = {name} desc = {desc} _id = {_id} />
                        }

                        function make_row_element(i,x){
                            return (<Row>
                            {
                                (()=>{
                                    let array = [];
                                    for(let j = 0 ; j < 4;j++){
                                        if(x[i][j])
                                        array.push(make_element(x[i][j].Name,x[i][j].Description,x[i][j]._id));
                                    }
                                    console.log(array)
                                    return array;
                                })()
                            }
                            </Row>);
                        }
                         
                        if(Courses){
                            console.log(Courses );
                        let x = [[]];
                        for(let i = 0 ; i <= parseInt(Courses.length / 4);i++){
                            for(let j = 0 ; j < 4;j++){
                                x[i][j] = Courses[i*4 + j];
                            }
                        }
                        for (let i = 0 ; i <= parseInt(Courses.length / 4) ;i++){
                            array_to_render.push(make_row_element(i,x));
                        }
                        return array_to_render;
                        }
                        else{
                            return <p>LOADING!</p>
                        }
                        
                    })()
                }
                {/* <CourseOfferedCardTemplate  title = {"Course 1"} desc = {"lorem ipsum dolor sit amet"} /> */}
            {/* <Row>
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
            </Row> */}

            </CardBody>
        </Card>
        </div>
    );
    
}

export default Courses_Offered;
