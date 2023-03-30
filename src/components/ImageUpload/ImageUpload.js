import { useState } from "react";
import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";
import { storage } from "../../contexts/Firebase";
import ImageIcon from "../ImageIcon/ImageIcon";

var dr = 'https://firebasestorage.googleapis.com/v0/b/forget-normal-life.appspot.com/o/default-avatar.png?alt=media&token=92a92dbe-097e-463e-a96b-ff6d814a0b28'

function App() {
  const [progress, setProgress] = useState(0);
  const [downloadURL, setDownloadURL] = useState(dr);

  const formHandler = (e) => {
    e.preventDefault();
    const file = e.target[0].files[0];
    uploadFiles(file);
  };

  const uploadFiles = (file) => {
    //
    if (!file) return;
    const storageRef = ref(storage, `files/${file.name}`);
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const prog = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        setProgress(prog);
      },
      (error) => console.log(error),
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((url) => {
          console.log("File available at", url);
          setDownloadURL(url);
        });
      }
    );
  };

  return (
    <div className="App">
      <form onSubmit={formHandler}>
        <ImageIcon props={downloadURL} />
        <p wrapperClass='mb-4' id='formControlLg' size="lg"> Upload Profile Picture </p>
        <input type="file" className="input" />
        <button type="submit">Upload</button>
      </form>
      <p wrapperClass='mb-4' id='formControlLg' size="lg"> Uploading done {progress}% </p>
      <hr />
    </div>
  );
}

export default App;
