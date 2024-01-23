import React from "react";
import Weather from "./Weather";
import './App.css';
import Logo from "./logo3.png";

export default function App() {
  return (
    <div className="App">
    <div className="Container">
     
    <p>
       <img src={Logo} alt="logo" width={68}/>Weather App
        </p>
        <Weather city="New York"/>
     <footer>This project was coded by <a href="https://www.linkedin.com/in/lara-chagas-mendes/" target="_blank"rel="noreferrer">Lara Mendes</a> and it's open sourced on <a href="https://github.com/LaraMendesss/react-app-w" target="_blank"rel="noreferrer">GitHub</a> and hosted on <a href="https://react-lara-wapp.netlify.app/" target="_blank"rel="noreferrer">Netlify</a>.</footer>
     </div>
     </div>);
}

