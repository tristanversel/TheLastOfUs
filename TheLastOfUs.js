let body = document.querySelector('body');
let nav = document.querySelector('nav');
let btnmenu = document.querySelector('#btnmenu');
let hero = document.querySelector('#hero');
let bloc_item_imgs = document.querySelectorAll('.bloc_item img');
let item_btns = document.querySelectorAll('.itembtn');
let trigger = document.querySelector('#firefly');
let menu_ham = document.getElementById('menu_ham');
let menu = document.getElementById('menu');
let ul = document.getElementById('ul');

console.log(menu.id);

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

menu_ham.addEventListener('click', function(){
    document.getElementById('menu').classList.toggle("menu-active");
    document.getElementById('ul').classList.toggle("ul-active");
    document.getElementById('bar').classList.toggle("bar-active");
    menu_ham.classList.toggle("menu_ham_active");
});
