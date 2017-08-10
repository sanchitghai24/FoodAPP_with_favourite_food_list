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
		controller: 'favouriteController'
	})
})

// FoodieApp.controller('favouriteController',function($scope){
// 	$scope.save = function(){
//
//   }
//
//
// $scope.IngredientsArray1 = [];
// var data = '{"inputs":[{"data":{"image":{"url":"' +'http://noblepig.com/images/2016/06/Avocado-and-Three-Bean-Salad-is-perfect-for-a-summertime-barbecue-side-dish.JPG'+ '"}}}]}'
// $http({
// 'method' : 'POST',
// 'url': 'https://api.clarifai.com/v2/models/bd367be194cf45149e75f01d59f77ba7/outputs',
// 'headers': {
// 'Authorization': 'Key b8c3e76005914949bf0a12c25e052abe',
// 'Content-Type': 'application/json'
// },
// 'data': data
// }).then(function (response){
// var ingredients = response.data.outputs[0].data.concepts;
// var list = '';
// for (var i =0;i<ingredients.length-10;i++)
// {
// $scope.IngredientsArray1.push(ingredients[i].name);
// // console.log(ingredients[i].name)
// }
//
// },function (xhr){
// console.log(xhr)
// })
//
// $scope.IngredientsArray2 = [];
// var data = '{"inputs":[{"data":{"image":{"url":"' +'https://images-gmi-pmc.edge-generalmills.com/0922e9d3-67d2-48e1-b410-e8ffea930695.jpg'+ '"}}}]}'
// $http({
// 'method' : 'POST',
// 'url': 'https://api.clarifai.com/v2/models/bd367be194cf45149e75f01d59f77ba7/outputs',
// 'headers': {
// 'Authorization': 'Key b8c3e76005914949bf0a12c25e052abe',
// 'Content-Type': 'application/json'
// },
// 'data': data
// }).then(function (response){
// var ingredients = response.data.outputs[0].data.concepts;
// for (var i =0;i<ingredients.length-10;i++)
// {
// $scope.IngredientsArray2.push(ingredients[i].name);
// // console.log(ingredients[i].name)
// }
// },function (xhr){
// console.log(xhr)
// })
//
// $scope.IngredientsArray3 = [];
// var data = '{"inputs":[{"data":{"image":{"url":"' +'http://23209-presscdn.pagely.netdna-cdn.com/wp-content/uploads/2015/01/IMG_5646edit.jpg'+ '"}}}]}'
// $http({
// 'method' : 'POST',
// 'url': 'https://api.clarifai.com/v2/models/bd367be194cf45149e75f01d59f77ba7/outputs',
// 'headers': {
// 'Authorization': 'Key b8c3e76005914949bf0a12c25e052abe',
// 'Content-Type': 'application/json'
// },
// 'data': data
// }).then(function (response){
// var ingredients = response.data.outputs[0].data.concepts;
// var list = '';
// for (var i =0;i<ingredients.length-10;i++)
// {
// $scope.IngredientsArray3.push(ingredients[i].name);
// // console.log(ingredients[i].name)
// }
// },function (xhr){
// console.log(xhr)
// })
//
// $scope.IngredientsArray4 = [];
// var data = '{"inputs":[{"data":{"image":{"url":"' +'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3bbmA6qiMi_h3UbW3zWpkanMGFDPWoLp7tZSZgzLNwz5uYgRPwg'+ '"}}}]}'
// $http({
// 'method' : 'POST',
// 'url': 'https://api.clarifai.com/v2/models/bd367be194cf45149e75f01d59f77ba7/outputs',
// 'headers': {
// 'Authorization': 'Key b8c3e76005914949bf0a12c25e052abe',
// 'Content-Type': 'application/json'
// },
// 'data': data
// }).then(function (response){
// var ingredients = response.data.outputs[0].data.concepts;
// var list = '';
// for (var i =0;i<ingredients.length-10;i++)
// {
// $scope.IngredientsArray4.push(ingredients[i].name);
// // console.log(ingredients[i].name)
// }
// },function (xhr){
// console.log(xhr)
// })
//
// $scope.IngredientsArray5 = [];
// var data = '{"inputs":[{"data":{"image":{"url":"' +'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTE8M6uc_COyOGbFAdj9So-aajQsTQuoXqa7vwuwTbiQOoBfcvC'+ '"}}}]}'
// $http({
// 'method' : 'POST',
// 'url': 'https://api.clarifai.com/v2/models/bd367be194cf45149e75f01d59f77ba7/outputs',
// 'headers': {
// 'Authorization': 'Key b8c3e76005914949bf0a12c25e052abe',
// 'Content-Type': 'application/json'
// },
// 'data': data
// }).then(function (response){
// var ingredients = response.data.outputs[0].data.concepts;
// var list = '';
// for (var i =0;i<ingredients.length-10;i++)
// {
// $scope.IngredientsArray5.push(ingredients[i].name);
// // console.log(ingredients[i].name)
// }
// },function (xhr){
// console.log(xhr)
// })
//
// 	RecommendedDish: [{
// 		name: 'Corn Pizza',
// 		image: 'http://noblepig.com/images/2016/06/Avocado-and-Three-Bean-Salad-is-perfect-for-a-summertime-barbecue-side-dish.JPG',
// 		restaurantName: 'Farzi Cafe'
// 	},{
// 		name: 'Chicken and Cheese',
// 		image: 'https://images-gmi-pmc.edge-generalmills.com/0922e9d3-67d2-48e1-b410-e8ffea930695.jpg',
// 		restaurantName: 'Diggin'
// 	},{
// 		name: 'Cream Mushroom',
// 		image: 'http://23209-presscdn.pagely.netdna-cdn.com/wp-content/uploads/2015/01/IMG_5646edit.jpg',
// 		restaurantName: 'Bukhara-ITC Maurya'
// 	},{
// 		name: 'French Fries with Cream',
// 		image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3bbmA6qiMi_h3UbW3zWpkanMGFDPWoLp7tZSZgzLNwz5uYgRPwg',
// 		restaurantName: 'Big Chill'
// 	},{
// 		name: 'Ferrero Rocher Shake',
// 		image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTE8M6uc_COyOGbFAdj9So-aajQsTQuoXqa7vwuwTbiQOoBfcvC',
// 		restaurantName: 'Big Chill'
// 	}]
//
// 	$scope.new = function(){
//
// 			if($('input:checked').length>=5)
// 			{
// 				var Check1 = $('#ig0').prop("checked");
// 				var Check2 = $('#ig1').prop("checked");
// 				var Check3 = $('#ig2').prop("checked");
// 				var Check4 = $('#ig3').prop("checked");
// 				var Check5 = $('#ig4').prop("checked");
// 				var Check6 = $('#ig5').prop("checked");
// 				var Check7 = $('#ig6').prop("checked");
// 				var Check8 = $('#ig7').prop("checked");
// 				var Check9 = $('#ig8').prop("checked");
// 				var Check10 = $('#ig9').prop("checked");
//
// 				var TickedBoxes =[Check1,Check2,Check3,Check4,Check5,Check6,Check7,Check8,Check9,Check10]
//
// 				var selectIngredientsArray1 =[];
// 				var selectIngredientsArray2 =[];
// 				for(var i=0 ;i<TickedBoxes.length;i++)
// 				{
// 					if(TickedBoxes[i] === true){
// 						var id = '#ig'+i
// 						selectIngredientsArray1.push($(id).val())
// 					}
// 					else{
// 						var id = '#ig'+i
// 						selectIngredientsArray2.push($(id).val())
// 					}
// 				}
// 				console.log('Selected ingredients '+selectIngredientsArray1)
// 				console.log('left out ingredients '+selectIngredientsArray2)
// 				var count1=0;
// 				var count2=0;
// 				var count3=0;
// 				var count4=0;
// 				var count5=0;
// 				for(var i=0;i<selectIngredientsArray1.length;i++)
// 				{
// 					for(var j=0;j<$scope.IngredientsArray1.length;j++)
// 					{
// 						console.log('searching for '+selectIngredientsArray1[i])
// 						if(selectIngredientsArray1[i] == $scope.IngredientsArray1[j]){
// 							console.log(selectIngredientsArray1[i]+' found on '+ j +' index of $scope.IngredientsArray1')
// 							count1++;
// 						}
// 					}
// 				// }
// 				// // console.log(count1+' matched in $scope.IngredientsArray1')
// 				// for(var i=0;i<selectIngredientsArray1.length;i++)
// 				// {
// 					for(var j=0;j<$scope.IngredientsArray2.length;j++)
// 					{
// 						// console.log('searching for '+selectIngredientsArray1[i])
// 						if(selectIngredientsArray1[i] == $scope.IngredientsArray2[j]){
// 							// console.log(selectIngredientsArray1[i]+' found on '+ j +' index of $scope.IngredientsArray2')
// 							count2++;
// 						}
// 					}
// 				// }
// 				// // console.log(count2 +' matched in $scope.IngredientsArray2')
// 				// for(var i=0;i<selectIngredientsArray1.length;i++)
// 				// {
// 					for(var j=0;j<$scope.IngredientsArray3.length;j++)
// 					{
// 						// console.log('searching for '+selectIngredientsArray1[i])
// 						if(selectIngredientsArray1[i] == $scope.IngredientsArray3[j]){
// 							// console.log(selectIngredientsArray1[i]+' found on '+ j +' index of $scope.IngredientsArray3')
// 							count3++;
// 						}
// 					}
// 				// }
// 				// // console.log(count3 +' matched in $scope.IngredientsArray3')
// 				// for(var i=0;i<selectIngredientsArray1.length;i++)
// 				// {
// 					for(var j=0;j<$scope.IngredientsArray4.length;j++)
// 					{
// 						// console.log('searching for '+selectIngredientsArray1[i])
// 						if(selectIngredientsArray1[i] == $scope.IngredientsArray4[j]){
// 							// console.log(selectIngredientsArray1[i]+' found on '+ j +' index of $scope.IngredientsArray3')
// 							count4++;
// 						}
// 					}
// 				// }
// 				// for(var i=0;i<selectIngredientsArray1.length;i++)
// 				// {
// 					for(var j=0;j<$scope.IngredientsArray5.length;j++)
// 					{
// 						// console.log('searching for '+selectIngredientsArray1[i])
// 						if(selectIngredientsArray1[i] == $scope.IngredientsArray5[j]){
// 							// console.log(selectIngredientsArray1[i]+' found on '+ j +' index of $scope.IngredientsArray3')
// 							count5++;
// 						}
// 					}
// 				}
//
// 				var countList = [];
// 				var max = Math.max(count1,count2,count3,count4,count5)
// 				countList.push(count1,count2,count3,count4,count5)
// 				console.log(countList)
// 				console.log('max is '+max)
//
// 				if(countList[0]!=countList[1]!=countList[2]!=countList[3]!=countList[4]){
// 				for(var s=0;s<countList.length;s++)
// 				{
// 					if(countList[s]==max)
// 					{
// 						bit = s;
// 						$scope.bgSet = RecommendedDish[bit]
// 						console.log(RecommendedDish[bit])
// 						console.log(bit+' is the used index')
// 						return 0;
// 					}
// 				}
// 			}
// 			else {
// 				for(var i=0;i<countList.length;i++)
// 					{
// 						for(var j=1;j<countList.length;j++)
// 						{
// 							if(countList[i]==max && countList[j]==max && i!=j){
// 								console.log(i+' & '+j+' match')
// 								var listName1;
// 								var listName2;
// 								var countAgain1 =0;
// 								var countAgain2 = 0;
// 								if(i=0){ listName1 = $scope.IngredientsArray5}
// 								else if(i=1){listName1 = $scope.IngredientsArray1}
// 								else if(i=2){listName1 = $scope.IngredientsArray2}
// 								else if(i=3){listName1 = $scope.IngredientsArray3}
// 								else if(i=4){listName1 = $scope.IngredientsArray4}
// 								if(j=1){listName2 = $scope.IngredientsArray2}
// 								else if(j=2){listName2 = $scope.IngredientsArray3}
// 								else if(j=3){listName2 = $scope.IngredientsArray4}
// 								else if(j=4){listName2 = $scope.IngredientsArray5}
//
// 								for(var x=0;x<selectIngredientsArray2.length;x++)
// 								{
// 									for(var y=0;y<listName1.length;y++)
// 									{
// 										if(selectIngredientsArray2[x]===listName1[y])
// 										{
// 											countAgain1++;
// 										}
// 									}
// 									for(var y=0;y<listName2.length;y++)
// 									{
// 										if(selectIngredientsArray2[x]===listName2[y])
// 										{
// 											countAgain2++;
// 										}
// 									}
// 									if(countAgain1>countAgain2){
// 										bit=j
// 									}
// 									else if(countAgain2>countAgain1){
// 										bit=i
// 									}
// 								}
// 								// $scope.bgSet = RecommendedDish[max]
// 								console.log(bit+' from inside equal check func')
// 								console.log(countAgain1);
// 								console.log(countAgain2);
// 								// $scope.bgSet= RecommendedDish[bit]
// 								// console.log(RecommendedDish[bit])
// 								// console.log($scope.bgSet)
// 								// return 0;
// 							}
// 						}
// 					}
//
// 					// return 0;
// 				}
// 			// bit = max;
// 			$scope.bgSet = RecommendedDish[bit]
// 			console.log($scope.bgSet);
//
// 			}
// 			else{
// 				alert('please select more than 5')
// 			}
// 			}
//
//
//
// })

