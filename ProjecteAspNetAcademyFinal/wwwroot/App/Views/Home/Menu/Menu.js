class Menu
{
    constructor($http)
    {
        this.Http = $http;
    }

}






Menu.$inject = ['$http'];

app.
    component('menu', {
        templateUrl: './App/Views/Home/Menu/Menu.html',
        controller: ('menu', Menu),
        controllerAs: 'vm'
    });
