
import getBaseURL from './BaseURLs.jsx';
import jwtDecode from "jwt-decode";
import axios from 'axios';
import qs from 'qs';



export async function getAllCourses(){
  console.log("from getAllCouresesData ",window.localStorage.getItem("refToken"))
    
    console.log(window.localStorage.getItem("authtoken"));
    let x = getBaseURL();

    let url ;
    let token = window.localStorage.getItem("authtoken");

    const decodedToken = jwtDecode(token);
    const role = decodedToken.role;


    // let role = JSON.parse(window.localStorage.getItem("user"))["Role"];

    console.log("role is " , role);

    if(role == "2"){
      url = x.toString() + "/teacher/get_Course"
      }
  
    else if(role == "1"){
      url = x.toString() + "/admin/get_Course"
    }
    else{
      url = x.toString() + "/student/course/get"
    }

    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        'authorization':"Bearer "+ window.localStorage.getItem("authtoken"),
        'refresh-token': window.localStorage.getItem("refToken")
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

    let url ;
    let token = window.localStorage.getItem("authtoken");

    const decodedToken = jwtDecode(token);
    const role = decodedToken.role;

    if(role == "2"){
      url = x.toString() + "/teacher/get_Course" + "?_id=" + window.sessionStorage.getItem('CourseID');
      }
  
      else if(role == "1"){
        url = x.toString() + "/admin/get_Course"+ "?_id=" + window.sessionStorage.getItem('CourseID');
      }
    else{
      url = x.toString() + "/student/course/get"+ "?_id=" + window.sessionStorage.getItem('CourseID');
    }
    console.log(url);

    let config = {
        method: "GET",
        url:  url,
        headers: { 
          "Content-Type": "application/json",
        'authorization': "Bearer "+window.localStorage.getItem("authtoken"),
        'refresh-token': window.localStorage.getItem("refToken")
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
      console.log(response);

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


export async function updateProfile(profileData){

  let x = getBaseURL();

  let token = window.localStorage.getItem("authtoken");

  const decodedToken = jwtDecode(token);
  const role = decodedToken.role;
  let url;
  if(role == "2"){
  url = x.toString() + "/teacher/profile/update"
  }

  else if(role == "1"){
    url = x.toString() + "/admin/profile/update"
  }

  else{
    url = x.toString() + "/student/profile/update"
  }


  const response = await fetch(url, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      'authorization':"Bearer "+ window.localStorage.getItem("authtoken"),
      'refresh-token': window.localStorage.getItem("refToken")
      },

    body : JSON.stringify({
      profileData
    })
    })
    .then( async (res) =>{
      //console.log( await res.json() )
      // console.log("HUha YEHA TAK")
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

//   console.log(response[response.length-1]._id);
  return response;




}


export async function delete_profile(){


  //axios.delete("http://127.0.0.1:3000/student/notification/delete", {data: {ID: notification._id}});

  let x = getBaseURL();

  let token = window.localStorage.getItem("authtoken");

    const decodedToken = jwtDecode(token);
    const role = decodedToken.role;
  let url ;
  if(role == "2"){
    url = x.toString() + "/teacher/profile/delete"
    }

    else if(role == "1"){
      url = x.toString() + "/admin/profile/delete"
    }
  else{
    url = x.toString() + "/student/profile/delete"
  }

  const response = await  fetch(url, {
          method: 'DELETE',
          headers: {
              "Content-Type": "application/json",
              'authorization':"Bearer "+ window.localStorage.getItem("authtoken"),
              'refresh-token': window.localStorage.getItem("refToken")
            },
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

export async function signout(){


  //axios.delete("http://127.0.0.1:3000/student/notification/delete", {data: {ID: notification._id}});

  let x = getBaseURL();

  let url ;
  url = x.toString() + "/auth/signout"

  const response = await  fetch(url, {
          method: 'GET',
          headers: {
              "Content-Type": "application/json",
              'authorization':"Bearer "+ window.localStorage.getItem("authtoken"),
              'refresh-token': window.localStorage.getItem("refToken")
            },
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

