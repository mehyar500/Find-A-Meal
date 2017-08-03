$(document).ready(function(){

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
		
		$("#searchResults").empty();
		var eventPanel = $("<div>").addClass("table-responsive");
		var panelHeading = $("<div>").addClass("panel-heading").html("Events List");
		eventPanel.append(panelHeading);
		var panelBody = $("<div>").addClass("panel-body");
		var table = $("<table>").addClass("table table-shopping");
		var thead = $("<thead>");
		var thRow = $("<tr>");
		var imageCol = $("<th>").addClass("th-description").text("Image");
		var descCol = $("<th>").text("Description");
		var ingCol = $("<th>").text("Ingredients");
		

		thRow.append(imageCol).append(descCol).append(ingCol);
		thead.append(thRow);
		table.append(thead);

		//This creates the body of the table.  From what we talked about, it sounds like you hard coded this so you don't need to make it.  You just need to have its ID
		var tableBody = $("<tbody>").addClass("searchContent");

		$("#searchResults").append(eventPanel);


		//For loop because I'm looping through an array within each key, but you can use a for-in loop because you're just going from key to key
		for (var i = 0; i < response.hits.length; i++) {

		//Creates the row
		var tbRow = $("<tr>");
		var mealImg =  response.hits[i].recipe.image;
		var	mealLabel =  response.hits[i].recipe.label;
		var mealIng =  response.hits[i].recipe.ingredients;

		//Creates each cell.  The text is a path to the specific value we need.  You can use your key from your for-in loop...such as mainObject[prop].ingridients
		var cell01 = $("<td>" + "<img src=" + mealImg + ">" + "</td>");
		var cell02 = $("<td>" + "<h3>" + mealLabel + "</h3>" + "</td>");
		

		//Appends all the cells to teh row and the row to the table body.  This process will repeat for every key in the object/item in the array
		tbRow.append(cell01).append(cell02);

		for (var j = 0; j < mealIng.length; j++) {

			var mealIngList = mealIng[j].text;

			console.log(mealIngList);

			var cell03 = $(mealIngList);
		
		tbRow.append(cell03);

		};

		$(tableBody).append(tbRow);
		};
	
		//This was for the dynamically created table to append it to the page
		table.append(tableBody);
		panelBody.append(table);
		eventPanel.append(panelBody);

	});

	$("#searchForm").on("submit", function(event){
	event.preventDefault();
	var recipeSearch = $("#recipeSearch").val().trim();
	body = {
		q: recipeSearch,
		app_id: "3ad77",
		app_key:
	}
	var queryURL = "https://api.edamam.com/search?q="+recipeSearch+"&app_id=3ad77a90&app_key=dd79bd4febb48cc39a652e6c9e29c603"
	console.log(recipeSearch);
	console.log(queryURL);
	$.ajax({
		url: queryURL,
		method: "GET"
	}).done(function(response){



	});


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