
var options = {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit",
  hour12: false,
};
var prnDt = new Date().toLocaleTimeString("en-us", options);

const dateElement = document.getElementById("date");
const redCircle = document.getElementsByClassName("circle");
const yellowCircle = document.getElementsByClassName("circle-yellow");
const red = document.getElementById("red");
const nameBig = document.getElementById("name");
const yellow = document.getElementById("yellow");
dateElement.textContent = "-" + prnDt.slice(0, 21) + "th-";

let posRed = red.offsetTop;
let posYellow = yellow.offsetTop;
let posName = nameBig.offsetTop;
console.log(posRed);
console.log(posYellow);
console.log(posName);



console.log(window.pageYOffset);


//parallax

// window.addEventListener("scroll", function () {
//   let value = window.scrollY;

//   red.style.top = posRed + value * 0.7 + "px";
//   yellow.style.top = posYellow + value * 1 + "px";
// });

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


//scroll to top, fade in when scroll is 100 px before the end of the page
// $(document).ready(function(){
// 	$(window).scroll(function () {
//         var scroll = $(window).scrollTop();
//         if ($(this).scrollTop() > $(document).height() - $(window).height() - 100) {
//         $('#back-to-top').stop().fadeTo(50,1);

// 			} else { //when scroll is <window-height - 100 disappear
//         $('#back-to-top').stop().fadeTo(50,0);
// 			}
// 		});
// 		// scroll body to 0px on click
// 		$('#back-to-top').click(function () {
// 			$('body,html').animate({
// 				scrollTop: 0
// 			}, 200);
// 			return false;
// 		});
// });

// var Scrollbar = window.Scrollbar;

// Scrollbar.init(document.querySelector('body'),options);

