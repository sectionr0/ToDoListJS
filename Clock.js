const clockContainer = document.querySelector(".js_clock");
const clockTitile = clockContainer.querySelector("h2");
const clockYearTitile = clockContainer.querySelector("h1");

function getTime() {
    const data = new Date();
    const week = ['일', '월', '화', '수', '목', '금', '토'];


    const year = data.getFullYear();
    const month = data.getMonth() + 1;
    const day = data.getDate();

    // 요일 반환 값 
    const weekend = week[data.getDay()];
    const hour = data.getHours();
    const minute = data.getMinutes();
    const second = data.getSeconds();

    clockYearTitile.innerText = `${year} ${month < 10 ? `0${month}` : month} ${day < 10 ? `0${day}` : day}  ${weekend}`

    clockTitile.innerText =
        `${hour < 10 ? `0${hour}` : hour
        }:${minute < 10 ? `0${minute}` : minute
        }:${second < 10 ? `0${second}` : second}`;
}



function init() {
    getTime();
    setInterval(getTime, 1000);
}

init();