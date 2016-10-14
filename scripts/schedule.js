$(document).ready(function(){
	
	//Accordion
	 var icons = {
		header: "ui-icon-circle-plus",
		activeHeader: "ui-icon-circle-minus"
	};
	$('.accordion').accordion({
		collapsible: true,
		active: false,
		heightStyle: "content",
		icons: icons
	});
	
	//Registration
	$("input[value='Submit']").on('click', function(){
		var firstname;
		var lastname;
		var email;
		var address;
		var city;
		var state;
		var zipcode;
		var phone;
		var isValid;
		var checkEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
		
		isValid = true;
		firstname = $('#FirstName').val();
		$('#errorFirstName').text('');

		lastname = $('#LastName').val();
		$('#errorLastName').text('');
		
		email = $('#Email').val();
		$('#errorEmail').text('');
		
		address = $('#Address').val();
		$('#errorAddress').text('');

		city = $('#City').val();
		$('#errorCity').text('');		

		state = $('#State').val();
		$('#errorState').text('');
		
		zipcode = $('#Zipcode').val();
		$('#errorZipcode').text('');

		phone = $('#Phone').val();
		$('#errorPhone').text('');
		
		if (firstname == null || firstname == "") {
			$('#errorFirstName').text('Required');
			isValid = false;
		}

		if (lastname == null || lastname == "") {
			$('#errorLastName').text('Required');
			isValid = false;
		}
		
		if (email == null || email =="") {
			$('#errorEmail').text('Required');
			isValid = false;
		} else {
			if (!checkEmail.test(email)) {
			$('#errorEmail').text('Email is not valid');
			isValid = false;
			}
		}
		
		if (address == null || address == "") {
			$('#errorAddress').text('Required');
			isValid = false;
		}

		if (city == null || city == "") {
			$('#errorCity').text('Required');
			isValid = false;
		}
		
		
		if (state == null || state == "") {
			$('#errorState').text('Required');
			isValid = false;
		}

		if (zipcode == null || zipcode == "") {
			$('#errorZipcode').text('Required');
			isValid = false;
		}
		
		if (phone == null || phone == "") {
			$('#errorPhone').text('Required');
			isValid = false;
		}		
		
		
		return isValid;
	});
	
	

	
});