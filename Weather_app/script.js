const container = document.querySelector('.container');
const search = document.querySelector('.search');
const weatherBox = document.querySelector('.Weather');
const weatherDetail = document.querySelector('.weather_detail')
const error =document.querySelector('.not_found')

search.addEventListener('click', function(){
    const APIkey = '4922240818ee6e63c6a2deec8f2c1b19';
    const city = document.querySelector('.kotak input').value;
    const daerah = document.querySelector('.nama_daerah .daerah');
    daerah.innerHTML = city;
    if (city == '')
        return

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${APIkey}`).then(response =>response.json()).then(json=>{

        if(json.cod == '404'){
            container.style.height = '350px'
            weatherBox.classList.remove('active');
            weatherDetail.classList.remove('active');
            error.classList.add('active');
            return;
        }

            container.style.height = '420px'
            weatherBox.classList.add('active');
            weatherDetail.classList.add('active');
            error.classList.remove('active');

        const image = document.querySelector('.gambar_weather');
        const temprature = document.querySelector('.Weather .temperature');
        const description = document.querySelector('.Weather .description');
        const humidity= document.querySelector('.weather_detail .humid span');
        const wind= document.querySelector('.weather_detail .wind span');

        if(json.weather[0].main == 'Clear'){
            image.src = 'sun.png';
            
        }else if(json.weather[0].main == 'Rain'){
            image.src ='heavy-rain.png';
            
        }else if(json.weather[0].main == 'Snow'){
            image.src ='snow.png';
            
        }else if(json.weather[0].main == 'Mist'){
            image.src ='fog.png';
            
        }else if(json.weather[0].main == 'Clouds'){
            image.src ='cloudy (1).png';
            
        }else if(json.weather[0].main == 'Haze'){
            image.src ='fog.png';
            
        }else{
            image.src = 'cloudy (1).png'
        }

        temprature.innerHTML = `${parseInt(json.main.temp)}<span>&deg;C</span`;
        description.innerHTML = `${json.weather[0].description}`;
        humidity.innerHTML = `${json.main.humidity}%`;
        wind.innerHTML = `${json.wind.speed}Km/H`;
    })
})