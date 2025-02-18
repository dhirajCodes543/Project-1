const wind=document.getElementById('wind-speed');
const weather=document.getElementById('weather-condition');
const temp=document.getElementById('temperature');
const humidity=document.getElementById('humidity');
const press=document.getElementById('pressure');
const btn=document.querySelector('button');


btn.addEventListener("click",()=>{
    const city=document.getElementById('search-input').value;
    const api_key="9e1a8df88284fc8920b9050319fa345b";
    const url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;
    fetch(url)
    .then(response=>response.json())
    .then(data=>{
        console.log(data);
        temp.innerHTML=data.main.temp;
        wind.innerHTML=data.wind.speed;
        weather.innerHTML=data.weather[0].main;
        press.innerHTML=data.main.pressure;
        humidity.innerHTML=data.main.humidity;
    })
});