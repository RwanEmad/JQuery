

///<reference types="../@types/jquery"/>

var sideNavIsOpen = false;
var slideDown = false;
// console.log(typeof (isOpen));



// $("#side-nav a").on('click', function () {

//     var sectionId = $(this).attr("href");

//     var positionOfSection = $(sectionId).offset().top;

//     $("html , body").animate({ scrollTop: positionOfSection }, 500);

// })



$(".openNav").on('click', function () {

    $('#side-nav').animate({ width: "250px" }, 1000, function () {
        if (!sideNavIsOpen) {
            sideNavIsOpen = true;
        }
    })
    $("#home-content").animate({ marginLeft: '250px' }, 1000)
})

$(".clos-btn").on('click', function () {
    $('#side-nav').animate({ width: "0" }, 1000, function () {
        if (sideNavIsOpen) {
            sideNavIsOpen = false;
        }
    })
    $("#home-content").animate({ marginLeft: '0' }, 1000)
})


$('.singer').click(function () {
    $('#sliderDown div').not($(this).next()).slideUp();
    $(this).next().slideToggle()
})


window.onload = function () {

    countDownToTime("10 october 2031 9:56:00");
}

function countDownToTime(countTo) {

    let futureDate = new Date(countTo);
    futureDate = (futureDate.getTime() / 1000);

    let now = new Date();
    now = (now.getTime() / 1000);

    timeDifference = (futureDate - now);

    let days = Math.floor(timeDifference / (24 * 60 * 60));
    let hours = Math.floor((timeDifference - (days * (24 * 60 * 60))) / 3600);
    let mins = Math.floor((timeDifference - (days * (24 * 60 * 60)) - (hours * 3600)) / 60);
    let secs = Math.floor((timeDifference - (days * (24 * 60 * 60)) - (hours * 3600) - (mins * 60)))


    $(".days").html(`${days} D`);
    $(".hours").html(`${hours} h`);
    $(".minutes").html(`${mins} m`);
    $('.seconds').html(`${secs} s`)


    setInterval(function () { countDownToTime(countTo); }, 1000);
}