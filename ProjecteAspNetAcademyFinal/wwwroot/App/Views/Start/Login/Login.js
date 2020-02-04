class Login
{
    get Email()
    {
        return this._email;
    }

    set Email(value)
    {
        this._email = value;
    }

    get Password()
    {
        return this._password;
    }

    set Password(value)
    {
        this._password = value;
    }

    constructor($http)
    {
        this.Http = $http;
    }

    Login()
    {
        var loginDto = new LoginDto(this.Email, this.Password);

        this.Http.post("/api/login",
            loginDto

        ).then(
            (response) =>
            {
                if (response.data === true)
                    Globals.IsLogon = true;
            },
            function errorCallback(response)
            {
                console.log("POST-ing of data failed");
            }
        );

    }
}

Login.$inject = ['$http'];

app.
    component('login', {
        templateUrl: './App/Views/Start/Login/login.html',
        controller: ('Login', Login),
        controllerAs: 'vm'
    });