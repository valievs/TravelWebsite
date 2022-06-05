let burger = document.querySelector('#menu-bar')
let navbar = document.querySelector('.navbar')

burger.addEventListener('click', ()=>{
    burger.classList.toggle('fa-times')
    navbar.classList.toggle('active')
})