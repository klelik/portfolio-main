var options = {  weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false };
var prnDt =  new Date().toLocaleTimeString('en-us', options);

const dateElement = document.getElementsById("date")
dateElement.textContent = "test";



    $(document).ready(function(){
        $(".menu-icon").on("click", function(){
            $("nav ul").toggleClass("active");
        })
    });

    $(window).on("scroll", function(){
        if($(window).scrollTop()){
            $('nav').addClass('nav-bg');
        }
        else{
            $('nav').removeClass('nav-bg');
        }
    });