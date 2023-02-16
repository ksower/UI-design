function formToggle(){
    let btn = document.querySelector('.toggle-btn');
    btn.classList.toggle('active');

    let form1 = document.querySelector('.form1');
    form1.classList.toggle('active');
    let form2 = document.querySelector('.form2');
    form2.classList.toggle('active');

    let login_form = document.querySelector('.login-wrapper');
    login_form.classList.toggle('active');
    let signup_form = document.querySelector('.signup-wrapper');
    signup_form.classList.toggle('active');
}