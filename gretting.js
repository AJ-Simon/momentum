const form = document.querySelector(".js-form"),
      input = form.querySelector("input"),
      greeting = document.querySelector(".js-greetings");

const USER_LS = "currentUser",
    SHOWING_CN = "showing";

function saveName(text){
    localStorage.setItem(USER_LS, text);
}

function handleSubmit(event) {
    event.preventDefault(); 
    const currentValue = input.value;
    paintGreeting(currentValue);
    saveName(currentValue);
}
// event가 일어나면 root에서 일어나도 form에서 반응
// form을 제출하는 이벤트 발생하면 document까지 감
// preventdefault 이벤트가 동작하는 것을 발생

function askForName() {
    form.classList.add(SHOWING_CN);
    form.addEventListener("submit", handleSubmit)
}
// 단순히 form.classList.add(SHOWING_CN); 에서 끝나면 새로고침 한 것처럼 보임
// 제출하면 다른곳으로 가고 새로고침이 됨

function paintGreeting(text) {
    form.classList.remove(SHOWING_CN);
    greeting.classList.add(SHOWING_CN);
    greeting.innerText = `Hello ${text}`
}

function loadName() {
    const currentUser = localStorage.getItem(USER_LS);
    if(currentUser === null){
        askForName();
    } else {
        paintGreeting(currentUser);
    }
}

function init() {
    loadName();
      }

init();