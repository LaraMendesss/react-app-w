import React, {useState} from "react";
import "./Weather.css";

export default function WeatherTemp(props){
const [unit, setUnit]=useState("celsius");

function showFar(event){
    event.preventDefault();
    setUnit("far");}

function showCelsius(event){
    event.preventDefault();
    setUnit("celsius");

}

function far(){

    return (props.celsius *9)/5+32;
}

if (unit==="celsius"){

    return (
    <div className="WeatherTemperature">
    <span className="temperature">{Math.round(props.celsius)}</span>
    <span className="unit">°C | <a href="/" onClick={showFar}>°F</a></span>
    </div>);}

    else{

        return (
            <div className="WeatherTemperature">
            <span className="temperature">{Math.round(far())}</span>
            <span className="unit"> <a href="/" onClick={showCelsius}>°C</a>| °F</span>
            </div>);}
    }
