import React from "react";
import FormatDate from "./FormatDate";

export default function WeatherCurrent(props){
    return (
    <div className="weatherCurrent">
    <h1 className="text-capitalize">{props.data.city}</h1>
    <ul>
        <li><FormatDate date={props.data.date}/></li>
        <li className="text-capitalize">{props.data.description}</li>
    </ul>
    <div className="row mt-3">
        <div className="col-6 details">
    
            <img src={props.data.icon} alt={props.data.description} width="100"  className="float-left"/>
    
        <div className="tempUnit">
          <span className="temperature">{props.data.temperature}</span>
          <span className="unit">°C</span>
          </div>
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