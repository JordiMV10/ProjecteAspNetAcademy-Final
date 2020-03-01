class Students
{

    get Id()
    {
        return this._id;
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

    get IsLogon()
    {
        return Globals.IsLogon;
    }


    get Students()
    {
        return this._students;
    }
    set Students(value)
    {
        this._students = value;
    }

    get IsEdit()
    {
        return this._isEdit;
    }
    set IsEdit(value)
    {

        this._isEdit = value;
    }


    get Errors()
    {
        var errors = this.Errors;
        return errors;
    }
    set Errors(value)
    {
        this._errors = value;
    }

    set SelectedRows(value)
    {
        this._selectedRows = value;
    }

    get SelectedRows()
    {
        var selectedRows = this.gridAOptions.gridApi.selection.getSelectedRows();

        return selectedRows[0];
    }


    Students = [];
    Errors = [];
    constructor($http)
    {
        this._students = [];
        this._errors = [];
        this.Http = $http;
        this.IsEdit = false;
        this.Dni = "";
        this.Name = "";
        this.Email = "";
        this.ChairNumber = null;
        this.gridAOptions = {
            enableSorting: true,
            enableColumnMenus: false,
            enableHorizontalScrollbar: 0,
            enableVerticalScrollbar: 0,
            enableRowSelection: true,
            enableRowHeaderSelection: true,
            multiSelect: false,
            enableGridMenu: false,
            enableColumnResizing: true,
            data: this.Students,
            selectedRows : [],
            onRegisterApi: function (gridApi)
            {
                this.gridApi = gridApi;
            }
        }

        this.gridBOptions = {
            data: this.Errors,
            columnDefs:
            [
                    { name: 'Errors', field: 'errors'}
                ],

            onRegisterApi: function (gridApi)
            {
                this.gridApi = gridApi;
            }

        }

    }




    SaveStudent()
    {
        this.ClearErrors();
        if (this.IsEdit === true)
        {
            //On Update
            var student = new Student();
            student = this.SelectedRows;

            student.dni = this.Dni;
            student.name = this.Name;
            student.email = this.Email;
            student.chairNumber = this.ChairNumber;

            this.Http.put("api/students/" + student.id, student).then((response) =>
            {
                if (response.data.isSuccess === true)
                {
                    this.GetStudents();
                    this.Dni = "";
                    this.Name = "";
                    this.Email = "";
                    this.ChairNumber = null;

                    console.log("POST-ing of data successfully!");

                }

                else
                {
                    this.Errors.length = 0;

                    for (let i in response.data.validation.errors)
                    {
                        this.Errors.push({ errors: response.data.validation.errors[i] });
                    }
                }
            },
                function errorCallback(response)
                {
                    console.log("POST-ing of data failed");
                }
            );

            this.IsEdit = false;
        }

        else 
        {
            //On Add
            var student = new Student(this.Dni, this.Name, this.Email, this.ChairNumber);

            this.Http.post("api/students", student).then((reponse) =>
            {
                if (reponse.data.isSuccess === true)  
                {
                    this.GetStudents();
                    this.Dni = "";
                    this.Name = "";
                    this.Email = "";
                    this.ChairNumber = null;
                    console.log("POST-ing of data successfully!");
                    this.IsEdit = false;
                }

                else
                {
                    this.Errors.length = 0;

                    for (let i in reponse.data.validation.errors)
                    {
                        this.Errors.push({ errors: reponse.data.validation.errors[i] });
                    }
                }

            },
            function errorCallback(response)
            {
                console.log("POST-ing of data failed");

            });
            this.IsEdit = false;
        }


    }

    DelStudent()
    {
        this.ClearForm();

        if (this.SelectedRows != undefined)
        {
            var student = new Student();
            student = this.SelectedRows;

            this.Http.delete("api/students/" + student.id).then((response) =>
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
        else
        {
            alert("You have not selected row");
        }

        this.IsEdit = false;
    }


    EditStudent()
    {
        this.ClearForm();
        if (this.SelectedRows != undefined)
        {
            this.Dni = this.SelectedRows.dni;
            this.Name = this.SelectedRows.name;
            this.Email = this.SelectedRows.email;
            this.ChairNumber = this.SelectedRows.chairNumber;

        }

        else
        {
            alert("You have not selected row");
        }

        this.IsEdit = true;


    }

    GetStudents()
    {
        this.ClearErrors();
        this.Http.get("api/students").then((response) =>
        {
            this.Students.length = 0;
            response.data.forEach((student) =>
            {
                this.Students.push(student);
            });
        })

        this.IsEdit=false;
    }

    ClearForm()
    {
        this.Dni = "";
        this.Name = "";
        this.Email = "";
        this.ChairNumber = null;
        this.IsEdit = false;
        this.ClearErrors();
        
    }

    ClearErrors()
    {
        this.Errors.splice(0, this.Errors.length);
    }
    //public void ChairStringToInt()
    //{
    //    var chairVR = Student.ValidateChairNumber(ChairTextVM);
    //    if (!chairVR.IsSuccess)
    //    {
    //        ErrorsList = chairVR.Errors.Select(x => new ErrorMessage() { Message = x }).ToList();
    //        CurrentStudent = null;
    //        DniVM = "";
    //        NameVM = "";
    //        ChairTextVM = "";
    //        EmailVM = "";
    //    }

    //    else
    //    {
    //        ChairNumberVM = chairVR.ValidatedResult;
    //    }

    //}





}

Students.$inject = ['$http'];


app.
    component('students', {
        templateUrl: './App/Views/Home/Menu/Students/Students.html',
        controller: ('students', Students),
        controllerAs: 'vm'
    });

