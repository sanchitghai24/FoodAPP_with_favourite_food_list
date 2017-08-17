// jQuery !!

// $('#user-email').on('input',function() {
//         var email = $('#user-email').val()
//         var message = 'Welcome Back, ' + email;
//         $('.welcome-message').text(message);
//     });


//  ANGULAR
var FoodieApp = angular.module('FoodieApp',['ngRoute']);

FoodieApp.config(function ($routeProvider) {
	$routeProvider
	.when('/',{
		templateUrl: 'pages/login.html',
		controller: 'loginController'
	})
	.when('/home',{
		templateUrl: 'pages/main.html',
		controller: 'mainController'
	})
	.when('/restaurant/:id', {                                                         // :id is route parameter
		templateUrl: 'pages/restaurant.html',
		controller: 'restaurantController'
	})
	.when('/Favourite',{
		templateUrl: 'pages/favourite.html',
		controller: 'foodListController'
	})
})

FoodieApp.controller('foodListController',function($scope,$http){

	var RecommendedDish = [{
		name: 'Corn Pizza',
		image: 'http://noblepig.com/images/2016/06/Avocado-and-Three-Bean-Salad-is-perfect-for-a-summertime-barbecue-side-dish.JPG',
		restaurantName: 'Farzi Cafe'
	},{
		name: 'Chicken and Cheese',
		image: 'https://images-gmi-pmc.edge-generalmills.com/0922e9d3-67d2-48e1-b410-e8ffea930695.jpg',
		restaurantName: 'Diggin'
	},{
		name: 'Cream Mushroom',
		image: 'http://23209-presscdn.pagely.netdna-cdn.com/wp-content/uploads/2015/01/IMG_5646edit.jpg',
		restaurantName: 'Bukhara-ITC Maurya'
	},{
		name: 'French Fries with Cream',
		image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3bbmA6qiMi_h3UbW3zWpkanMGFDPWoLp7tZSZgzLNwz5uYgRPwg',
		restaurantName: 'Big Chill'
	},{
		name: 'Ferrero Rocher Shake',
		image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTE8M6uc_COyOGbFAdj9So-aajQsTQuoXqa7vwuwTbiQOoBfcvC',
		restaurantName: 'Big Chill'
	}];


	var CheckedBoxes = [];

	var ig1;
	var ig2;
	var ig3;
	var ig4;
	var ig5;
		var ingredientsList1 = [];
			var data = '{"inputs":[{"data":{"image":{"url":"' +'http://noblepig.com/images/2016/06/Avocado-and-Three-Bean-Salad-is-perfect-for-a-summertime-barbecue-side-dish.JPG'+ '"}}}]}'
			$http({
				'method' : 'POST',
				'url': 'https://api.clarifai.com/v2/models/bd367be194cf45149e75f01d59f77ba7/outputs',
				'headers': {
					'Authorization': 'Key b8c3e76005914949bf0a12c25e052abe',
					'Content-Type': 'application/json'
				},
				'data': data
			}).then(function (response){
				var ingredients = response.data.outputs[0].data.concepts;
				var list = '';
				for (var i =0;i<ingredients.length-10;i++)
				{
					ingredientsList1.push(ingredients[i].name);
					// console.log(ingredients[i].name)
				}
			},function (xhr){
				console.log(xhr)
			})

	var ingredientsList2 = [];
		var data = '{"inputs":[{"data":{"image":{"url":"' +'https://images-gmi-pmc.edge-generalmills.com/0922e9d3-67d2-48e1-b410-e8ffea930695.jpg'+ '"}}}]}'
		$http({
			'method' : 'POST',
			'url': 'https://api.clarifai.com/v2/models/bd367be194cf45149e75f01d59f77ba7/outputs',
			'headers': {
				'Authorization': 'Key b8c3e76005914949bf0a12c25e052abe',
				'Content-Type': 'application/json'
			},
			'data': data
		}).then(function (response){
			var ingredients = response.data.outputs[0].data.concepts;
			var list = '';
			for (var i =0;i<ingredients.length-10;i++)
			{
				ingredientsList5.push(ingredients[i].name);
				// console.log(ingredients[i].name)
			}
		},function (xhr){
			console.log(xhr)
		})

			var ingredientsList3 = [];
				var data = '{"inputs":[{"data":{"image":{"url":"' +'http://23209-presscdn.pagely.netdna-cdn.com/wp-content/uploads/2015/01/IMG_5646edit.jpg'+ '"}}}]}'
				$http({
					'method' : 'POST',
					'url': 'https://api.clarifai.com/v2/models/bd367be194cf45149e75f01d59f77ba7/outputs',
					'headers': {
						'Authorization': 'Key b8c3e76005914949bf0a12c25e052abe',
						'Content-Type': 'application/json'
					},
					'data': data
				}).then(function (response){
					var ingredients = response.data.outputs[0].data.concepts;
					var list = '';
					for (var i =0;i<ingredients.length-10;i++)
					{
						ingredientsList5.push(ingredients[i].name);
						// console.log(ingredients[i].name)
					}
				},function (xhr){
					console.log(xhr)
				})
					var ingredientsList4 = [];
						var data = '{"inputs":[{"data":{"image":{"url":"' +'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3bbmA6qiMi_h3UbW3zWpkanMGFDPWoLp7tZSZgzLNwz5uYgRPwg'+ '"}}}]}'
						$http({
							'method' : 'POST',
							'url': 'https://api.clarifai.com/v2/models/bd367be194cf45149e75f01d59f77ba7/outputs',
							'headers': {
								'Authorization': 'Key b8c3e76005914949bf0a12c25e052abe',
								'Content-Type': 'application/json'
							},
							'data': data
						}).then(function (response){
							var ingredients = response.data.outputs[0].data.concepts;
							var list = '';
							for (var i =0;i<ingredients.length-10;i++)
							{
								ingredientsList4.push(ingredients[i].name);
								// console.log(ingredients[i].name)
							}
						},function (xhr){
							console.log(xhr)
						})

							var ingredientsList5 = [];
								var data = '{"inputs":[{"data":{"image":{"url":"' +'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTE8M6uc_COyOGbFAdj9So-aajQsTQuoXqa7vwuwTbiQOoBfcvC'+ '"}}}]}'
								$http({
									'method' : 'POST',
									'url': 'https://api.clarifai.com/v2/models/bd367be194cf45149e75f01d59f77ba7/outputs',
									'headers': {
										'Authorization': 'Key b8c3e76005914949bf0a12c25e052abe',
										'Content-Type': 'application/json'
									},
									'data': data
								}).then(function (response){
									var ingredients = response.data.outputs[0].data.concepts;
									var list = '';
									for (var i =0;i<ingredients.length-10;i++)
									{
										ingredientsList5.push(ingredients[i].name);
										// console.log(ingredients[i].name)
									}
								},function (xhr){
									console.log(xhr)
								})

	var OptionalIngredients=["Tomato","Onion","Meat","Fish","Pizza","Chicken","Chocolate","Cheese","Kebab","Salt","Corn","Cream","Ice Cream","Milk","Mushroom","Vegetables"];

	$scope.new=function(){
		for(var i=0 ; i<OptionalIngredients.length ; i++){
			//console.log(i);
				var ID= 'CheckBox' + i ;
				//console.log(ID);
				if(document.getElementById(ID).checked == true){
					CheckedBoxes.push(OptionalIngredients[i])
					//console.log(OptionalIngredients[i]);
			};
				}
		//console.log(CheckedBoxes);

	for (var i=0; i<CheckedBoxes.length; i++ )                                    //  comparison of arrays begin from here !!
	{
    for( var j=0; j<ingredientsList1.length; j++)
		{
			if(CheckedBoxes[i]==ingredientsList1[j])
			{
				ig1++;
				console.log(ig1);
			}
		}
		for( var j=0; j<ingredientsList2.length; j++)
		{
			if(CheckedBoxes[i]==ingredientsList2[j])
			{
				ig2++;
			}
		}
		for( var j=0; j<ingredientsList3.length; j++)
		{
			if(CheckedBoxes[i]==ingredientsList3[j])
			{
				ig3++;
			}
		}
		for( var j=0; j<ingredientsList4.length; j++)
		{
			if(CheckedBoxes[i]==ingredientsList4[j])
			{
				ig4++;
			}
		}
		for( var j=0; j<ingredientsList5.length; j++)
		{
			if(CheckedBoxes[i]==ingredientsList5[j])
			{
				ig5++;
			}
		}
	}

if( ig1>ig2 && ig1>ig3 && ig1>ig4 && ig1>ig5)                                    // if ingredientsList1 match the most with wish list...then Do the honors !! :P
{
	$scope.Name=RecommendedDish[0].name;
	$scope.RestoName=RecommendedDish[0].restaurantName;
	console.log(Name);
	console.log(RestoName);
}
else if( ig2>ig1 && ig2>ig3 && ig2>ig4 && ig2>ig5)
{
	$scope.Name=RecommendedDish[1].name;
	$scope.RestoName=RecommendedDish[1].restaurantName;
	console.log(Name);
	console.log(RestoName);
}
if( ig3>ig1 && ig3>ig2 && ig3>ig4 && ig3>ig5)
{
	$scope.Name=RecommendedDish[2].name;
	$scope.RestoName=RecommendedDish[2].restaurantName;
	console.log(Name);
	console.log(RestoName);
}
if( ig4>ig1 && ig4>ig2 && ig4>ig3 && ig4>ig5)
{
	$scope.Name=RecommendedDish[3].name;
	$scope.RestoName=RecommendedDish[3].restaurantName;
	console.log(Name);
	console.log(RestoName);
}
if( ig5>ig1 && ig5>ig2 && ig5>ig3 && ig5>ig4)
{
	$scope.Name=RecommendedDish[4].name;
	$scope.RestoName=RecommendedDish[4].restaurantName;
	console.log(Name);
	console.log(RestoName);
}
}
})

