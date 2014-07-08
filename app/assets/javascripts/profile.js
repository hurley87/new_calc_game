function userChart(ctx) {

	var data = {
	   	labels: ["January", "February", "March", "April", "May", "June", "July", "new"],
	    datasets: [
			      {
		            label: "Addition",
		            fillColor: "rgba(220,220,220,0.7)",
		            strokeColor: "rgba(220,220,220,5)",
		            pointColor: "rgba(220,220,220,1)",
		            pointStrokeColor: "#fff",
		            pointHighlightFill: "#fff",
		            pointHighlightStroke: "rgba(220,220,220,10)",
		            data: [5, 5, 8, 1, 6, 5, 4]
		        },
		        {
		            label: "Derivatives",
		            fillColor: "rgba(151,187,205,0.7)",
		            strokeColor: "rgba(151,187,205,1)",
		            pointColor: "rgba(151,187,205,1)",
		            pointStrokeColor: "#fff",
		            pointHighlightFill: "#fff",
		            pointHighlightStroke: "rgba(151,187,205,1)",
		            data: [2, 4, 4, 9, 8, 7, 9, 10]
		        }
		    ]
		};
		
		var myLineChart = new Chart(ctx).Line(data, {
    	bezierCurve: false,
    	 pointDotStrokeWidth : 8,
    	 pointDot : true,
    	 scaleShowGridLines : true,
    	 scaleLineWidth: 5,
    	 responsive: true,
    	 scaleFontSize: 18,
	
		});

}