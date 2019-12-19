(function(){
    'use strict'

    let log = prompt("Enter login");

    if (log == "Админ") { 
       let pass = prompt("Enter pssword");
       
       if (pass == "Чёрный Властелин") {
        alert("«Добро пожаловать!»");
       }else{
            alert("Пароль неверен");
            }
    }else{
        alert("Я вас не знаю");
    }
})();