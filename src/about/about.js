var options = {  weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false };
var prnDt =  new Date().toLocaleTimeString('en-us', options);

const dateElement = document.getElementById("date")
const redCircle = document.getElementsByClassName("circle")
const yellowCircle = document.getElementsByClassName("circle-yellow")
const red = document.getElementById("red")
const yellow = document.getElementById("yellow")
dateElement.textContent ="-"+ prnDt.slice(0,21)+"th-";

//parallax

window.addEventListener('scroll',function() {
    let value = window.scrollY;
    red.style.top = 80 + value * 0.30 + 'px';
    yellow.style.top = 470 + value * 0.65 + 'px';
})

// window.addEventListener("scroll", function() {
//     const distance = window.scrollY;
//     document.querySelector(".head").style.transform = `translateY(${distance *
//       1}px)`;
//     document.querySelector(
//       ".parallax"
//     ).style.transform = `translateY(${distance * 0.1}px)`;


//     $(document).ready(function(){
//         $(".menu-icon").on("click", function(){
//             $("nav ul").toggleClass("active");
//         })
//     });

//     $(window).on("scroll", function(){
//         if($(window).scrollTop()){
//             $('nav').addClass('nav-bg');
//         }
//         else{
//             $('nav').removeClass('nav-bg');
//         }
//     });





// const navbar = document.querySelector('.navbar');
// const burgerMenu = document.querySelector('.burger-menu');
// const popupMenu = document.querySelector('.popup-menu');

// navbar.addEventListener('mouseenter', () => {
//   navbar.classList.add('navbar-highlight');
// });

// navbar.addEventListener('mouseleave', () => {
//   navbar.classList.remove('navbar-highlight');
// });

// burgerMenu.addEventListener('click', () => {
//   popupMenu.classList.toggle('popup-menu-open');
// });

// const navbarLinks = document.querySelectorAll('.navbar-link');

// navbarLinks.forEach((link) => {
//   link.addEventListener('click', () => {
//     navbarLinks.forEach((otherLink) => {
//       otherLink.classList.remove('navbar-link-active');
//     });
//     link.classList.add('navbar-link-active');
//     popupMenu.classList.remove('popup-menu-open');
//   });
// });