import React from "react";
import {VideoCard} from '../components/Basic_Templates/Course_Session_Components.jsx';
import { useState } from "react";
import { useEffect} from "react";

import {MDBCardText} from 'mdb-react-ui-kit';


// reactstrap components
import {Card,CardHeader,CardBody, CardTitle, CardText,Row , Col} from "reactstrap";
import { CourseDescription,TeacherDetails } from "components/Basic_Templates/Course_description_components";
import { getCourseData } from "../APIs/userAPIs.jsx";
import { Button } from "@mui/material";
import "./styleSheet.css"

import { Tabs } from 'antd';


export function Courses () {

  const [CourseData, setCourseData] = useState();

  useEffect(() =>{

    let data = [];
    async function getData(){
      data = await getCourseData();
      console.log(data);

      if(data)
      setCourseData(data);
      else
      setCourseData();
    }

    getData();

  },[]);

  function Add_Vid(){
    window.location.href = "/student/video_upload";
  }


  let Vid_arr = [];
  let Mat_arr = [];

  if(CourseData){
    for(let i = 0 ; i < CourseData.VideoID.length ; i++){
      Vid_arr.push(<VideoCard title = {CourseData.VideoID[i].Name} image = {CourseData.VideoID[i].Thumbnail}  url = {CourseData.VideoID[i].URL} _id = {CourseData.VideoID[i]._id} Quiz_ID = {CourseData.VideoID[i].QuizID}/>)
    }
    for(let i = 0 ; i < CourseData.MaterialID.length ; i++){
      Mat_arr.push(<VideoCard title = {CourseData.MaterialID[i].Name} image = {CourseData.MaterialID[i].Thumbnail}  />)
    }
  }

  const onChange = (key) => {
    console.log(key);
  };
  const items = [
    {
      key: '1',
      label: <CardText>Description</CardText>,
      children: (<>
                  {(()=>{
                    if(CourseData){
                      return (<>
                      <CourseDescription title={"Description"} desc = {CourseData.Description}/>
                      <TeacherDetails title={"Teacher Details"} name = {"Teacher Name"} email = {"Teacher Email"} desc = {"iufnwiunfuiwnfiweifnweinfwiefnweiufnwiufn"} />
                      </>)
                    }
                    else{
                      return (<p>Loading!</p>)
                    }
                  })()}
                  {/* <TeacherDetails title={"Teacher Details"} name = {"Teacher Name"} email = {"Teacher Email"} desc = {"iufnwiunfuiwnfiweifnweinfwiefnweiufnwiufn"} /> */}
                  
                  </>),
    },
    {
      key: '2',
      label: <MDBCardText>Session </MDBCardText>,
      children: 
        <>
          <Col>
            <Row style={{justifyContent : "flex-end"}}>
                <Button variant="text" className="Button" onClick={Add_Vid}  style={{justifySelf : "flex-end"}}>ADD +</Button>
                <Button variant="text" className="Button" style={{justifySelf : "flex-end"}}>Delete -</Button>
            </Row>
          </Col>
          {Vid_arr}
          {/* <VideoCard title = {"ABC"} image = {logo}/> */}
        </>
    },
    {
      key: '3',
      label: <CardText>Course Material </CardText>,
      children: `Content of Tab Pane 3`,
    },
  ];
    return(
      <div className = "content">
        <Card>
          <CardHeader>
            {
            (()=>{
              if(CourseData){
                return <CardTitle tag  ="h3">{CourseData.Name}</CardTitle>}
                else{
                  return <p>Loading!</p>
                }
            })()
            }
            {/* <CardTitle tag  ="h3">ABC</CardTitle> */}
          </CardHeader>
          <CardBody>
            <Tabs centered defaultActiveKey="1" items={items} onChange={onChange} ></Tabs>
          </CardBody>
        </Card>
      </div>
    );
}

export default Courses;

