import { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import SearchIcon from "@mui/icons-material/Search";
import "./WeatherApp.css";
import Alert from '@mui/material/Alert';


export default function SearchBox({updateInfo}) {
  let [city, setCity] = useState("");
  let [error , setError] = useState(false)


  const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;
  const API_URL = import.meta.env.VITE_API_URL ;

   let  callWeatherApi =  async ()=>{
    try{
       let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
       let jsonData = await response.json();
      //  console.log("All Results", jsonData)

       let newWeather = {
           temp : jsonData.main.temp,
           humidity : jsonData.main.humidity,
           temp_max : jsonData.main.temp_max,
           temp_min: jsonData.main.temp_min,
           feels_like: jsonData.main.feels_like,
           location : city,
           weather : jsonData.weather[0].main,
       }

         await  updateInfo(newWeather);
      //  console.log("our new Weather data" , newWeather)

    } catch(e){
        throw e;
    }
  }

  function handleInputChange(e) {
    setCity(e.target.value);
  }

    let  handleSubmit = async(e)=> {
      try{
        e.preventDefault(); // prevent the page from reloading
        console.log(city);
        await callWeatherApi();    
        setCity("");
      } catch(e){
        setError(true)
      }
  }

  return (
    <div className="InfoBox">
      <form onSubmit={handleSubmit}>
        <TextField
          id="outlined-basic"
          label="Enter-City"
          variant="outlined"
          value={city}
          onChange={handleInputChange}
          required
        />
        <br /> <br />
        <Button
          variant="contained"
          type="submit"
        >
          Search &nbsp; <SearchIcon />{" "}
        </Button>

         {error &&<Alert severity="error" style={{marginTop:"10px"}}>City Not Found!!</Alert> }
      </form>
    </div>
  );
}