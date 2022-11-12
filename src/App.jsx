import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

const App = () => {
  const [animePic, setAnimePic] = useState([]);
  const [animeScene, setAnimeScene] = useState([]);
  const [animeQuotes, setAnimeQuotes] = useState([]);

  const fetchData = () => {
    const animePic = "https://api.waifu.pics/type/category";
    const animeScene = "https://images.plurk.com/32B15UXxymfSMwKGTObY5e.jpg";
    const animeQuotes = "https://animechan.vercel.app/api/random";



    const getAnimePic = axios.get(animePic)
    const getAnimeScene = axios.get(animeScene);
    const getAnimeQuotes = axios.get(animeQuotes);
    
    // I'm using axios.all to get all my API's at once
    axios.all([getAnimePic, getAnimeScene, getAnimeQuotes]).then(
      axios.spread((...allData) => { // I use spread operator to pass everything at once isntead of individually. 
        const allAnimePic = allData[0]
        const getAllAnimeScene = allData[1]
        const getAllAnimeQuotes = allData[2]

        console.log(allAnimePic)
        console.log(getAllAnimeScene)
        console.log(getAllAnimeQuotes)
        
      })
    )
  }
  
useEffect(() => {
  fetchData()
}, [])
 
return (
    <div className="App">
      
    </div>
    );
 };

export default App
