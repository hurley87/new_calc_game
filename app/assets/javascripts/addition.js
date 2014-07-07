	function additionQuestion() {

		$('#add-q1').hide();

		$('#start').on('click', function() {
					$('#add-q1').fadeIn(500);
		});

		var rand = Math.floor((Math.random() * 100) + 1);
			var rand2 = Math.floor((Math.random() * 100) + 1);
			var result= rand + rand2;
			$('#num1').text(rand);
			$('#num2').text(rand2);

		$('#add-ans').on('input', function() {
				if($(this).val() == (rand + rand2).toString()) {
						$('.submit_div').show(1000);
				}
		});

	}	

	
