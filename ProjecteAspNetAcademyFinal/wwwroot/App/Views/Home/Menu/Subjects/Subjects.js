class Subjects
{
    Subjects = [];


    get IsLogon()
    {
        return Globals.IsLogon;
    }

    constructor($http)
    {
        this.Http = $http;
    }

    GetSubjects()
    {
        this.Http.get("api/subjects").then((response) =>
        {
            this.Subjects.length = 0;
            response.data.forEach((subject) =>
            {
                this.Subjects.push(subject);
            });
        })
    }

}

Subjects.$inject = ['$http'];

app.
    component('subjects', {
        templateUrl: './App/Views/Home/Menu/Subjects/Subjects.html',
        controller: ('subjects', Subjects),
        controllerAs: 'vm'
    });





