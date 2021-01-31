const weatherContainer = document.querySelector(".js_weather");
const weatherTemperatuer = weatherContainer.querySelector(".weather");

const COORDS = "coords";
const API_KEY_WEATHER = "957210e03128b4442ba7133d78e07e7d"

function getWeather(latitude, longitude) {
    fetch(
        `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY_WEATHER}&units=metric`
    ).then((response) => response.json())
        .then((data) => {
            //console.log(data);
            const temperatuerdata = data.main.temp;
            const weatherdata = data.weather[0].main;
            weatherTemperatuer.innerText = `${temperatuerdata} // ${weatherdata}`;
        })
}

function saveCoords(coordsObj) {
    localStorage.setItem(COORDS, JSON.stringify(coordsObj));
}


function AskForGeoLocation() {
    const location = navigator.geolocation.getCurrentPosition(handleGeoSuccess, handleGeoError);
}

function handleGeoSuccess(position) {
    console.log(position);
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const coordsObj = {
        latitude,
        longitude
    };

    saveCoords(coordsObj);
    getWeather(latitude, longitude);
}

function handleGeoError() {
    console.log("Error. 위치 정보를 불러올 수 없습니다.")
}

function loadWeather() {
    const loadedCoored = localStorage.getItem(COORDS);
    if (loadedCoored === null) {
        // 날씨 정보 확인
        console.log("날씨 정보를 불러올 수 없습니다.");
        AskForGeoLocation();

    } else {
        // 날씨 정보 불러오기
        console.log("날씨 정보 불러오기 완료.")
        const parseCoords = JSON.parse(loadedCoored);
        getWeather(parseCoords.latitude, parseCoords.longitude);
    }
}


function init() {
    loadWeather();
}

init();