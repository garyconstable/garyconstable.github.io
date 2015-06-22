'use strict';

/* App Module */

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

'use strict';

/* ----------------------------------------------------------------
App Controllers
-----------------------------------------------------------------*/
 
var webAppControllers = angular.module('webAppControllers', []);
 
webAppControllers.controller('indexController', ['$scope',
    function($scope) {  
        
    	console.log('running index');
        
        var options = {
            offset: '#showHere',
            offsetSide: 'top',
            classes: {
                clone:   'banner--clone',
                stick:   'banner--stick',
                unstick: 'banner--unstick'
            }
        };
        
        var header = new Headhesive('.banner', options);
        
        
}]);

'use strict';

/* ----------------------------------------------------------------
App Directives
-----------------------------------------------------------------*/
 
var webAppDirectives = angular.module('webAppDirectives', []);
 

'use strict';

/* ----------------------------------------------------------------
App Filters
-----------------------------------------------------------------*/
 
angular.module('webAppFilters', [])
 
.filter('unsafe', function($sce) {
    return function(val) {
        return $sce.trustAsHtml(val);
    };
})

'use strict';

/* ----------------------------------------------------------------
App Service
-----------------------------------------------------------------*/
 
var webAppServices = angular.module('webAppServices', []);
