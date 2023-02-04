let menubtn = document.querySelector('#menu-btn');
let navbar = document.querySelector('.navbar');

menubtn.onclick = ()=>{
    menubtn.classList.toggle('fa-xmark');
    navbar.classList.toggle('active');
}

window.onscroll = ()=>{

    if(window.scrollY > 0){
        document.querySelector('.header').classList.add('active');
    } else {
        document.querySelector('header').classList.remove('active');
    }

    menubtn.classList.remove('fa-xmark');
    navbar.classList.remove('active');
}

window.onload = ()=>{

    if(window.scrollY > 0){
        document.querySelector('.header').classList.add('active');
    } else {
        document.querySelector('header').classList.remove('active');
    }
}