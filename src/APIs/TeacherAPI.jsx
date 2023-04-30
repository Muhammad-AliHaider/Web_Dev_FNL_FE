import getBaseURL from './BaseURLs.jsx';
import jwtDecode from "jwt-decode";

export async function  Upload_video (VideoName,VideoURL,VideoThumbnail) {
    let x = getBaseURL();

    let token = window.localStorage.getItem("authtoken");

    const decodedToken = jwtDecode(token);
    const role = decodedToken.role;
    let url;
    if(role == "2"){
      url = x.toString() + "/teacher/create_Video"
    }

    else if(role == "1"){
      url = x.toString() + "/admin/create_Video"
    }

    let response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          'authorization': "Bearer "+ window.localStorage.getItem("authtoken"),
          'refresh-token': window.localStorage.getItem("refToken")
          },

        body : JSON.stringify({
            Name: VideoName,
            URL : VideoURL,
            Thumbnail:VideoThumbnail,
        })
          
        })
        .then( async (res) =>{
        return await res.json()})
        .then((res) => {
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
      return response;
}

export async function  get_videos (){
    let x = getBaseURL();

    let token = window.localStorage.getItem("authtoken");

    const decodedToken = jwtDecode(token);
    const role = decodedToken.role;
    let url;
    if(role == "2"){
    url = x.toString() + "/teacher/get_Video"
    }

    else if(role == "1"){
      url = x.toString() + "/admin/get_Video"
    }
    else{
      url = x.toString() + "/student/get_Video"
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
  
    //   console.log(response[response.length-1]._id);
      return response[response.length-1]._id;
}

export async function  add_video_to_course (props){

    let x = getBaseURL();

    let token = window.localStorage.getItem("authtoken");

    const decodedToken = jwtDecode(token);
    const role = decodedToken.role;

    let url;
    if(role == "2"){
    url = x.toString() + "/teacher/add_Videos"
    }

    else if(role == "1"){
      url = x.toString() + "/admin/add_Videos"
    }
    

    // url = x.toString() + "/teacher/add_Videos"

    const response = await fetch(url, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          'authorization':"Bearer "+ window.localStorage.getItem("authtoken"),
          'refresh-token': window.localStorage.getItem("refToken")
          },

        body : JSON.stringify({
          _id : window.sessionStorage.getItem("CourseID"),
          VideoID : props,
        })
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
  
    //   console.log(response[response.length-1]._id);
      return response;

}

export async function remove_video_from_course(props){
  let x = getBaseURL();

  let token = window.localStorage.getItem("authtoken");

    const decodedToken = jwtDecode(token);
    const role = decodedToken.role;

    let url;
    if(role == "2"){
    url = x.toString() + "/teacher/remove_Videos"
    }

    else if(role == "1"){
      url = x.toString() + "/admin/remove_Videos"
    }
    
  

  for(let i = 0; i < props.length; i++){
    // console.log(props[i]);
  const response = await fetch(url, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        'authorization': "Bearer "+window.localStorage.getItem("authtoken"),
        'refresh-token': window.localStorage.getItem("refToken")
        },

      body : JSON.stringify({
        _id : window.sessionStorage.getItem("CourseID"),
        VideoID : props[i],
      })
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
    }
  );

//   if(response.ok){
//     continue;
//   }
//   else{
//     break;
//   }
}

}

export async function  delete_Video(props){
  let x = getBaseURL();

  let token = window.localStorage.getItem("authtoken");

    const decodedToken = jwtDecode(token);
    const role = decodedToken.role;

    let url;
    if(role == "2"){
    url = x.toString() + "/teacher/delete_Video"
    }

    else if(role == "1"){
      url = x.toString() + "/admin/delete_Video"
    }
    

  for(let i = 0; i < props.length; i++){

  const response = await fetch(url, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        'authorization':"Bearer "+ window.localStorage.getItem("authtoken"),
        'refresh-token': window.localStorage.getItem("refToken")
        },

      body : JSON.stringify({
        _id : props[i],
      })

    }).then( async (res) =>{
      //console.log( await res.json() )
    return await res.json()})
    .then((res) => {
      // console.log((res));
      if(res.error){
        console.log("hello this is an ",res.error);
        return res.error;
      }
      else{
        return res.data;
      }})
    }
    window.location.href = "/teacher/course";
}