$(document).ready(function () {

    // Check if I have jQuery installed
    console.log($);

    // Animaion
    $("#panel1").slideUp(1000).slideDown(1000);

    // Mouse hover
    $("#panel2").on('mouseover', function () {
        $("#panel2").slideUp(1000).slideDown(1000);

    });

    // change the css
    $("#panel4").css({color:'red'});

    // on click panel one will toggle
    $("#btn1").on('click', function() {
        $("#panel4").toggle(1000);
    });

});
