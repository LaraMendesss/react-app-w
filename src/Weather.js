import React,{ useState } from "react";
import "./Weather.css";
import axios from "axios";
import WeatherCurrent from "./WeatherCurrent";

export default function Weather(props){ 

const [data, setData]=useState({ ready: false });
const [city,setCity]=useState(props.city);

function displayData(response){
    console.log(response.data.main.temp);
  
    setData({
        ready: true,
        temperature: Math.round(response.data.main.temp),
        humidity: response.data.main.humidity,
        wind: response.data.wind.speed,
        city: response.data.name,
        icon: "https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png",
        description: response.data.weather[0].description,
        date: new Date(response.data.dt * 1000),
    });
    }

    function handleSubmit(event){
        event.preventDefault();

        let apiKey=`62231151ce343c4d68652e1617efc22f`;

        let apiUrl=`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
        axios.get(apiUrl).then(displayData);
    }

    function updateCity(event){
        event.preventDefault();
        setCity(event.target.value);

    }

if (data.ready)
{
return(
    <div className="Weather">
    <form className="form" onSubmit={handleSubmit}>
        <div className="row">
            <div className="col-6">
    <input className="form-control"type="search"placeholder="Enter a city" onChange={updateCity} autoFocus="on"/></div>
    <div className="col-3">
    <input className="btn btn-primary w-100" type="submit" value="Search" />
    </div>
    </div>
        </form>
        <WeatherCurrent data={data} />
   
    </div>);}

    else{


return "Loading";

}}