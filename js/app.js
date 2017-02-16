angular.module('app', ['ui.router']).config(function($stateProvider, $urlRouterProvider) {
    
    $stateProvider
        .state('home', {
            url: '/',
            templateUrl: 'js/home/homeTmpl.html',
            controller: 'homeCtrl'
        })
        .state('settings', {
            url: '/settings',
            templateUrl: 'js/settings/settingsTmpl.html',
            controller: 'settingsCtrl'
        })
        .state('products', {
            url: '/products/:id',
            templateUrl: 'js/products/productTmpl.html',
            controller: 'productsCtrl',
            service: 'productsCtrl'
        })
        .state('product', {
            url: '/product',
            templateUrl: 'js/products/productHomeTmpl.html',
        });

    $urlRouterProvider.otherwise('/')

    // console.log('hello')
})






// missing something on the html page. nothing links.