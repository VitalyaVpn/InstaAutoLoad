// ==UserScript==
// @name         InstaAutoLoad
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Autoload Comments
// @author       t.me/ve4no17
// @match        https://www.instagram.com/p/*
// @grant        none
// ==/UserScript==

window.onload = function() {
    let response = prompt('Загрузить комментарии в течение выбранного времени в секундах?', 10)
    if (response){
        let interval = setInterval(() => {
            let more = document.getElementsByClassName('EizgU');
            for (let item of more) {
                item.textContent.indexOf('Посмотреть ответы') +1 && item.click();
            }
            document.getElementsByClassName('dCJp8')[0].click();
        }, 400);
        setTimeout(() => {
            clearInterval(interval);
            alert('Готово!');
        }, +response*1000);
     }


};



