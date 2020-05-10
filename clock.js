const clockContainer = document.querySelector(".js-clock"),
      clockTitle = clockContainer.querySelector("h1");

function getTime() {
  const date = new Date();
  const minutes = date.getMinutes();
  const hours = date.getHours();
  const seconds = date.getSeconds();
  clockTitle.innerText = `${
      hours < 10 ? `0${hours}` : hours
    }:${
      minutes < 10 ? `0${minutes}` : minutes
    }:${
      seconds < 10 ? `0${seconds}` : seconds
    }`;
}
// ${seconds}만 사용한다면 1~9초 동안 01,02... 가 아니라 1,2...로 나옴
// ${seconds}에 작은(?) if를 사용
// (조건) ? (참 실행) : (거짓 실행)


function init() {
  getTime();
  setInterval(getTime, 1000);
}
//setInterval은 (함수, 인터벌타임) 입력
//인터벌타임은 밀리세컨드

init();