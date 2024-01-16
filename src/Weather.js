import React,{ useState } from "react";
import "./Weather.css";
import axios from "axios";


export default function Weather(props){ 

const [data, setData]=useState({ ready: false });

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
        date: "Wednesday 07:00",
    });
    }


if (data.ready)
{
return(
    <div className="Weather">
    <form className="form" >
        <div className="row">
            <div className="col-6">
    <input className="form-control"type="search"placeholder="Enter a city" autoFocus="on"/></div>
    <div className="col-3">
    <input className="btn btn-primary w-100" type="submit" value="Search" /></div>
    </div>
        </form>
    <h1 className="text-capitalize">{data.city}</h1>
    <ul>
        <li>{data.date}</li>
        <li className="text-capitalize">{data.description}</li>
    </ul>
    <div className="row mt-3">
        <div className="col-6 details">
    
            <img src={data.icon} alt={data.description} width="100"  className="float-left"/>
    
        <div className="tempUnit">
          <span className="temperature">{data.temperature}</span>
          <span className="unit">°C</span>
          </div>
        </div>
        <div className="col-6">
        
        <ul>
       <br/>
        <li>Humidity: {data.humidity}%</li>
        <li>Wind: {data.wind}km/h</li>
    </ul>
    </div>
    
        </div>
    </div>);}

    else{

let apiKey=`62231151ce343c4d68652e1617efc22f`;

let apiUrl=`http://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}&units=metric`
axios.get(apiUrl).then(displayData);

return "Loading";

}}