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

// Search Recipes
$("#searchForm").on("submit", function(event){
	event.preventDefault();
	var recipeSearch = $("#recipeSearch").val().trim();
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
});


});









// $(document).ready(function(){
// 			var slider = document.getElementById('sliderRegular');

// 	        noUiSlider.create(slider, {
// 	            start: 40,
// 	            connect: [true,false],
// 	            range: {
// 	                min: 0,
// 	                max: 100
// 	            }
// 	        });

// 	        var slider2 = document.getElementById('sliderDouble');

// 	        noUiSlider.create(slider2, {
// 	            start: [ 20, 60 ],
// 	            connect: true,
// 	            range: {
// 	                min:  0,
// 	                max:  100
// 	            }
// 	        });



// 			materialKit.initFormExtendedDatetimepickers();

// 		});