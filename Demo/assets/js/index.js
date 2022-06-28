let input_account = document.getElementById("input-account");
let input_password = document.getElementById("input-password");
let btn_login = document.getElementById("btn-login");
btn_login.addEventListener('click', ()=>{
    if(input_account.value == "1111" && input_password.value == "1111"){
        window.location.href = "Mission.html";
    }
});