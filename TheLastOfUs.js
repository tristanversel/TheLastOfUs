let body = document.querySelector('body');
let nav = document.querySelector('nav');
let btnmenu = document.querySelector('#btnmenu');
let hero = document.querySelector('#hero');
let bloc_item_imgs = document.querySelectorAll('.bloc_item img');
let item_btns = document.querySelectorAll('.itembtn');
let trigger = document.querySelector('#firefly');

trigger.addEventListener('click', function(){
    trigger.classList.toggle('fyreflypulse');
    body.classList.toggle('bd');
    nav.classList.toggle('nav_change');
    btnmenu.classList.toggle('btmenu');
    hero.classList.toggle('background_change');

    bloc_item_imgs.forEach((item) => {
        item.classList.toggle('blitem');
    });
    item_btns.forEach((item) => {
        item.classList.toggle('itbtn');
    });
});
