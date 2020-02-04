class Students
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

Students.$inject = ['$http'];

app.
    component('students', {
        templateUrl: './App/Views/Home/Menu/Students/Students.html',
        controller: ('students', Students),
        controllerAs: 'vm'
    });