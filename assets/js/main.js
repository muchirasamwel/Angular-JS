let app = angular.module('testApp', ['ngRoute']);
app.config(function($routeProvider) {
    $routeProvider
        .when("/", {
            templateUrl: "/templates/home.htm"
        })
        .when("/away", {
            templateUrl: "/templates/away.htm"
        });
});
app.controller('controllerOne', function($scope,factoryOne) {
    $scope.devName= "SAM";
    $scope.devProject= "AngularJS";
    $scope.start=0;
    $scope.search_val="";
    $scope.yearsOfExp=factoryOne.experience();
    $scope.contacts=factoryOne.getcontacts();
});
app.factory("factoryOne",function () {
    let factory = {};
    factory.experience=function () {
        return 9;
    }
    factory.getcontacts=function () {
        let contacts = [
            {name:'sam',phone:'0716247552'},
            {name:'carol',phone:'0723445678'},
            {name:'maggie',phone:'0722313450'},
            {name:'Kim',phone:'0734566789'}
        ];
        return contacts;
    }
    return factory;
});
