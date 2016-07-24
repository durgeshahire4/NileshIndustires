var myapp = angular.module('myApp', ['ngRoute', 'ngCookies']);
myapp.run(function($location) {
 $location.url('/home');
})
myapp.config(['$routeProvider',function($routeProvider) {
 $routeProvider.when('/home', {
 	templateUrl : 'home.html'
 }).when('/product-and-services', {
 	templateUrl : 'product-and-services.html'
 }).when('/industries', {
 	templateUrl : 'industries.html'
 }).when('/contact', {
 	templateUrl : 'contact.html'
 }).otherwise({
 	redirect: '/home'
 })
}]); 
