
import getBaseURL from './BaseURLs.jsx';
import axios from 'axios';
import qs from 'qs';



export async function getAllCourses(){
    
    console.log(window.localStorage.getItem("token"));
    let x = getBaseURL();

    let url = x.toString() + "/student/courses/get";

    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        'authorization': window.localStorage.getItem("token")
        },
        
      })
      .then( async (res) =>{
        //console.log( await res.json() )
      return await res.json()})
      .then((res) => {
        // console.log((res));
        if(res.error){
          return res.error;
        }
        else{
          return res.data;
        }
      })
      .catch((err) => {
        console.log(err);
        return err;
      }
    );

    // console.log(response);
    return response;
}



export async function getCourseData(){

      let x = getBaseURL();

    let url = x.toString() + "/student/course/get" + "?_id=" + window.sessionStorage.getItem('CourseID');

    let config = {
        method: "GET",
        url:  url,
        headers: { 
          "Content-Type": "application/json",
        'authorization': window.localStorage.getItem("token")
        },
        
      };

      let response =await fetch(url,config).then( async (res) =>{
        let x = await res.json();
        // console.log( x)
      return x})
      .then((res) => {
        // console.log((res.data[0]));
        if(res.error){
          return res.error;
        }
        else{
          return res.data[0];
        }
      })
      .catch((err) => {
        console.log(err);
        return err;
      } );
      // console.log(response);

        return response;

      
}


export async function getNotifications(){
  let x = getBaseURL();

  let url ;
  let token = window.localStorage.getItem("authtoken");

    const decodedToken = jwtDecode(token);
    const role = decodedToken.role;

  if(role == "2"){
    url = x.toString() + "/teacher/notification/get"
    }

    else if(role == "1"){
      url = x.toString() + "/admin/notification/get"
    }
  else{
    url = x.toString() + "/student/notification/get"
  }
  

  const response = await  fetch(url, {
          method: 'GET',
          headers: {
              "Content-Type": "application/json",
              'authorization':"Bearer "+ window.localStorage.getItem("authtoken"),
              'refresh-token': window.localStorage.getItem("refToken")
            }
        }).then( async (res) =>{
        return await res.json()})
        .then((res) => {
          if(res.error){
            console.log("hello this is an ",res.error);
            window.location.href = "/signin";
            return res.error;
          }
          else{
            return res;
          }})

  return response;
}


export async function getProfile(){
  let x = getBaseURL();

  let url ;
  let token = window.localStorage.getItem("authtoken");

    const decodedToken = jwtDecode(token);
    const role = decodedToken.role;

  if(role == "2"){
    url = x.toString() + "/teacher/profile/get"
    }

    else if(role == "1"){
      url = x.toString() + "/admin/profile/get"
    }
  else{
    url = x.toString() + "/student/profile/get"
  }
  

  const response = await  fetch(url, {
          method: 'GET',
          headers: {
              "Content-Type": "application/json",
              'authorization':"Bearer "+ window.localStorage.getItem("authtoken"),
              'refresh-token': window.localStorage.getItem("refToken")
            }
        }).then( async (res) =>{
        return await res.json()})
        .then((res) => {
          if(res.error){
            console.log("hello this is an ",res.error);
            window.location.href = "/signin";
            return res.error;
          }
          else{
            return res;
          }})

  return response;
}


export async function delete_notification(props){


  //axios.delete("http://127.0.0.1:3000/student/notification/delete", {data: {ID: notification._id}});

  let x = getBaseURL();

  let token = window.localStorage.getItem("authtoken");

    const decodedToken = jwtDecode(token);
    const role = decodedToken.role;
  let url ;
  if(role == "2"){
    url = x.toString() + "/teacher/notification/delete"
    }

    else if(role == "1"){
      url = x.toString() + "/admin/notification/delete"
    }
  else{
    url = x.toString() + "/student/notification/delete"
  }

  const response = await  fetch(url, {
          method: 'GET',
          headers: {
              "Content-Type": "application/json",
              'authorization':"Bearer "+ window.localStorage.getItem("authtoken"),
              'refresh-token': window.localStorage.getItem("refToken")
            },
          body : JSON.stringify({
            ID : props
          })
        }).then( async (res) =>{
          return await res.json()})
          .then((res) => {
            if(res.error){
              console.log("hello this is an ",res.error);
              return res.error;
            }
            else{
              return res;
            }})

  return response;
}