FoodieApp.controller('mainController',function($scope) {
	  $scope.restaurants = [{
						name: 'Diggin',
						address: 'Anand Lok Shopping Center, Opposite Gargi College, Anand Lok, New Delhi',
						location: 'Anand Lok',
						category: 'Casual Dining, Cafe',
						vote: '4.2',
						cuisines: 'Indian, Continental, Cafe, Salad',
						cost: '1400',
						hours: '8:30 AM to 11 PM (Mon-Sun)',
						image: 'https://b.zmtcdn.com/data/pictures/3/307113/5d814367b9d8eda481d837c25615358b_featured_v2.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A',
						id: '1'
					},{
						name: 'Bukhara - ITC Maurya',
						address: 'ITC Maurya, Chanakyapuri, New Delhi',
						location: 'ITC Maurya, Chanakyapuri',
						category: 'Fine Dining',
						vote: '4.3',
						cuisines: 'North Indian',
						cost: '6500',
						hours: '12:30 PM to 2:45 PM, 7 PM to 11:45 PM (Mon-Sun)',
						image: 'https://b.zmtcdn.com/data/pictures/2/2742/56ef28af94329208fd93b27f7d2fd504_featured_v2.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A',
            id:'2'
					},{
						name: 'Big Chill',
						address: '68-A Khan Market, New Delhi',
						location: 'Khan Market',
						category: 'Casual Dining, Cafe',
						vote: '4.5',
						cuisines: 'Italian, Continental, European, Cafe, Juices',
						cost: '1500',
						hours: '12 Noon to 11:30 PM (Mon-Sun)',
						image: 'https://b.zmtcdn.com/data/pictures/chains/4/1614/57b6f653c341fbd77e50ca23ea4c8878_featured_v2.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A',
						id: '3'
					},{
						name: 'My Bar Headquarters',
						address: 'N-49 2nd Floor, Connaught Place, New Delhi',
						location: 'Connaught Place',
						category: 'Lounge',
						vote: '3.7',
						cuisines: 'North Indian, Mughlai, Chinese',
						cost: '1000',
						hours: '11AM to 1AM (Mon-Sun)',
						image: 'https://b.zmtcdn.com/data/pictures/7/311057/6d34c0e230aced20c74a2100e5b75b96_featured_v2.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A',
            id: '4'
					},{
						name: 'Farzi Cafe',
						address: '38/39, Level 1, Block E , Inner Circle, Connaught Place',
						location: 'Connaught Place',
						category: 'Casual Dining, Bar',
						vote: '4.2',
						cuisines: 'Modern Indian',
						cost: '2200',
						hours: '12 Noon to 1 AM (Mon-Sun)',
						image: 'https://b.zmtcdn.com/data/pictures/chains/2/308022/dabd30bd0b000ea859ada9a08a0132fc.jpg',
						id: '5'
					}]
});

