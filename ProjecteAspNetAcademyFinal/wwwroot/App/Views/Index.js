class Index
{
    Students = [];
    constructor($http)
    {
        this.Http = $http;
    }

    get IsLogon()
    {
        return Globals.IsLogon;
    }


    GetStudents()
    {
        this.Http.get("api/students").then((response) =>
        {
            this.Students.length = 0;
            response.data.forEach((student) =>
            {
                this.Students.push(student);
            });
        })
    }
}

Index.$inject = ['$http'];

app.
    component('index', {
        templateUrl: './App/Views/Index.html',
        controller: ('index', Index),
        controllerAs: 'vm'
    });