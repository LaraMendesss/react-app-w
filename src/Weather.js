import React from "react";
import "./Weather.css";


export default function Weather() {

    return(
<div className="Weather">
<form className="form" >
    <div className="row">
        <div className="col-6">
<input className="form-control"type="search"placeholder="Enter a city"/></div>
<div className="col-3">
<input className="btn btn-primary" type="submit" value="Search" /></div>
</div>
    </form>
<h1>New York</h1>
<ul>
    <li>Wednesday 07:00</li>
    <li>Mostly Cloudy</li>
</ul>
<div className="row">
    <div className="col-6">

        <img src="https://user-images.githubusercontent.com/139086341/280107452-9eff79b3-5881-43ec-b5a0-2f62080d8bb2.jpg" width="100" alt="weather icon"/>

    
        6°C
    </div>
    <div className="col-6">
    
    <ul>
    <li>Precipition: 15%</li>
    <li>Humidity: 72%</li>
    <li>Wind: 13km/h</li>
</ul>
</div>

    </div>
</div>)
}