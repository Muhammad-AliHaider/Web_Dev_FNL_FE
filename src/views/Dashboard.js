/*!

=========================================================
* Black Dashboard React v1.2.1
=========================================================

* Product Page: https://www.creative-tim.com/product/black-dashboard-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/black-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
// nodejs library that concatenates classes
// react plugin used to create charts
import { Line, Bar } from "react-chartjs-2";
import axios from "axios";
import { useEffect, useState } from "react";
import Enroll from "../assets/img/enroll.png";
import Left from "../assets/img/Lefter.png";
import Middle from "../assets/img/Middle.png";
import Right from "../assets/img/Right.png";

import { NavLink, Link, useLocation } from "react-router-dom";
// reactstrap components
import {
  Button,
  ButtonGroup,
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  Label,
  FormGroup,
  Table,
  Row,
  Col,
  UncontrolledTooltip
} from "reactstrap";

// core components
import {
  chartExample1,
  chartExample2,
  chartExample3,
  chartExample4
} from "variables/charts.js";

function Dashboard(props) {
  const [bigChartData, setbigChartData] = React.useState("data1");
  const [chartData1, setChartData1] = useState({
    labels: [],
    datasets: [
      {
        label: "Quiz Scores",
        data: [],
        backgroundColor: "rgba(75,192,192,0.4)",
        borderColor: "rgba(75,192,192,1)",
        borderWidth: 2
      }
    ],
    options: {
      responsive: true,
      maintainAspectRatio: false
    }
  });
  const [chartData2, setChartData2] = useState({
    labels: [],
    datasets: [
      {
        label: "Quiz Scores",
        data: [],
        backgroundColor: "rgba(75,192,192,0.4)",
        borderColor: "rgba(75,192,192,1)",
        borderWidth: 2
      }
    ],
    options: {
      responsive: true,
      maintainAspectRatio: false
    }
  });
  const [chartData3, setChartData3] = useState({
    labels: [],
    datasets: [
      {
        label: "Quiz Scores",
        data: [],
        backgroundColor: "rgba(75,192,192,0.4)",
        borderColor: "rgba(75,192,192,1)",
        borderWidth: 2
      }
    ],
    options: {
      responsive: true,
      maintainAspectRatio: false
    }
  });
  const [courseInfo, setCourseInfo] = useState([]);
  const [courseCInfo, setCourseCInfo] = useState([]);

  const [chart1, setChart1] = React.useState("chart1")
  const [chart2, setChart2] = React.useState("chart2")
  const [chart3, setChart3] = React.useState("chart3")
  const [chartData, setChartData] = useState({
    labels: [],
    datasets: [
      {
        label: "SCORE PERCENTAGE",
        data: [],
        backgroundColor: "rgba(75,192,192,0.4)",
        borderColor: "rgba(75,192,192,1)",
        borderWidth: 2
      }
    ],
    options: {
      responsive: true,
      maintainAspectRatio: false
    }
  });

  useEffect(() => {
    // Define Axios interceptors for request and response

    const token = localStorage.getItem('authToken');
    const rtoken = localStorage.getItem('refToken');

    const requestInterceptor = axios.interceptors.request.use(config => {
      config.headers["Authorization"] = `Bearer ${token}`;
      config.headers["Refresh-Token"] = rtoken;
      return config;
    });

    const responseInterceptor = axios.interceptors.response.use(
      async response => {
        // Intercept response for labels API
        if (response.config.url === "http://127.0.0.1:3000/student/profile/get") {
          // Parse and format the labels data
          console.log(response)
          const courseNames = response.data.std.CourseEnrolled.map(course => course.name);
          var courseScore=[]
          var chartData1Labels = [];
          var chartData1Scores = [];
          var chartData2Labels = [];
          var chartData2Scores = [];
          var chartData3Labels = [];
          var chartData3Scores = [];

          for (let i = 0; i < response.data.std.CourseEnrolled.length; i++) {
            try {
              const courseResponse =await axios.post("http://127.0.0.1:3000/student/course/get",{_id: response.data.std.CourseEnrolled[i].id});
              var prog = ((response.data.std.CourseEnrolled[i].progress.length)/(courseResponse.data.data[0].VideoID.length))*100
              const newCourse = {language: courseResponse.data.data[0].Language , topic: courseResponse.data.data[0].Topic, teacher: courseResponse.data.data[0].Teacher , progress: prog}
              if(prog<100){
                const newCCourse ={name:courseResponse.data.data[0].Name, description:courseResponse.data.data[0].Description}
                setCourseCInfo(prevState => [...prevState, newCCourse]);
              }
              console.log(newCourse)
              setCourseInfo(prevState => [...prevState, newCourse]);
              console.log(courseInfo)
              
            }catch (error) {
              // Handle any errors from the API calls
              console.error(error);
              // ... handle the error as needed ...
            }




            let quizscore = 0; // Initialize quiz score for each course
            for (let j = 0; j < response.data.std.CourseEnrolled[i].progress.length; j++) {
              let a = quizscore + response.data.std.CourseEnrolled[i].progress[j].score;
              quizscore = a;
            }
            let co = (quizscore / (response.data.std.CourseEnrolled[i].progress.length*10)) * 100;
            courseScore.push(co);
            if (i === 0) {
              setChart1(response.data.std.CourseEnrolled[i].name)
              for (let j = 0; j < response.data.std.CourseEnrolled[i].progress.length; j++) {
                chartData1Labels.push(response.data.std.CourseEnrolled[i].progress[j].name);
                chartData1Scores.push(response.data.std.CourseEnrolled[i].progress[j].score);
              }
            } else if (i === 1) {
              setChart2(response.data.std.CourseEnrolled[i].name)
              for (let j = 0; j < response.data.std.CourseEnrolled[i].progress.length; j++) {
                chartData2Labels.push(response.data.std.CourseEnrolled[i].progress[j].name);
                chartData2Scores.push(response.data.std.CourseEnrolled[i].progress[j].score);
              }
            } else if (i === 2) {
              setChart3(response.data.std.CourseEnrolled[i].name)
              for (let j = 0; j < response.data.std.CourseEnrolled[i].progress.length; j++) {
                chartData3Labels.push(response.data.std.CourseEnrolled[i].progress[j].name);
                chartData3Scores.push(response.data.std.CourseEnrolled[i].progress[j].score);
              }
            }
          }
          

          const newLabels = courseNames;
          console.log("New Labels:",newLabels)
          const newData = courseScore;
          console.log("New Data:",newData)

          // Update the labels in the chart data set
          setChartData(prevChartData => {
            return {
              ...prevChartData,
              labels: newLabels,
              datasets: [
                {
                  ...prevChartData.datasets[0],
                  data: newData
                }
              ]
            };
          });

          setChartData1(prevChartData1 => {
            return {
              ...prevChartData1,
              labels: chartData1Labels,
              datasets: [
                {
                  ...prevChartData1.datasets[0],
                  data: chartData1Scores
                }
              ]
            };
          });

          setChartData2(prevChartData2 => {
            return {
              ...prevChartData2,
              labels: chartData2Labels,
              datasets: [
                {
                  ...prevChartData2.datasets[0],
                  data: chartData2Scores
                }
              ]
            };
          });

          setChartData3(prevChartData3 => {
            return {
              ...prevChartData3,
              labels: chartData3Labels,
              datasets: [
                {
                  ...prevChartData3.datasets[0],
                  data: chartData3Scores
                }
              ]
            };
          });

        }


        return response;
      },
      error => {
        return Promise.reject(error);
      }
    );

    // Make API calls to retrieve labels and data
    axios
      .get("http://127.0.0.1:3000/student/profile/get")
      .then(() => {
        // Labels retrieved, nothing to do here
      })
      .catch(error => {
        console.error("Failed to retrieve labels from API:", error);
      });

    // Cleanup the interceptors when component unmounts
    return () => {
      axios.interceptors.request.eject(requestInterceptor);
      axios.interceptors.response.eject(responseInterceptor);
    };
  }, []);
  return (
    <>
      <div className="content">
        <Row>
          <Col xs="12">
           {chartData.labels.length>=3 ? (
            <Card className="card-chart">
            <CardHeader>
            <Row>
              <Col className="text-left" sm="6">
                <h5 className="card-category">Total Courses</h5>
                <CardTitle tag="h2">Performance</CardTitle>
              </Col>
              <Col sm="6">
                <ButtonGroup>
                </ButtonGroup>
              </Col>
            </Row>
            </CardHeader>
            <CardBody>
            <div className="chart-area">
              <Line data={chartData} options={chartExample1.options} />
            </div>
            </CardBody>
            </Card>
            ) : (
              <Col xs="12" style={{ paddingBottom: "20px" }}>
              <Link to="/student/enrollin">
              <img src={Enroll} alt="Image description" className="img-fluid w-100" />
  </Link>
</Col>
  )}
</Col>

        </Row>
        <Row>
          <Col lg="4">
            {chartData1.labels.length>=1 ? (
            <Card className="card-chart">
              <CardHeader>
                <h5 className="card-category">{chart1}</h5>
                <CardTitle tag="h3">
                </CardTitle>
              </CardHeader>
              <CardBody>
                <div className="chart-area">
                  <Line
                    data={chartData1}
                    options={chartExample2.options}
                  />
                </div>
              </CardBody>
            </Card>
            ) : (
              <Col style={{ paddingBottom: "20px"}}>
              <Link to="/student/enrollin">
              <img src={Left} alt="Image description" className="img-fluid w-100" />
  </Link>
</Col>
  )}
          </Col>
          <Col lg="4">
           {chartData2.labels.length>=1 ? (
            <Card className="card-chart">
              <CardHeader>
                <h5 className="card-category">{chart2}</h5>
                <CardTitle tag="h3">
                </CardTitle>
              </CardHeader>
              <CardBody>
                <div className="chart-area">
                  <Bar
                    data={chartData2}
                    options={chartExample3.options}
                  />
                </div>
              </CardBody>
            </Card>
            ) : (
              <Col style={{ paddingBottom: "20px"}}>
              <Link to="/student/enrollin">
              <img src={Middle} alt="Image description" className="img-fluid w-100" />
  </Link>
</Col>
  )}
          </Col>
          <Col lg="4">
          {chartData3.labels.length>=1 ? (
            <Card className="card-chart">
              <CardHeader>
                <h5 className="card-category">{chart3}</h5>
                <CardTitle tag="h3">
                </CardTitle>
              </CardHeader>
              <CardBody>
                <div className="chart-area">
                  <Line
                    data={chartData3}
                    options={chartExample4.options}
                  />
                </div>
              </CardBody>
            </Card>
           ) : (
            <Col style={{ paddingBottom: "20px"}}>
            <Link to="/student/enrollin">
            <img src={Right} alt="Image description" className="img-fluid w-100" />
</Link>
</Col>
)}
          </Col>
        </Row>
        <Row>
          <Col lg="6" md="12">
            <Card className="card-tasks">
              <CardHeader>
                <h6 className="title d-inline">Courses In Continuity</h6>
                <p className="card-category d-inline"> today</p>
                <UncontrolledDropdown>
                  <DropdownToggle
                    caret
                    className="btn-icon"
                    color="link"
                    data-toggle="dropdown"
                    type="button"
                  >
                    <i className="tim-icons icon-settings-gear-63" />
                  </DropdownToggle>
                  <DropdownMenu aria-labelledby="dropdownMenuLink" right>
                    <DropdownItem
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      Action
                    </DropdownItem>
                    <DropdownItem
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      Another action
                    </DropdownItem>
                    <DropdownItem
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      Something else
                    </DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
              </CardHeader>
              <CardBody>
                <div className="table-full-width table-responsive">
                <Table>
                  <tbody>
                     {courseCInfo.map((course) => (
                     <tr key={course.id}>
                         <td>
          <FormGroup check>
            <Label check>
            </Label>
          </FormGroup>
        </td>
        <td>
          <p className="title">{course.name}</p>
          <p className="text-muted">{course.description}</p>
        </td>
        <td className="td-actions text-right">
          <Button
            color="link"
            id={`tooltip${course.id}`}
            title=""
            type="button"
          >
            <i className="tim-icons icon-minimal-right" />
          </Button>
          <UncontrolledTooltip
            delay={0}
            target={`tooltip${course.id}`}
            placement="right"
          >
            <a href={course.link}>Go to Course</a>
          </UncontrolledTooltip>
        </td>
      </tr>
    ))}
  </tbody>
</Table>
                  
                </div>
              </CardBody>
            </Card>
          </Col>
          <Col lg="6" md="12">
            <Card>
              <CardHeader>
                <CardTitle tag="h4">Courses Enrolled In</CardTitle>
              </CardHeader>
              <CardBody>
                <Table className="tablesorter" responsive>
                  <thead className="text-primary">
                    <tr>
                      <th>Language</th>
                      <th>Topic</th>
                      <th>Teacher</th>
                      <th className="text-center">Progress</th>
                    </tr>
                  </thead>
                  <tbody>
                  {courseInfo.map((course, index) => (
                  <tr key={index}>
                  <td>{course.language}</td>
                  <td>{course.topic}</td>
                  <td>{course.teacher}</td>
                  <td className="text-center">{course.progress}</td>
                  </tr>
                  ))}
                  </tbody>
                </Table>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default Dashboard;
