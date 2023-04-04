import React from "react";


// reactstrap components
import {Card,CardHeader,CardBody, CardTitle, CardText} from "reactstrap";
import { CourseDescription,TeacherDetails } from "components/Basic_Templates/Course_description_components";
// import { Button } from "@mui/material";
import "./styleSheet.css"

import { Tabs } from 'antd';
const onChange = (key) => {
  console.log(key);
};
const items = [
  {
    key: '1',
    label: <CardText>Description</CardText>,
    children: (<>
                <CourseDescription title={"Description"} desc = {"lorem  fiubiebfiuwebfuiowebfuiwebfiuwebfiwebfi "}/>
                <TeacherDetails title={"Teacher Details"} name = {"Teacher Name"} email = {"Teacher Email"} desc = {"iufnwiunfuiwnfiweifnweinfwiefnweiufnwiufn"} />
                
              
              </>),
  },
  {
    key: '2',
    label: <CardText>Session </CardText>,
    children: `Content of Tab Pane 2`,
  },
  {
    key: '3',
    label: <CardText>Course Material </CardText>,
    children: `Content of Tab Pane 3`,
  },
];

export function Courses () {
    return(
      <div className = "content">
        <Card>
          <CardHeader>
            <CardTitle tag  ="h3">Course_Name</CardTitle>
          </CardHeader>
          <CardBody>
            <Tabs centered defaultActiveKey="1" items={items} onChange={onChange} ></Tabs>
          </CardBody>
        </Card>
      </div>
    );
}

export default Courses;

