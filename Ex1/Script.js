/// <reference path="angular.min.js" />

var myApp = angular.module("myModule" , []);


myApp.controller("myController", function($scope){

	var country = {
		name: "India",
		capital: "Delhi",
		flag: "images.jpg"
	}

	$scope.country = country;
	$scope.message = "Hello Rahul";
});