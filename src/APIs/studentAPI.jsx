import getBaseURL from './BaseURLs.jsx';
import jwtDecode from "jwt-decode";
export async function getCourse(courseData){
    console.log('Data',courseData)
   
    let x = getBaseURL();
  
    console.log("audkd")
    let token = window.localStorage.getItem("authtoken");
  
    const decodedToken = jwtDecode(token);
    const role = decodedToken.role;
    let url;
    if(role == "2"){
    url = x.toString() + "/student/courser/get"
    }
  
    else if(role == "1"){
      url = x.toString() + "/student/courser/get"
    }
  
    else{
      url = x.toString() + "/student/courser/get"
    }
  
  
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        'authorization':"Bearer "+ window.localStorage.getItem("authtoken"),
        'refresh-token': window.localStorage.getItem("refToken")
        },
  
      body : JSON.stringify({
        courseData
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