FoodieApp.controller('foodListController',function($scope,$http){


		$scope.ingredientsList1 = [];
		var data = '{"inputs":[{"data":{"image":{"url":"' +'http://noblepig.com/images/2016/06/Avocado-and-Three-Bean-Salad-is-perfect-for-a-summertime-barbecue-side-dish.JPG'+ '"}}}]}'
		$http({
			'method' : 'POST',
			'url': 'https://api.clarifai.com/v2/models/bd367be194cf45149e75f01d59f77ba7/outputs',
			'headers': {
				'Authorization': 'Key a73684db07f94269a3378f69b0396ca7',
				'Content-Type': 'application/json'
			},
			'data': data
		}).then(function (response){
			var ingredients = response.data.outputs[0].data.concepts;
			var list = '';
			for (var i =0;i<ingredients.length-10;i++)
			{
				$scope.ingredientsList1.push(ingredients[i].name);
				// console.log(ingredients[i].name)
			}

		},function (xhr){
			console.log(xhr)
		})

		$scope.ingredientsList2 = [];
		var data = '{"inputs":[{"data":{"image":{"url":"' +'http://www.blendspice6.com/images/2.jpg'+ '"}}}]}'
		$http({
			'method' : 'POST',
			'url': 'https://api.clarifai.com/v2/models/bd367be194cf45149e75f01d59f77ba7/outputs',
			'headers': {
				'Authorization': 'Key a73684db07f94269a3378f69b0396ca7',
				'Content-Type': 'application/json'
			},
			'data': data
		}).then(function (response){
			var ingredients = response.data.outputs[0].data.concepts;
			for (var i =0;i<ingredients.length-10;i++)
			{
				$scope.ingredientsList2.push(ingredients[i].name);
				// console.log(ingredients[i].name)
			}
		},function (xhr){
			console.log(xhr)
		})

		$scope.ingredientsList3 = [];
		var data = '{"inputs":[{"data":{"image":{"url":"' +'https://img.grouponcdn.com/deal/uvzXjairBk34ASNJGeTn/DT-700x420/v1/c700x420.jpg'+ '"}}}]}'
		$http({
			'method' : 'POST',
			'url': 'https://api.clarifai.com/v2/models/bd367be194cf45149e75f01d59f77ba7/outputs',
			'headers': {
				'Authorization': 'Key a73684db07f94269a3378f69b0396ca7',
				'Content-Type': 'application/json'
			},
			'data': data
		}).then(function (response){
			var ingredients = response.data.outputs[0].data.concepts;
			var list = '';
			for (var i =0;i<ingredients.length-10;i++)
			{
				$scope.ingredientsList3.push(ingredients[i].name);
				// console.log(ingredients[i].name)
			}
		},function (xhr){
			console.log(xhr)
		})

		$scope.ingredientsList4 = [];
		var data = '{"inputs":[{"data":{"image":{"url":"' +'https://img.grouponcdn.com/deal/8DDtq5XRzVnLXEUnPHPd/p2-2048x1229/v1/c700x420.jpg'+ '"}}}]}'
		$http({
			'method' : 'POST',
			'url': 'https://api.clarifai.com/v2/models/bd367be194cf45149e75f01d59f77ba7/outputs',
			'headers': {
				'Authorization': 'Key a73684db07f94269a3378f69b0396ca7',
				'Content-Type': 'application/json'
			},
			'data': data
		}).then(function (response){
			var ingredients = response.data.outputs[0].data.concepts;
			var list = '';
			for (var i =0;i<ingredients.length-10;i++)
			{
				$scope.ingredientsList4.push(ingredients[i].name);
				// console.log(ingredients[i].name)
			}
		},function (xhr){
			console.log(xhr)
		})

		$scope.ingredientsList5 = [];
		var data = '{"inputs":[{"data":{"image":{"url":"' +'http://desotopharmacy.com/wp-content/uploads/2014/05/ice-cream.png'+ '"}}}]}'
		$http({
			'method' : 'POST',
			'url': 'https://api.clarifai.com/v2/models/bd367be194cf45149e75f01d59f77ba7/outputs',
			'headers': {
				'Authorization': 'Key a73684db07f94269a3378f69b0396ca7',
				'Content-Type': 'application/json'
			},
			'data': data
		}).then(function (response){
			var ingredients = response.data.outputs[0].data.concepts;
			var list = '';
			for (var i =0;i<ingredients.length-10;i++)
			{
				$scope.ingredientsList5.push(ingredients[i].name);

			}
		},function (xhr){
			console.log(xhr)
		})

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
			}]
		var bit;


	$scope.new = function(){

			if($('input:checked').length>=5)
			{
				var n1 = $('#ig0').prop("checked");
				var n2 = $('#ig1').prop("checked");
				var n3 = $('#ig2').prop("checked");
				var n4 = $('#ig3').prop("checked");
				var n5 = $('#ig4').prop("checked");
				var n6 = $('#ig5').prop("checked");
				var n7 = $('#ig6').prop("checked");
				var n8 = $('#ig7').prop("checked");
				var n9 = $('#ig8').prop("checked");
				var n10 = $('#ig9').prop("checked");
				var n11 = $('#ig10').prop("checked");
				var n12 = $('#ig11').prop("checked");
				var n13 = $('#ig12').prop("checked");
				var n14 = $('#ig13').prop("checked");
				var n15 = $('#ig14').prop("checked");
				var n16 = $('#ig15').prop("checked");
				var n17 = $('#ig16').prop("checked");
				var n18 = $('#ig17').prop("checked");
				var n19 = $('#ig18').prop("checked");
				var n20 = $('#ig19').prop("checked");
				var n21 = $('#ig20').prop("checked");
				var n22 = $('#ig21').prop("checked");
				var n23 = $('#ig22').prop("checked");
				var n24 = $('#ig23').prop("checked");
				var n25 = $('#ig24').prop("checked");
				var n26 = $('#ig25').prop("checked");
				var n27 = $('#ig26').prop("checked");
				var n28 = $('#ig27').prop("checked");
				var n29 = $('#ig28').prop("checked");
				var n30 = $('#ig29').prop("checked");

				var dummylist0 =[n1,n2,n3,n4,n5,n6,n7,n8,n9,n10,n11,n12,n13,n14,n15,n16,n17,n18,n19,n20,n21,n22,n23,n24,n25,n26,n27,n28,n29,n30]

				var selectingredientsList1 =[];
				var selectingredientsList2 =[];
				for(var i=0 ;i<dummylist0.length;i++)
				{
					if(dummylist0[i] === true){
						var id = '#ig'+i
						selectingredientsList1.push($(id).val())
					}
					else{
						var id = '#ig'+i
						selectingredientsList2.push($(id).val())
					}
				}
				console.log('Selected ingredients '+selectingredientsList1)
				console.log('left out ingredients '+selectingredientsList2)
				var count1=0;
				var count2=0;
				var count3=0;
				var count4=0;
				var count5=0;
				for(var i=0;i<selectingredientsList1.length;i++)
				{
					for(var j=0;j<$scope.ingredientsList1.length;j++)
					{
						console.log('searching for '+selectingredientsList1[i])
						if(selectingredientsList1[i] == $scope.ingredientsList1[j]){
							console.log(selectingredientsList1[i]+' found on '+ j +' index of $scope.ingredientsList1')
							count1++;
						}
					}

					for(var j=0;j<$scope.ingredientsList2.length;j++)
					{

						if(selectingredientsList1[i] == $scope.ingredientsList2[j]){

							count2++;
						}
					}


					for(var j=0;j<$scope.ingredientsList3.length;j++)
					{

						if(selectingredientsList1[i] == $scope.ingredientsList3[j]){

							count3++;
						}
					}

					for(var j=0;j<$scope.ingredientsList4.length;j++)
					{

						if(selectingredientsList1[i] == $scope.ingredientsList4[j]){

							count4++;
						}
					}

					for(var j=0;j<$scope.ingredientsList5.length;j++)
					{

						if(selectingredientsList1[i] == $scope.ingredientsList5[j]){

							count5++;
						}
					}
				}
				var countList = [];
				var max = Math.max(count1,count2,count3,count4,count5)
				countList.push(count1,count2,count3,count4,count5)
				console.log(countList)
				console.log('max is '+max)


			if(countList[0]!=countList[1]!=countList[2]!=countList[3]!=countList[4]){
				for(var s=0;s<countList.length;s++)
				{
					if(countList[s]==max)
					{
						bit = s;
						$scope.bgSet = RecommendedDish[bit]
						console.log(RecommendedDish[bit])
						console.log(bit+' is the used index')
						return 0;
					}
				}
			}
			else {
				equalCheck();
			}
				function equalCheck(){
					for(var i=0;i<countList.length;i++)
					{
						for(var j=1;j<countList.length;j++)
						{
							if(countList[i]==max && countList[j]==max && i!=j){
								console.log(i+' & '+j+' match')
								var listName1;
								var listName2;
								var countAgain1 =0;
								var countAgain2 = 0;
								if(i=0){ listName1 = $scope.ingredientsList5}
								else if(i=1){listName1 = $scope.ingredientsList1}
								else if(i=2){listName1 = $scope.ingredientsList2}
								else if(i=3){listName1 = $scope.ingredientsList3}
								else if(i=4){listName1 = $scope.ingredientsList4}
								if(j=1){listName2 = $scope.ingredientsList2}
								else if(j=2){listName2 = $scope.ingredientsList3}
								else if(j=3){listName2 = $scope.ingredientsList4}
								else if(j=4){listName2 = $scope.ingredientsList5}

								for(var x=0;x<selectingredientsList2.length;x++)
								{
									for(var y=0;y<listName1.length;y++)
									{
										if(selectingredientsList2[x]===listName1[y])
										{
											countAgain1++;
										}
									}
									for(var y=0;y<listName2.length;y++)
									{
										if(selectingredientsList2[x]===listName2[y])
										{
											countAgain2++;
										}
									}
									if(countAgain1>countAgain2){
										bit=j
									}
									else if(countAgain2>countAgain1){
										bit=i
									}
								}
								console.log(bit+' from inside equal check func')
								console.log(countAgain1);
								console.log(countAgain2);
							}
						}
					}


				}

			$scope.bgSet = RecommendedDish[bit]
			console.log($scope.bgSet);

			}
			else{
				alert('please select more than 5')
			}
	};



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
