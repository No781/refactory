$(document).ready(function(){function e(){var e=$("#offer .middle img").width();$(window).width()>=i?$("#offer .left, #offer .right, #offer .offer-section, #offer .middle").css("height",e):$("#offer .left,.right,.offer-section").css("height","auto")}var i=480;e(),$(window).resize(function(){e()}),$(window).scroll(function(){$("#offer .offer-section").each(function(){var e=$(this).offset().top,i=$(window).scrollTop(),o=$(this).height(),f=$(window).height(),t=f/2-o/4;i>=e-t&&e-t+o>i?$(this).addClass("animate"):$(this).removeClass("animate")})})});