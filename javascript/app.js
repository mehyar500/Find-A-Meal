  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyDyyoc1TxBDX6_l2r3qDH1lw2cmV2brCk8",
    authDomain: "find-a-meal-4354f.firebaseapp.com",
    databaseURL: "https://find-a-meal-4354f.firebaseio.com",
    projectId: "find-a-meal-4354f",
    storageBucket: "",
    messagingSenderId: "44671088866"
  };
  firebase.initializeApp(config);



$(document).ready(function(){
$.ajaxSetup({ cache: true });
  $.getScript('//connect.facebook.net/en_US/sdk.js', function(){
    FB.init({
      appId: '{1113630745403553}',
      version: 'v2.7' // or v2.1, v2.2, v2.3, ...
    });     
    $('#loginbutton,#feedbutton').removeAttr('disabled');
    FB.getLoginStatus(updateStatusCallback);

    console.log(updateStatusCallback)
  });

// Search Recipes
$("#searchForm").on("submit", function(event) {
	event.preventDefault();
	var recipeSearch = $("#recipeSearch").val().trim();
	var queryURL = "https://api.edamam.com/search?q="+recipeSearch+"&app_id=3ad77a90&app_key=dd79bd4febb48cc39a652e6c9e29c603"
	console.log(recipeSearch);
	console.log(queryURL);
	$.ajax({
		url: queryURL,
		method: "GET"
	}).done(function(response){

		$("#results").empty();

		
		for (var i = 0; i < response.hits.length; i++) {

	


		var mealImg =  response.hits[i].recipe.image;
		var	mealLabel =  response.hits[i].recipe.label;
		var mealIngred =  response.hits[i].recipe.ingredients;



		var HeaderContainer = $("<div>").addClass("title");		
		var headerTitle = $("<h2>").attr("id", "morphingCards")
		var recipeContainer = $("<div>").addClass("container");
		var newRow = $("<div>").addClass("row");
		var recipeRow = $("<div>").addClass("col-md-4");
		var recipeCard = $("<div>").addClass("card card-profile card-rotate");
		var rotatingCard = $("<div>").addClass("rotating-card-container");
		var cardImageContainer = $("<div>").addClass("card-image").attr("id", "card-image");
		var cardFront = $("<div>").addClass("front");

		HeaderContainer.append(headerTitle);
		headerTitle.append(recipeContainer);
		recipeContainer.append(recipeRow);
		recipeRow.append(recipeCard);
		recipeCard.append(rotatingCard);
		rotatingCard.append(cardImageContainer);
		cardImageContainer.append(cardFront);


		var cardImage = $("<img src=" + mealImg + ">").addClass("img");

		cardFront.append(cardImage);




			var cardBack = $("<div>").addClass("back back-background");
		var backContent = $("<div>").addClass("card-content");
		var backTitle = $("<h5>").addClass("card-title").html(mealLabel);

			for (var j = 0; j < response.hits[i].recipe.ingredients.length; j++) {
			
			var mealIng = response.hits[i].recipe.ingredients[j].text;

			console.log(mealIng)

		var backDescription = $("<p>").addClass("card-discription").html(mealIng);
		var buttonContainer = $("<div>").addClass("footer text-center");
		var buttonIconTwitter = $("<i>").addClass("fa fa-twitter");
		var buttonIconFB = $("<i>").addClass("fa fa-facebook");
		var buttonIconPin = $("<i>").addClass("fa fa-pinterest");
		

		cardImageContainer.append(cardBack);
		cardBack.append(backContent);
		backContent.append(backTitle);
		backTitle.append(backDescription);
		backContent.append(backDescription);



		recipeCard.append(backContent);
		backContent.append(backTitle);
		backContent.append(backDescription);
		};

		backContent.append(buttonIconTwitter);
		backContent.append(buttonIconFB);
		backContent.append(buttonIconPin);


		$("#results").append(recipeContainer);

	};

		$("#results").append(recipeContainer);

		// $("#results").empty();
		// var eventPanel = $("<div>").addClass("cards");
		// var panelHeading = $("<h1>").addClass("title").html("Possable Recipes");
		// eventPanel.append(panelHeading);
		// var panelBody = $("<div>").addClass("panel-body");
		// var table = $("<table>").addClass("table table-shopping");
		// var thead = $("<thead>");
		// var thRow = $("<tr>");
		// var imageCol = $("<th>").addClass("th-description").text("Image");
		// var descCol = $("<th>").text("Description");
		// var ingCol = $("<th>").text("Ingredients");
		

		// thRow.append(imageCol).append(descCol).append(ingCol);
		// thead.append(thRow);
		// table.append(thead);

		// //This creates the body of the table.  From what we talked about, it sounds like you hard coded this so you don't need to make it.  You just need to have its ID
		// var tableBody = $("<tbody>").addClass("searchContent");

		// $("#results").append(eventPanel);


		// //For loop because I'm looping through an array within each key, but you can use a for-in loop because you're just going from key to key
		// for (var i = 0; i < response.hits.length; i++) {

		// //Creates the row
		// var tbRow = $("<tr>");
		// var mealImg =  response.hits[i].recipe.image;
		// var	mealLabel =  response.hits[i].recipe.label;
		// var mealIng =  response.hits[i].recipe.ingredients;

		
		// //Creates each cell.  The text is a path to the specific value we need.  You can use your key from your for-in loop...such as mainObject[prop].ingridients
		// var cell01 = $("<img src=" + mealImg + ">");
		// var cell02 = $("<td>" + "<h3>" + mealLabel + "</h3>" + "</td>");
		

		// //Appends all the cells to teh row and the row to the table body.  This process will repeat for every key in the object/item in the array
		// tbRow.append(cell01).append(cell02);

		// for (var j = 0; j < mealIng.length; j++) {

		// 	var mealIngList = mealIng[j].text;

		// 	console.log(mealIngList);

		// 	var cell03 = mealIngList;
				
		// tbRow.append(cell03);

		// };

		// $(tableBody).append(tbRow);
		// };
	
		// //This was for the dynamically created table to append it to the page
		// table.append(tableBody);
		// panelBody.append(table);
		// eventPanel.append(panelBody);

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