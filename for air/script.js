// DOM 로드 대기(문서 호출 후 초기화)
window.onload = init;
function init(){
    signupMouseEvent();
}

// 회원가입 완료 버튼 mouse over event
function signupMouseEvent(){
    const btn = document.getElementById('suSubmit');
    btn.addEventListener('mouseover', () => {
        btn.value = 'Go!';
    });
    btn.addEventListener('mouseout', () => {
        btn.value = 'Complete';
    });    
}

// 회원가입 창 toggle func
function toggleSignUp(){
    let signup = document.querySelector(".signup-form");
    signup.classList.toggle("action");
}

// 로그인 화면 전환 toggle func
function toggleLogin(){
    let wrapper = document.querySelector(".wrapper");
    wrapper.classList.toggle("action");

    let airplane = document.querySelector(".airplane");
    airplane.classList.toggle("action");

    let loginForm = document.querySelector(".login-form");
    loginForm.classList.toggle("action");
    setTimeout(() => loginForm.classList.toggle("wide"), 2350);
}

// 로그인 후 페이지 전환 toggle func
function goToMainPage(){
    let airplane = document.querySelector(".airplane");
    airplane.classList.toggle("movepage");

    let transfer = document.querySelector(".transfer");
    transfer.classList.toggle("movepage");
}