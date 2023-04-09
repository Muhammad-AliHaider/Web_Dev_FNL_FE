
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

