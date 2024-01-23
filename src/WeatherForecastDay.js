import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastDay(props){

    function day(){
        let date=new Date(props.forecast.dt*1000);
        let day=date.getDay();
        let days=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];

        return days[day];
    }
    return (
        <div>
    <div className="WeekForDay">{day()} </div>
    <WeatherIcon code={props.forecast.weather[0].icon} size={36}/>
    <div className="WeatherForTemp">
    <span className="ForMaxTemp">{Math.round(props.forecast.temp.max)}° |</span>
    <span className="ForMinTemp"> {Math.round(props.forecast.temp.min)}°</span>
    </div>
    </div>
);
}