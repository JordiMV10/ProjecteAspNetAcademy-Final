var app = angular.module('WebApp',
    ['ui.bootstrap',
        'ui.grid',
        'ngRoute']);

var Globals = new ClientGlobals();

app.config(['$routeProvider', function ($routeProvider)
{

    $routeProvider.when("/menu", {
        templateUrl: "./app/views/Home/Menu/menu.html",
        controller: ("menu", Menu),
        controllerAs: "vm"
    });

    $routeProvider.when("/students", {
        templateUrl: "./app/views/Home/menu/students/students.html",
        controller: ("students", Students),
        controllerAs: "vm"

    });

    $routeProvider.when("/subjects", {
        templateUrl: "./app/views/Home/menu/subjects/subjects.html",
        controller: ("subjects", Subjects),
        controllerAs: "vm"
    });


    $routeProvider.otherwise({
        redirectTo: "/menu"
    });

    //$routeProvider.html5Mode(true);

}]);


app.controller("Students", ["$scope", function ($scope)
{
    $scope.mensaje = "Texto cargado desde el controlador StudentsController";
}]);

app.controller("Subjects", ["$scope", function ($scope)
{
    $scope.mensaje = "Texto cargado desde el controlador SubjectsController";
}]);

app.controller("Menu", ["$scope", function ($scope)
{
    $scope.mensaje = "Texto cargado desde el controlador MenuController";
}]);
