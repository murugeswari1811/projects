import { FaSearchLocation } from "react-icons/fa";
import clear_icon from '../assets/clear.png'
import cloud_icon from '../assets/cloud.png'
import drizzle_icon from '../assets/drizzle.png'
import humidity_icon from '../assets/humidity.png'
import rain_icon from '../assets/rain.jpg'
import snow_icon from '../assets/snow.png'
import wind_icon from '../assets/wind.png'
import "./weather.css"
import { useState } from "react";

export default function Weather(){
    const api_key="e3d9794240991bcd01e33455b6def317";
    const [wicon,setWicon]=useState(cloud_icon)
    const search=async()=>{
        const searchInput=document.getElementById("search").value;
        console.log(searchInput)

        if(searchInput===""){
            return 0
        }

        let url=`https://api.openweathermap.org/data/2.5/weather?q=${searchInput}&units=Metric&appid=${api_key}`;
        let response=await fetch(url);
        let data= await response.json();
        console.log(data)
        let humiditypercent=document.getElementById("humi_percent")
        let wind=document.getElementById("wind_speed_percent")
        let temperature=document.getElementById("weather_temp")
        let location=document.getElementById("weather_location")

        humiditypercent.innerHTML=data.main.humidity+"%";
        wind.innerHTML=Math.floor(data.wind.speed)+"km/hr";
        temperature.innerHTML=Math.floor(data.main.temp)+" °C";
        location.innerHTML=data.name;

        if(data.weather[0].icon==="01d" || data.weather[0].icon==="01n" ){
            setWicon(clear_icon)
        }
        else if(data.weather[0].icon==="02d" || data.weather[0].icon==="02n" ){
            setWicon(cloud_icon)
        }
        else if(data.weather[0].icon==="03d" || data.weather[0].icon==="03n" ){
            setWicon(drizzle_icon)
        }
        else if(data.weather[0].icon==="04d" || data.weather[0].icon==="04n" ){
            setWicon(drizzle_icon)
        }
        else if(data.weather[0].icon==="09d" || data.weather[0].icon==="09n" ){
            setWicon(rain_icon)
        }
        else if(data.weather[0].icon==="10d" || data.weather[0].icon==="10n" ){
            setWicon(rain_icon)
        }
        else if(data.weather[0].icon==="13d" || data.weather[0].icon==="13n" ){
            setWicon(snow_icon)
        }
        else{
            setWicon(clear_icon)
        }
    }
    return(
        <>
        <div className="flex items-center justify-center h-screen bg-gradient-to-br from-black to-black">
            <div className="bg-orange-100 font-semibold text-center rounded-3xl border shadow-lg p-6 max-w-xs">
                
        <form className="max-w-md mx-auto">   
            <label for="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
            <div className="relative">
             <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
               
        </div>
        <input type="search" id="search" className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search..." required />
        <button type="button" className="text-white absolute end-2.5 bottom-2.5 bg-black hover:bg-black focus:ring-4 focus:outline-none focus:ring-black font-medium rounded-lg text-sm px-4 py-2 dark:bg-black dark:hover:bg-black dark:focus:ring-black" onClick={()=>search()}><FaSearchLocation /></button>
        </div>
        </form>

                 <img className="bg-black mt-4 mb-3 w-48 h-48 rounded-full shadow-lg mx-auto" src={wicon} alt="product designer"/>
                    <h1 className="text-5xl text-black" id="weather_temp"> 24 °C</h1>
                    <h3 className="text-2xl text-black" id="weather_location">London</h3>
                    <div>
                    <img src={humidity_icon} className="mt-6 h-6 w-6"/>
                        <p className="mr-80" id="humi_percent">64%</p>
                        <p className="mr-80 text-sm">Humidity</p>
                    </div>
                    <img id="wind_speed_image" src={wind_icon} className="h-8 w-8"/>
                    <div id="wind_speed">
                        <p id="wind_speed_percent">18 Km/h</p>
                        <p id="wind_speed_text" className="text-sm">Wind Speed</p>
                    </div>
            </div>
            
        </div>
        </>
    )
}