import {useState} from "react"
import './App.css';
import {useForm} from "react-hook-form"
import axios from "axios"

function App() {

  const {register, handleSubmit} = useForm()
  const [file, setFile] = useState()

  const onSubmitFile = (data) => {
    console.log(data.file[0])

    const formData = new FormData();
    for (let i = 0; i < data.file.length; i++) {
      console.log(data.file[i])
      formData.append("myfile", data.file[i]);
    }

    axios.post("http://localhost:8001/upload", formData)
      .then(response => console.log(response))
      .catch(err => console.error(err))
    // console.log(formData)


  }


  return (
    <div>
     <form onSubmit={handleSubmit(onSubmitFile)}>
        <input {...register("file")} type="file" multiple />
        <button type="submit">Submit</button>
      </form>
     
    </div>
  );
}

export default App;
