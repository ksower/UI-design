
function toggleLogin(){
    let wrapper = document.querySelector(".wrapper");
    wrapper.classList.toggle("action");

    let airplane = document.querySelector(".airplane");
    airplane.classList.toggle("action");

    let loginForm = document.querySelector(".login-form");
    loginForm.classList.toggle("action");
    setTimeout(() => loginForm.classList.toggle("wide"), 2350);
}