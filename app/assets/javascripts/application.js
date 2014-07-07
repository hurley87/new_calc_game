// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree .
		// code for the timer


$(document).ready(function() {

	
		// hide everything off the start
		$('.q1').hide();
 		$('.q2').hide(); 
 		$('.q3').hide();
 		$('.q4').hide();
 		$('.q5').hide();
 		$('#stopwatch').hide().show(2000);
 		$('.submit_div').hide();
 		$('#submit').attr('disabled', 'disabled');

			// when user clicks start the timer starts and the 
			// first question is shown
		$('#start').on('click', function() {
			setInterval(setTime, 1000);
			$('.q1').fadeIn(1000);
			$('#q1').focus();
			$(this).fadeOut();
			
		});

		additionQuestion();



		$("#q1").on('input', function() {
				if ($(this).val() == "2x + 1") {
						$('.q1 .red').css({"background-color":  "#2ECC71"});
						$('.q1').hide(2000);
						$('.q2').show(1000);
						$('#q2').focus();
						$("#question_number").text("4");
				}
		});	

		$("#q2").on('input', function() {
				if ($(this).val() == "6x^2 + 8x + 3") {
						$('.q2 .red').css({"background-color":  "#2ECC71"});
						$('.q2').hide(2000);
						$('.q3').show(1000);
						$('#q3').focus();
						$("#question_number").text("3");
				}
		});

		$("#q3").on('input', function() {
				if ($(this).val() == "6") {
						$('.q3 .red').css({"background-color":  "#2ECC71"});
						$('.q3').hide(2000);
						$('.q4').show(1000);
						$('#q4').focus();
						$("#question_number").text("2");
				}
		});	

		$("#q4").on('input', function() {
				if ($(this).val() == "21x^2 + 4x") {
						$('.q4 .red').css({"background-color":  "#2ECC71"});
						$('.q4').hide(2000);
						$('.q5').show(1000);
						$('#q5').focus();
						$("#question_number").text("1");
				}
		});	

		$("#q5").on('input', function() {
				if ($(this).val() == "9x^2") {
						$('.q5 .red').css({"background-color":  "#2ECC71"});
						$('.q5').hide(2000);
						$("#question_number").text("-");
						$('#stopwatch').hide(2000);
						$('.submit_div').show(1000);
						$('#submit').removeAttr('disabled');
				}
		});	

     
		// send total time it takes to fill out form to the database
 		$('div.submit_div input').on('click', function() {
					$('#derivative_score').val(totalSeconds);
					$('#addition_score').val(totalSeconds);
 		});			
});