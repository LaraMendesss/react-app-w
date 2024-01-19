import React,{ useState } from "react";
import "./Weather.css";
import axios from "axios";
import WeatherCurrent from "./WeatherCurrent";

export default function Weather(props){ 

const [data, setData]=useState( {ready:false} );
const [city, setCity] = useState(props.city);

function displayData(response){
    setData({
        ready: true,
        temperature: Math.round(response.data.main.temp),
        humidity: response.data.main.humidity,
        wind: Math.round(response.data.wind.speed),
        city: response.data.name,
        icon: response.data.weather[0].icon,
        description: response.data.weather[0].description,
        date: new Date(response.data.dt * 1000),
    });
    }

    function handleSubmit(event){
        event.preventDefault();
        search(); 
    }

    function updateCity(event){
        setCity(event.target.value);

    }

    function search(){
        let apiKey="3c949ba49d38be2487ee278e0d2d4059";
        let apiUrl=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
        axios.get(apiUrl).then(displayData);

    }

if (data.ready) {
return (
    <div className="Weather">
    <form className="form" onSubmit={handleSubmit}>
        <div className="row">
            <div className="col-6">
    <input className="form-control"type="search" placeholder="Enter a city" onChange={updateCity} autoFocus="on"/>
    </div>
    <div className="col-3">
    <input className="btn btn-primary w-100" type="submit" value="Search" />
    </div>
    </div>
        </form>
        <WeatherCurrent data={data} />
   
    </div>);}

    else{
       search();

return "loading"

};}