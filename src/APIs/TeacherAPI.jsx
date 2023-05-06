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

export async function  create_quiz(Name){
  let x = getBaseURL();

  let token = window.localStorage.getItem("authtoken");

    const decodedToken = jwtDecode(token);
    const role = decodedToken.role;

    let url;
    if(role == "2"){
    url = x.toString() + "/teacher/create_quiz"
    }

    else if(role == "1"){
      url = x.toString() + "/admin/create_quiz"
    }

    const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          'authorization':"Bearer "+ window.localStorage.getItem("authtoken"),
          'refresh-token': window.localStorage.getItem("refToken")
        },
        body : JSON.stringify({
          Name : Name,
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
    // console.log(response);
    return response;
    
}

export async function  get_quiz(){
  
  let x = getBaseURL();

  let token = window.localStorage.getItem("authtoken");

  const decodedToken = jwtDecode(token);
  const role = decodedToken.role;
  let url;
  if(role == "2"){
  url = x.toString() + "/teacher/get_quiz"
  }

  else if(role == "1"){
    url = x.toString() + "/admin/get_quiz"
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

export async function  create_Quiz_card(Question,Options,Answer){
  // /create_quiz_card

  let x = getBaseURL();

  let token = window.localStorage.getItem("authtoken");

  const decodedToken = jwtDecode(token);
  const role = decodedToken.role;
  let url;
  if(role == "2"){
  url = x.toString() + "/teacher/create_quiz_card"
  }

  else if(role == "1"){
    url = x.toString() + "/admin/create_quiz_card"
  }
  
  console.log(Question,Options,Answer);

  const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        'authorization':"Bearer "+ window.localStorage.getItem("authtoken"),
        'refresh-token': window.localStorage.getItem("refToken")
        },
        body : JSON.stringify({
          Question: Question,
          Options : Options,
          Answer : Answer,
        })
      }).then( async (res) =>{
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
    // console.log(response);
    return response;
}

export async function  get_quiz_card(props){

  let x = getBaseURL();

  let token = window.localStorage.getItem("authtoken");

  const decodedToken = jwtDecode(token);
  const role = decodedToken.role;
  let url;
  if(role == "2"){
  url = x.toString() + "/teacher/get_quiz_card"
  }

  else if(role == "1"){
    url = x.toString() + "/admin/get_quiz_card"
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

export async function  add_quiz_card_to_Quiz(Card_id){

  // /add_content

  let x = getBaseURL();

  let token = window.localStorage.getItem("authtoken");

  const decodedToken = jwtDecode(token);
  const role = decodedToken.role;
  let url;
  if(role == "2"){
  url = x.toString() + "/teacher/add_content"
  }

  else if(role == "1"){
    url = x.toString() + "/admin/add_content"
  }

  const response = await fetch(url, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      'authorization':"Bearer "+ window.localStorage.getItem("authtoken"),
      'refresh-token': window.localStorage.getItem("refToken")
      },

    body : JSON.stringify({
      _id : window.sessionStorage.getItem("QuizID"),
      Card_ID : Card_id,
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

export async function  add_quiz_to_Video(props){
  // /add_quiz

  let x = getBaseURL();

  let token = window.localStorage.getItem("authtoken");

  const decodedToken = jwtDecode(token);
  const role = decodedToken.role;
  let url;
  if(role == "2"){
  url = x.toString() + "/teacher/add_quiz"
  }

  else if(role == "1"){
    url = x.toString() + "/admin/add_quiz"
  }

  const response = await fetch(url, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      'authorization':"Bearer "+ window.localStorage.getItem("authtoken"),
      'refresh-token': window.localStorage.getItem("refToken")
      },

    body : JSON.stringify({
      _id : window.sessionStorage.getItem("VideoID"),
      QuizID : window.sessionStorage.getItem("QuizID"),
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


export async function  get_quiz_by_id(_id){
  
  let x = getBaseURL();

  let token = window.localStorage.getItem("authtoken");

  const decodedToken = jwtDecode(token);
  const role = decodedToken.role;
  let url;
  if(role == "2"){
  url = x.toString() + "/teacher/get_quiz?_id=" + _id
  }

  else if(role == "1"){
    url = x.toString() + "/admin/get_quiz?_id=" + _id
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
    return response;
}


export async function delete_quiz(){

  let x = getBaseURL();

  let token = window.localStorage.getItem("authtoken");

  const decodedToken = jwtDecode(token);
  const role = decodedToken.role;
  let url;
  if(role == "2"){
  url = x.toString() + "/teacher/delete_Quiz"
  }

  else if(role == "1"){
    url = x.toString() + "/admin/delete_Quiz"
  }

  const response = await fetch(url, {
    method: "delete",
    headers: {
      "Content-Type": "application/json",
      'authorization':"Bearer "+ window.localStorage.getItem("authtoken"),
      'refresh-token': window.localStorage.getItem("refToken")
      },

    body : JSON.stringify({
      ID : window.sessionStorage.getItem("QuizID"),
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

export async function remove_quiz_from_video(){

  let x = getBaseURL();

  let token = window.localStorage.getItem("authtoken");

  const decodedToken = jwtDecode(token);
  const role = decodedToken.role;
  let url;
  if(role == "2"){
  url = x.toString() + "/teacher/remove_quiz"
  }

  else if(role == "1"){
    url = x.toString() + "/admin/remove_quiz"
  }


  const response = await fetch(url, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      'authorization':"Bearer "+ window.localStorage.getItem("authtoken"),
      'refresh-token': window.localStorage.getItem("refToken")
      },

    body : JSON.stringify({
      _id : window.sessionStorage.getItem("VideoID"),
      QuizID : window.sessionStorage.getItem("QuizID"),
    })
    })
    .then( async (res) =>{
      //console.log( await res.json() )
      console.log("HUha YEHA TAK")
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
