$(document).ready(function(){
// Initialize Firebase
	var config = {
	apiKey: "AIzaSyBgGvt1vc5tzjpc3Lu3ixrpjEBLTGE9D6c",
	authDomain: "find-a-meal.firebaseapp.com",
	databaseURL: "https://find-a-meal.firebaseio.com",
	projectId: "find-a-meal",
	storageBucket: "find-a-meal.appspot.com",
	messagingSenderId: "918558991344"
	};

	firebase.initializeApp(config);
    // Create a variable to reference the database
    var database = firebase.database();
    //create initial Values variables
    var name = "";
    var email = "";
    var password = "";
    var addressZipcode = "";
	var latitude;
	var longitude;

	// Search Recipes api function
	$("#searchForm").on("submit", function(event){
		event.preventDefault();
		var recipeSearch = $("#recipeSearch").val().trim();
	// Edamam api query url
	var queryURL = "https://api.edamam.com/search?q="+recipeSearch+"&app_id=3ad77a90&app_key=dd79bd4febb48cc39a652e6c9e29c603"
		console.log(recipeSearch);
		console.log(queryURL);
		$.ajax({
			url: queryURL,
			method: "GET"
		}).done(function(response){
			console.log(response);
			console.log(response.q);
			console.log(response.hits[0].recipe.image);
			console.log(response.hits[0].recipe.ingredientLines);
			$("#results").append("<img src="+response.hits[0].recipe.image+" alt='' />");
			$("#results").append("<p>"+response.hits[0].recipe.ingredientLines+"</p>");
		});

		return false;
	});// end Search Recipes api function

    //Sign up Form 
    //capture sign up button click
    $("#signUp").on("click", function(){
    	//prevent refreshing page
    	event.preventDefault();
    	//retrieve user input for sign up
    	name = $("#nameInput").val().trim();
    	email = $("#emailInput").val().trim();
    	password = $("#passwordInput").val().trim();
    	addressZipcode = $("#addressZipcode").val();
    	//validate email and password length
		if (email.length < 4) {
		alert('Please enter an email address.');
		return;
		}
		if (password.length < 4) {
		alert('Please enter a password.');
		return;
		}
    	//push the retrieved values to firebase
    	database.ref().set({
    		name: name,
    		email: email,
    		password: password,
    		addressZipcode: addressZipcode
    	});

    	//print the data to the console
	    console.log(name, email, password, address,);
	    console.log("Lat = "+latitude+"- Long = "+longitude);
	    //create wth emial
	    firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
			// Handle Errors here.
			var errorCode = error.code;
			var errorMessage = error.message;
			if (errorCode == 'auth/weak-password') {
			alert('The password is too weak.');
			} else {
			alert(errorMessage);
			}
			console.log(error);
		});

	});//end of sign up function

	//google maps and geo
	// if (navigator.geolocation) {
	// 	navigator.geolocation.getCurrentPosition(function(position) {
	// 	console.log("latitude: " + position.coords.latitude + "<br>longitude: " + position.coords.longitude);
	// 	});
	// };

	var map;

	function initMap() {
		map = new google.maps.Map(document.getElementById('googleMap'), {
			center: {
				lat: -34.397,
				lng: 150.644
			},
			zoom: 8
		});
	}

	//ajax call to get long and lat
	$.ajax({
		url : "http://maps.googleapis.com/maps/api/geocode/json?address=santa+cruz&components=postal_code:"+addressZipcode+"&sensor=false",
		method: "POST",
		success:function(data){
		latitude = data.results[0].geometry.location.lat;
		longitude= data.results[0].geometry.location.lng;
		console.log("Lat = "+latitude+"- Long = "+longitude);
		}
	});//end of ajaxcall

    

});//end of Javascript code
