import { useState , useEffect } from "react"
import SearchBox from "./searchBox"
import DisplayBox from "./displayBox"
import "./WeatherApp.css"
import weatherImg from "../assets/weather-info.jpg"; // <- imported


export default function WeatherApp(){

    let[weatherInfo , SetWeatherInfo] = useState({})

    let updateInfo = (ourResult)=>{
       SetWeatherInfo(ourResult)
       console.log("Data recieved");
    }

    // Yeh useEffect tabhi chalega jab bhi 'weatherInfo' state change hoga
    useEffect(() => {
    // Shuru me yeh log na chale, isliye check laga rahe hain
    if (weatherInfo && weatherInfo.location) { 
        console.log("State has been updated:", weatherInfo);
    }
    }, [weatherInfo]); // Dependency array me weatherInfo daala


    return(
        <div className="WeatherApp">
            <div className="ForFlex">
            <img className="Img" src={weatherImg} alt="weather-info"  />
            <h2 style={{display:"inline", fontFamily:"sans-serif"}}>Weather App </h2>
            </div>
            <SearchBox updateInfo={updateInfo}/>
            <DisplayBox ourWeather={weatherInfo}/>
        </div>
    )
}