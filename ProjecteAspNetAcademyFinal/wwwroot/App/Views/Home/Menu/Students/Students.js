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
    constructor(StudentsService)
    {
        this.StudentsService = StudentsService;

        this._students = [];
        this._errors = [];
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





    ClearErrors()
    {
        this.Errors.splice(0, this.Errors.length);
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

    GetStudentsKeepingErrors()
    {
        this.StudentsService.GetAllAsync((data) =>
        {
            this.LoadStudents(data);
        });
        console.log("end")
        this.IsEdit = false;

    }


    GetStudents()
    {
        this.ClearForm();
        this.StudentsService.GetAllAsync((data) =>
        {
            this.LoadStudents(data);
        });
        console.log("end")
        this.IsEdit=false;

    }


    LoadStudents(students)
    {
        this.Students.length = 0;
        for (let i = 0; i < students.length; i++)
        {
            this.Students.push(students[i]);
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

            this.StudentsService.UpdateElementAsync(student, (data) =>
            {
                if (data)
                {
                    if (data.isSuccess)
                    {
                        this.GetStudents();
                        console.log("POST-ing of data successfully!");
                        this.Dni = "";
                        this.Name = "";
                        this.Email = "";
                        this.ChairNumber = null;

                        this.IsEdit = false;
                    }

                    else
                    {
                        this.Errors.length = 0;

                        for (let i in data.validation.errors)
                        {
                            this.Errors.push({ errors: data.validation.errors[i] });
                        }

                        this.GetStudentsKeepingErrors();
                        this.Dni = "";
                        this.Name = "";
                        this.Email = "";
                        this.ChairNumber = null;

                        console.log("POST-ing of data failed");
                    }

                }
            });


            this.IsEdit = false;
            console.log("end");

        }

        else 
        {
            //On Add
            var student = new Student(this.Dni, this.Name, this.Email, this.ChairNumber);
            this.StudentsService.AddElementAsync(student, (data) =>
            {
                if (data)
                {
                    if (data.isSuccess)
                    {
                        this.GetStudents();
                        console.log("POST-ing of data successfully!");
                        this.Dni = "";
                        this.Name = "";
                        this.Email = "";
                        this.ChairNumber = null;

                        this.IsEdit = false;
                    }

                    else
                    {
                        this.Errors.length = 0;

                        for (let i in data.validation.errors)
                        {
                            this.Errors.push({ errors: data.validation.errors[i] });
                        }

                        console.log("POST-ing of data failed");
                    }

                }

            });

            this.IsEdit = false;
            console.log("end");


        }

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


    DelStudent()
    {
        this.ClearForm();

        if (this.SelectedRows != undefined)
        {
            var student = new Student();
            student = this.SelectedRows;

            this.StudentsService.DeleteElementAsync(student, (data) =>
            {
                if (data)
                {
                    if (data.isSuccess)
                    {
                        this.GetStudents();
                        console.log("POST-ing of data successfully!");
                        this.Dni = "";
                        this.Name = "";
                        this.Email = "";
                        this.ChairNumber = null;

                        this.IsEdit = false;
                    }

                    else
                    {
                        this.Errors.length = 0;

                        for (let i in data.validation.errors)
                        {
                            this.Errors.push({ errors: data.validation.errors[i] });
                        }

                        this.GetStudents();
                        this.Dni = "";
                        this.Name = "";
                        this.Email = "";
                        this.ChairNumber = null;
                        console.log("POST-ing of data failed");
                    }

                }
            });


            this.IsEdit = false;
            console.log("end");


        }
        else
        {
            alert("You have not selected row");
        }

        this.IsEdit = false;

    }







}

Students.$inject = ['StudentsService'];

app.
    component('students', {
        templateUrl: './App/Views/Home/Menu/Students/Students.html',
        controller: ('students', Students),
        controllerAs: 'vm'
    });

