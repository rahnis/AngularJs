/// <reference path="angular.min.js" />

var app = angular.module("myModule1",[]);

	app.controller("myController1", function($scope){
		var employees = [

			{firstName:"Rahul", lastName:"Nishant", gender:"Male", salary: 55000},
			{firstName:"Mark", lastName:"Antony", gender:"Male", salary: 68000},
			{firstName:"Sara", lastName:"Paul", gender:"Female", salary: 75000},
			{firstName:"Todd", lastName:"Apple", gender:"Male", salary: 80000}
				
		];

		$scope.employees = employees;

		var countries = [
		{	
			name: "India",
			cities: [
				{name: "Patna"},
				{name: "Ranchi"},
				{name: "kolkata"},
				{name: "Banglore"}
			]

		},
		{
			name: "USA",
			cities: [
				{name: "LA"},
				{name: "Chicago"}
			]
		},
		{
			name: "UK",
			cities: [
				{name: "London"},
				{name: "Manchester"},
				{name: "Birmingham"}
			]
		}
		];

		$scope.countries = countries;
	});