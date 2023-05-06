import React from "react";
import {VideoCard} from '../components/Basic_Templates/Course_Session_Components.jsx';
import { useState } from "react";
import { useEffect} from "react";
import jwtDecode from "jwt-decode";

import {MDBCardText} from 'mdb-react-ui-kit';


// reactstrap components
import {Card,CardHeader,CardBody, CardTitle, CardText,Row , Col} from "reactstrap";
import { CourseDescription,TeacherDetails } from "components/Basic_Templates/Course_description_components";
import {Checkbox, List } from "antd";
import { getCourseData } from "../APIs/userAPIs.jsx";
import { remove_video_from_course, delete_Video } from "../APIs/TeacherAPI.jsx";
import { Button } from "@mui/material";
import "./styleSheet.css"

import { Tabs } from 'antd';


export function Courses () {

  const [CourseData, setCourseData] = useState();
  const [isDelete, setIsDelete] = useState(true);
  const [checked, setChecked] = useState([]);
  const [toShowChecked, setToShowChecked] = useState([]);
  // const [indeterminate, setIndeterminate] = useState(false);

  

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

  const HandleDeleteOnClick = () =>{
    setChecked([]);
    setToShowChecked([]);
    setIsDelete((prev)=>!prev);
  }

  const HandleCheckbox = (props1, props2) =>{
    if(checked.includes(props1)){
      setChecked(checked.filter((item)=>item!==props1))
      setToShowChecked(toShowChecked.filter((item)=>item!==props2))
    }
    else{
      setChecked([...checked,props1])
      setToShowChecked([...toShowChecked,props2])
    }
  }

  const HandleConfirmDelete = () =>{
    
    async function Delete(){
      
      await remove_video_from_course(checked)
      await delete_Video(checked);
    }

    Delete();
    setIsDelete((prev)=>!prev);

    
  }

  function Add_Vid(){
    window.location.href = "/teacher/video_upload";
  }


  let Vid_arr = [];
  let Mat_arr = [];
  

  if(CourseData){
    for(let i = 0 ; i < CourseData.VideoID.length ; i++){
      Vid_arr.push(<VideoCard title = {CourseData.VideoID[i].Name} image = {CourseData.VideoID[i].Thumbnail}  url = {CourseData.VideoID[i].URL} _id = {CourseData.VideoID[i]._id} Quiz_ID = {CourseData.VideoID[i].QuizID} bool = {isDelete}/>)
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
                  
                  </>),
    },
    {
      key: '2',
      label: <MDBCardText>Session </MDBCardText>,
      children: 
        <>
                  
                {(() =>{
                  let token = window.localStorage.getItem("authtoken");

                  const decodedToken = jwtDecode(token);
                  const role = decodedToken.role;
                  
                  if (role == "3"){

                    return (Vid_arr);
                  }
                  else{
                  
                    if(isDelete)
                    return(<>
                    <Col>
                      <Row style={{justifyContent : "flex-end"}}>
                        <Button variant="text" className="Button" onClick={Add_Vid}  style={{justifySelf : "flex-end"}}>ADD +</Button>
                        <Button variant="text" className="Button" onClick={HandleDeleteOnClick} style={{justifySelf : "flex-end"}}>Delete -</Button>
                      </Row>
                    </Col>
                     {Vid_arr}
                    </>);
                    else
                    return(<>
                      <Col>
                      <Row style={{justifyContent : "flex-end"}}>
                        <Button variant="text" className="Button" onClick={HandleDeleteOnClick}  style={{justifySelf : "flex-end"}}>cancel</Button>
                        <Button variant="text" className="Button" onClick={HandleConfirmDelete} style={{justifySelf : "flex-end"}}>confirm</Button>
                      </Row>
                    </Col>

                    <div style={{ marginTop: 20 }}>
                      <p>Selected: {toShowChecked.join(', ')} </p> 
                    </div>

                    <List

                      dataSource={Vid_arr}
                      renderItem={item => (
                        <List.Item>
                          <List.Item.Meta
                          //  onChange={HandleCheckbox(item.props)}
                          avatar = {<Checkbox onChange={() => {HandleCheckbox(item.props._id,item.props.title)}}/>}
                          />
                          {item}
                        </List.Item>
                      )}
                    />
                    
                    </>);
                    
                  
                  }
                  }
                  )()}
            
                {/* {isDelete?
                  Vid_arr:
                  <>
                  <div style={{ marginTop: 20 }}>
                    <p>Selected: {toShowChecked.join(', ')} </p> 
                  </div>

                  <List

                    dataSource={Vid_arr}
                    renderItem={item => (
                      <List.Item>
                         <List.Item.Meta
                        //  onChange={HandleCheckbox(item.props)}
                        avatar = {<Checkbox onChange={() => {HandleCheckbox(item.props._id,item.props.title)}}/>}
                        />
                        {item}
                      </List.Item>
                    )}
                  />
                  
                  </>
                } */}
      
            
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
          </CardHeader>
          <CardBody>
            <Tabs centered defaultActiveKey="1" items={items} onChange={onChange} ></Tabs>
          </CardBody>
        </Card>
      </div>
    );
}

export default Courses;

