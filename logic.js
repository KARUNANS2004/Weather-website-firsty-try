let apiKey='8ab75096a2dba5f60662e3c0195c2509';
let apiURL='https://api.openweathermap.org/data/2.5/weather?units=metric&q=';

async function checkWeather(city){
    let response =await fetch(apiURL + city + `&appid=${apiKey}`);
    let data= await response.json();

    if (data.name===undefined){
        document.querySelector('.weather').style.display="none";
        document.querySelector('.error').style.display='block';
        return;
    }else{
        document.querySelector('.city').innerHTML=data.name;
        document.querySelector('.temp').innerHTML=Math.round(data.main.temp) + "°C";
        document.querySelector('.humidity').innerHTML=`${data.main.humidity}%`;
        document.querySelector('.wind').innerHTML=Math.round(data.wind.speed) + "Km/h";

        if (data.weather[0].main==='Clear'){
            weatherImage.src='clear.png';
        }
        else if(data.weather[0].main=='Clouds'){
            weatherImage.src='clouds.png';
        }
        else if(data.weather[0].main==='Mist'){
            weatherImage.src='mist.png';
        }
        else if(data.weather[0].main==='Drizzle'){
            weatherImage.src='drizzle.png';
        }
        else if(data.weather[0].main==='Rain'){
            weatherImage.src='rain.png';
        }
        else if(data.weather[0].main==='Snow'){
            weatherImage.src='snow.png';
        }

        document.querySelector('.weather').style.display='block';
    }
}


let searchInput=document.querySelector('.search input');
let searchButton=document.querySelector('.search button');
let weatherImage=document.querySelector('.weather-icon');

searchButton.addEventListener("click",()=> {
    checkWeather(searchInput.value);
})

function checkForEnterKey(event){
    if (event.key==='Enter'){
        checkWeather(searchInput.value);
    }
}

searchInput.addEventListener('keydown',checkForEnterKey);