const API_KEY="11f12643def1f5dac79377bc7f407bce";
const weather = document.querySelector("#weather span:first-child");
const city = document.querySelector("#weather span:last-child");

function onGeoOk(position) {    
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    fetch(url).then(response => response.json().then(data => {            
            city.innerText = data.name;
            weather.innerText = `${data.weather[0].main} ${data.main.temp}°C @`;
        }
    ));
}

function onGeoError() {
    alert("ERROR");
}

navigator.geolocation.getCurrentPosition(onGeoOk,onGeoError);

