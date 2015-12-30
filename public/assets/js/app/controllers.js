
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