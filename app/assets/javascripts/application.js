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
//= require Chart
//= require_tree .
// code for the timer


$(document).ready(function() {

		var ctx = $("#myChart")[0].getContext("2d");

		userChart(ctx);
		askDerivative();
		additionQuestion();
 
		// send total time it takes to fill out form to the database
 		$('div.submit_div input').on('click', function() {
					$('#derivative_score').val(totalSeconds);
					$('#addition_score').val(totalSeconds);
 		});			
});