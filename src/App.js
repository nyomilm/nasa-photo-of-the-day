import React, {useState, useEffect} from "react";
import "./App.css";
import axios from 'axios';

// import PhotoCard from "./Components/PhotoCard";
import PhotoList from "./Components/PhotoList";
import PhotoWatch from "./Components/PhotoWatch";



function App() {
  const [data, setData] = useState( [] );
  const [query, setQuery] = useState("react");

  const [photo, setPhoto] = useState([]);
  useEffect(() =>{
    const fetchData = () => {
    axios
    .get("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY")
     
.then (result => {
      console.log(result)
      setPhoto(result.data)
  })
  
  .catch(error => console.log('There is an error:', error))
}})


  return (
    <div className="App">
      <h1>NASA PHOTO OF THE DAY</h1>
      {/* <PhotoList /> */} 
      {/* <PhotoWatch /> */}
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun 🚀!
      </p>
    </div>
  );
}

export default App;
