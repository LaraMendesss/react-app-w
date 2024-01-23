import React from "react";
import FormatDate from "./FormatDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemp from "./WeatherTemp.js";

export default function WeatherCurrent(props){
    return (
    <div className="weatherCurrent">
    <h1 className="text-capitalize">{props.data.city}</h1>
    <ul>
    <li className="fw-bold fs-4"><FormatDate date={props.data.date}/></li>
    <li className=" fs-5 text-capitalize">{props.data.description}</li>
    </ul>
    <div className="row mt-3">
    <div className="col-6 details">
    <div className="">
     <WeatherIcon code={props.data.icon} size={80}/>
     </div>    
     <WeatherTemp celsius={props.data.temperature} />
       
        </div>
        <div className="col-6">
        
        <ul>
       <br/>
        <li>Humidity: {props.data.humidity}%</li>
        <li>Wind: {props.data.wind}km/h</li>
    </ul>
    </div>
    </div>
    </div>);}