FoodieApp.controller('loginController',function($scope,$location) {
	  $scope.goToHome = function() {
          console.log('Do Something')
					$location.url('home')
     }
});

FoodieApp.controller('restaurantController',function($scope,$routeParams,$http) {
		var restaurants = [{
							name: 'Diggin',
							address: 'Anand Lok Shopping Center, Opposite Gargi College, Anand Lok, New Delhi',
							location: 'Anand Lok',
							category: 'Casual Dining, Cafe',
							vote: '4.2',
							cuisines: 'Indian, Continental, Cafe, Salad',
							cost: '1400',
							hours: '8:30 AM to 11 PM (Mon-Sun)',
							image: 'https://b.zmtcdn.com/data/pictures/3/307113/5d814367b9d8eda481d837c25615358b_featured_v2.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A',
							bestDish: {
												name: 'Corn Pizza',
												image: 'http://noblepig.com/images/2016/06/Avocado-and-Three-Bean-Salad-is-perfect-for-a-summertime-barbecue-side-dish.JPG'
											}

						},{
							name: 'Bukhara - ITC Maurya',
							address: 'ITC Maurya, Chanakyapuri, New Delhi',
							location: 'ITC Maurya, Chanakyapuri',
							category: 'Fine Dining',
							vote: '4.3',
							cuisines: 'North Indian',
							cost: '6500',
							hours: '12:30 PM to 2:45 PM, 7 PM to 11:45 PM (Mon-Sun)',
							image: 'https://b.zmtcdn.com/data/pictures/2/2742/56ef28af94329208fd93b27f7d2fd504_featured_v2.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A'
						},{
							name: 'Big Chill',
							address: '68-A Khan Market, New Delhi',
							location: 'Khan Market',
							category: 'Casual Dining, Cafe',
							vote: '4.5',
							cuisines: 'Italian, Continental, European, Cafe, Juices',
							cost: '1500',
							hours: '12 Noon to 11:30 PM (Mon-Sun)',
							image: 'https://b.zmtcdn.com/data/pictures/chains/4/1614/57b6f653c341fbd77e50ca23ea4c8878_featured_v2.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A'
						},{
							name: 'My Bar Headquarters',
							address: 'N-49 2nd Floor, Connaught Place, New Delhi',
							location: 'Connaught Place',
							category: 'Lounge',
							vote: '3.7',
							cuisines: 'North Indian, Mughlai, Chinese',
							cost: '1000',
							hours: '11AM to 1AM (Mon-Sun)',
							image: 'https://b.zmtcdn.com/data/pictures/7/311057/6d34c0e230aced20c74a2100e5b75b96_featured_v2.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A'
						},{
							name: 'Farzi Cafe',
							address: '38/39, Level 1, Block E , Inner Circle, Connaught Place',
							location: 'Connaught Place',
							category: 'Casual Dining, Bar',
							vote: '4.2',
							cuisines: 'Modern Indian',
							cost: '2200',
							hours: '12 Noon to 1 AM (Mon-Sun)',
							image: 'https://b.zmtcdn.com/data/pictures/chains/2/308022/dabd30bd0b000ea859ada9a08a0132fc.jpg'
						}]
			  $scope.restaurantId = $routeParams.id;
				$scope.restaurant = restaurants[$routeParams.id - 1];
				$scope.getIngredients = function(url) {
						var data = '{"inputs":[{"data":{"image":{"url":"' + url + '"}}}]}'
						$http({
							'method': 'POST',
							'url': 'https://api.clarifai.com/v2/models/bd367be194cf45149e75f01d59f77ba7/outputs',
							'headers': {
								'Authorization': 'Key d475f448b7da43998670fcdfcd95dbf3',
								'Content-Type': 'application/json'
							},
							'data': data
						}).then(function (response) {
											var ingredients = response.data.outputs[0].data.concepts;
											console.log(ingredients);
											for (var i =0;i < ingredients.length;i++) {
											$scope.ingredients.push(ingredients[i].name);
											}
										})
						}
							$scope.ingredients = [];
})
