class SubjectsService
{
    constructor($http)
    {
        this.Http = $http;
    }


    GetAllAsync(callbackAction)
    {
        this.Http.get("api/Subjects")
            .then((response) =>
            {
                callbackAction(response.data);
            },
                function errorCallback(response)
                {
                    console.log("GET-ing of data failed");
                }
            );
        console.log("iniciando");
    }

    AddElementAsync(element, callbackAction)
    {
        this.Http.post("/api/Subjects", element)
            .then((response) =>
            {
                callbackAction(response.data);
            },
                function errorCallbach(response)
                {
                    console.log("POST-ing of data failed");
                }
            );
    }
}

SubjectsService.$inject = ['$http'];
app.service('SubjectsService', SubjectsService);

