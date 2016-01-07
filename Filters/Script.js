/// <reference path ="C:\Users\RAHUL\Desktop\AngularJS\Script\angular.js" />

var app = angular
			.module("myModule",[])
			.controller("myController", function($scope){

				var employees = [
					{firstName:"Rahul", lastName:"Nishant", dateOfBirth: new Date("March 13, 1994"), gender:"Male", salary: 55000.789},
					{firstName:"Mark", lastName:"Antony", dateOfBirth: new Date("August 24, 1980"), gender:"Male", salary: 68000.843},
					{firstName:"Sara", lastName:"Paul", dateOfBirth: new Date("January 03, 1989"), gender:"Female", salary: 75000.852},
					{firstName:"Todd", lastName:"Apple", dateOfBirth: new Date("December 05, 1982"), gender:"Male", salary: 80000.753}
				];

				$scope.employees = employees;

				$scope.rowLimit = 2;
			});