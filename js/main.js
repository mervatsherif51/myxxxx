$(function (){
	"use strict";


  // Toggale That make Toggle between "-" and "+" to show the Write and hide the Write....(2 img mask & hair)
 $('.products .product i, .items .item i, .flowers .flower i').on('click', function (){
	$(this).toggleClass('fa-plus fa-minus').next('p').slideToggle();
		
 });



});