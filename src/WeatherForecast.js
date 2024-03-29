import React, {useState, useEffect} from "react";
import "./WeatherForecast.css";
import axios from "axios";
import WeatherForecastDay from "./WeatherForecastDay";

export default function WeatherForecast(props){
    let [loaded,setLoaded]=useState(false);
    let[forecast,setForecast]=useState(null);

    useEffect(() => {
        setLoaded(false);
    }, [props.coord]);

    function handleResponse(response){
    setForecast(response.data.daily);
    setLoaded(true);
    }

        if(loaded){
        return(
        <div className="WeatherForecast">
        <div className="row"> 

 {forecast.map(function (dailyForecast, index) {
        if (index < 5){
        return(
                <div className="col" key={index}>
              <WeatherForecastDay forecast={dailyForecast}/>
               </div>);}
               
            else{return null}}
               )}
               </div>
               </div>);}

else{

    let apiKey="0ebc654fccbc00189d5408f3d6f15b08";
    let lon= props.coord.lon;
    let lat= props.coord.lat;
    let apiUrl= `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse);
    return null;}}