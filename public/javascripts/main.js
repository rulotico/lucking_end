function validarContenido(input) {

	form_text = $(input).val();
	if (form_text == "") {

		console.log("vacio");
		return false;

	} else {

		cantidad = input.val().length;
		if (cantidad > 1) {


			// $("#message_validation").html("bien");
			console.log("bien name");
			return true;

		} else {

			console.log("mal a");
			return false;
		}
	}
}

function validateEmail(sEmail) {
	var filter = /^[\w\-\.\+]+\@[a-zA-Z0-9\.\-]+\.[a-zA-z0-9]{2,4}$/;
	if (filter.test(sEmail)) {
		return true;

	}
	else {
		return false;

	}
}


$btn = $(".btn")

$name = $("#name");
$email = $("#email");

$btn.click(function (event) {
	event.preventDefault();


	if ($name.val() == "" && $email.val() == "") {

		console.log("vacio");

		$(".message").html("Hey!, the form is empty");

	} else if (validarContenido($name) == false) {
		$(".message").html("Maybe, your name it's too short");
	} else if (validateEmail($email.val()) == false) {
		$(".message").html("Ups that mail its incorrect");
	} else {

		var script_url = "https://script.google.com/macros/s/AKfycbyC8kO1HiVt23juAK5WDsNg1wXdJAg6mCKqJFkLzMwizvMlnALu/exec";
		// Make an AJAX call to Google Script
		function insert_value() {
			var id1 = $("#name").val();
			var name = $("#email").val();
			var url = script_url + "?callback=ctrlq&name=" + name + "&id=" + id1 + "&action=insert";
			var request = jQuery.ajax({
				crossDomain: true,
				url: url,
				method: "GET",
				dataType: "jsonp"
			});
		}
		insert_value()

		$(".form-final").html("<h1 class='animated fadeInDown pink'>Get ready for new experiences comming your way. Are you ready?</h1>");



		$.get("/registro", { name: $name.val(), email: $email.val() }, function (data) {

			console.log(data);

		});




	}



});
