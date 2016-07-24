var myapp = angular.module('myApp', ['ngRoute', 'ngCookies']);
myapp.config(['$routeProvider',function($routeProvider) {
 $routeProvider.when('/product-and-services', {
 	templateUrl : 'product-and-services.html'
 }).when('/contact', {
 	templateUrl : 'contact.html'
 // }).when('/account/showexpense/:account_id', {
 // 	templateUrl : 'ShowExpense/ShowExpense.html',
 // 	controller: 'ShowExpenseController'
 // // }).when('/account/:account_id/balancesheet', {
 // 	templateUrl : 'BalanceSheet/BalanceSheet.html',
 // 	controller: 'BalanceSheetController'
 // }).when('/logout', {
 // 	template: '',
 // 	controller: 'LogoutController'
 })
}]); 
