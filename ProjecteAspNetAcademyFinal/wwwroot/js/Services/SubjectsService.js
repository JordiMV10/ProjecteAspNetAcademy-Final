class SubjectsService
{
    constructor($http)
    {
        this.Http = $http;
    }


    GetAllAsync(callbackAction)
    {
        this.Http.get("api/Subjects")
            .then(response =>
            {
                callbackAction(response.data);
            });

        console.log("iniciando");
    }
}

SubjectsService.$inject = ['$http'];
app.service('SubjectsService', SubjectsService);

