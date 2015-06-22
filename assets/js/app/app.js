'use strict';

/* App Module */

$(function(){
    $(".nav.navbar-nav li a").click(function(e) {
        e.preventDefault();
        var el = $(this).attr('href');
        $('html, body').animate({
            scrollTop: $(el).offset().top
        }, 750);
    });
})

var webApp = angular.module('webApp', [
  'ngRoute',
  'webAppControllers',
  'webAppFilters',
  'webAppServices',
  'webAppDirectives'
]);

webApp.config(['$locationProvider', '$routeProvider',
    function($locationProvider, $routeProvider){
        
        //http://stackoverflow.com/questions/16677528/location-switching-between-html5-and-hashbang-mode-link-rewriting
        //$locationProvider.html5Mode({enabled: true, requireBase: false}).hashPrefix('!');
        $locationProvider.html5Mode(false).hashPrefix('!');

        $routeProvider.
        when('/', {
            //templateUrl: '/assets/partials/index.html',
            controller: 'webAppListCtrl'
        })
        /*
        .when('/feed/', {
            templateUrl: '/assets/partials/index.html',
            controller: 'webAppListCtrl'
        })
        .when('/feed/view/:feedId/:feedSlug', {
            templateUrl: '/assets/partials/feedItem.html',
            controller: 'webAppDetailCtrl'
        })
        .when('/feed/page/:currentPage', {
            templateUrl: '/assets/partials/index.html',
            controller: 'webAppListCtrl'
        })
        .when('/writing-academy', {
            templateUrl: '/assets/partials/generic-page.html',
            controller: 'webAppWritersCtrl'
        })
        .when('/about', {
            templateUrl: '/assets/partials/generic-page.html',
            controller: 'webAppAboutCtrl'
        })
		*/
        .otherwise({
            redirectTo: '/'
        });
}]);
  
webApp.run([
	'$rootScope', function ($rootScope) {

	}
]);

//angular.bootstrap(document.getElementsByTagName("html")[0], ["webApp"])  