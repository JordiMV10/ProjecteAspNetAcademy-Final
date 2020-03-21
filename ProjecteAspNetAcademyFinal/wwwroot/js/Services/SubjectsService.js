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

    UpdateElementAsync(element, callbackAction)
    {
        this.Http.put("api/Subjects/" + element.id, element)

            .then((response) =>
            {
                callbackAction(response.data);
            },
                function errorCallbach(response)
                {
                    console.log("PUT-ing of data failed");
                }
            );
    }

    DeleteElementAsync(element, callbackAction)
    {
        this.Http.delete("api/Subjects/" + element.id, element)

            .then((response) =>
            {
                callbackAction(response.data);
            },
                function errorCallbach(response)
                {
                    console.log("DELETE-ing of data failed");
                }
            );
    }

}

SubjectsService.$inject = ['$http'];
app.service('SubjectsService', SubjectsService);

