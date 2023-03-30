import { useState } from "react";
import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";
import { storage } from "../../contexts/Firebase";

function App() {
  const [progress, setProgress] = useState(0);
  const formHandler = (e) => {
    e.preventDefault();
    const file = e.target[0].files[0];
    uploadFiles(file);
  };

  const uploadFiles = (file) => {
    //
    if (!file) return;
    const sotrageRef = ref(storage, `files/${file.name}`);
    const uploadTask = uploadBytesResumable(sotrageRef, file);

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
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          console.log("File available at", downloadURL);
        });
      }
    );
  };

  return (
    <div className="App">
      <form onSubmit={formHandler}>
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


