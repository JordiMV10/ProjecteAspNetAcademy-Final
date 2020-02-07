class Students
{

    get Id()
    {
        return this._id;
    }

    set Id(value)
    {
        this._id = value;
    }


    get Dni()
    {
        return this._dni;
    }

    set Dni(value)
    {
        this._dni = value;
    }

    get Name()
    {
        return this._name;
    }

    set Name(value)
    {
        this._name = value;
    }

    get Email()
    {
        return this._email;
    }

    set Email(value)
    {
        this._email = value;
    }

    get ChairNumber()
    {
        return this._chairNumber;
    }

    set ChairNumber(value)
    {
        this._chairNumber = value;
    }

    get Students()
    {
        return this._students;
    }
    set Students(value)
    {
        this._students = value;
    }


    get SelectedRows()
    {
        var selectedRows = this.gridOptions.gridApi.selection.getSelectedRows();
        return selectedRows[0];
    }

    set SelectedRows(value)
    {
        this._selectedRows = value;
    }


    Students = [];

    constructor($http)
    {
        this._students = [];
        this.Http = $http;
        this.gridOptions = {
            enableColumnMenus: false,
            enableHorizontalScrollbar: 0,
            enableVerticalScrollbar: 0,
            enableRowSelection: true,
            enableRowHeaderSelection : false,
            data: this.Students,
            multiSelect : false,
            onRegisterApi: function (gridApi)
            {
                this.gridApi = gridApi;
            }
        }
    }


    get IsLogon()
    {
        return Globals.IsLogon;
    }

    SaveStudent()
    {
        var student = new Student(this.Dni, this.Name, this.Email, this.ChairNumber);

        this.Http.post("api/students", student).then((reponse) =>
        {
            if (reponse.data.isSuccess === true)  
            {
                //this.gridOptions.data.push(response.data);
                this.GetStudents();
                this.Dni = "";
                this.Name = "";
                this.Email = "";
                this.ChairNumber = null;
                console.log("POST-ing of data successfully!");
            }
        },
        function errorCallback(response)
        {
            console.log("POST-ing of data failed");
                
        } );
    }

    DelSudents()
    {
        this.Http.delete("api/students", this.SelectedRows.Id).then((response) =>
        {
            if (response.data.isSuccess === true)
            {
                this.GetStudents();
                console.log("POST-ing of data successfully!");

            }
        },
            function errorCallback(response)
            {
                console.log("POST-ing of data failed");
            }
        );
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