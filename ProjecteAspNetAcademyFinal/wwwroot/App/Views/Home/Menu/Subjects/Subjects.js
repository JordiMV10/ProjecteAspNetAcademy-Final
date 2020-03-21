class Subjects
{

    get Id()
    {
        return this._id;
    }

    get Name()
    {
        return this._name;
    }

    set Name(value)
    {
        this._name = value;
    }


    get Teacher()
    {
        return this._teacher;
    }

    set Teacher(value)
    {
        this._teacher = value;
    }


    get IsEdit()
    {
        return this._isEdit;
    }
    set IsEdit(value)
    {

        this._isEdit = value;
    }

    



    constructor(SubjectsService)
    {
        this.SubjectsService = SubjectsService;

        this._subjects = [];
        this._errors = [];
        this.IsEdit = false;
        this.Name = "";
        this.Teacher = "";
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
            data: this.Subjects,
            selectedRows: [],
            onRegisterApi: function (gridApi)
            {
                this.gridApi = gridApi;
            }
        }

        this.gridBOptions = {
            data: this.Errors,
            columnDefs:
                [
                    { name: 'Errors', field: 'errors' }
                ],

            onRegisterApi: function (gridApi)
            {
                this.gridApi = gridApi;
            }

        }

    }


    

    Subjects = [];
    Errors = [];

    get IsLogon()
    {
        return Globals.IsLogon;
    }

    SaveSubject()
    {
        this.ClearErrors();
        if (this.IsEdit === true)
        {
            //On Update
            var subject = new Subject();
            subject = this.SelectedRows;

            subject.name = this.Name;
            subject.teacher = this.Teacher;

            this.Http.put("api/subject/" + subject.id, subject).then((response) =>
            {
                if (response.data.isSuccess === true)
                {
                    this.GetSubjects();
                    this.Name = "";
                    this.Teacher = "";

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
            var subject = new Subject(this.Name, this.Teacher);
            this.SubjectsService.AddElementAsync(subject, (data) =>
            {
                if (data)
                {
                    if (data.isSuccess)
                    {
                        this.GetSubjects();
                        console.log("POST-ing of data successfully!");
                        this.Name = "";
                        this.Teacher = "";

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


    Eugeni()
    {
        SaveSubject(row)
        {
            if (!row.id)
            {
                var newSubject = new Subject(stName.value, stTeacher.value);
                // or 
                //var newSubject = new Subject(this.Name, this.Email, this.Dni, parseInt(this.ChairNumber));

                this.SubjectService.AddElementAsync(newSubject, (data) =>
                {
                    if (data)
                    {
                        if (data.isSuccess)
                        {
                            this.RequestSubjects(); //this.gridOptions.data.push(data);
                            console.log("POST-ing of data successfully!");
                        }
                        else
                        {
                            this.PrintErrors(data.validation.errors);
                            console.log("POST-ing of data is failed!");
                        }
                    }
                });
            }
            else
            {
                row.name = this.Name;
                row.teacher = this.Teacher;

                this.SubjectService.UpdateElementAsync(row, (data) =>
                {
                    if (data)
                    {
                        if (data.isSuccess)
                        {
                            this.RequestSubjects();
                            console.log("PUT-ing of data successfully!");
                        }
                        else
                        {
                            this.PrintErrors(data.validation.errors);
                            console.log("PUT-ing of data is failed!");
                        }
                    }
                });
            }
            this.ClearSubject();
        }
    }





    DelSubject()
    {
        this.ClearForm();

        if (this.SelectedRows != undefined)
        {
            var subject = new Subject();
            subject = this.SelectedRows;

            this.Http.delete("api/subjects/" + subject.id).then((response) =>
            {
                if (response.data.isSuccess === true)
                {
                    this.GetSubjects();
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

    EditSubject()
    {
        this.ClearForm();
        if (this.SelectedRows != undefined)
        {
            this.Name = this.SelectedRows.name;
            this.Teacher = this.SelectedRows.teacher;

        }

        else
        {
            alert("You have not selected row");
        }

        this.IsEdit = true;

    }

    ClearForm()
    {
        this.Name = "";
        this.Teacher = "";
        this.ClearErrors();
    }


    ClearErrors()
    {
        this.Errors.splice(0, this.Errors.length);
    }


    GetSubjects()
    {
        this.SubjectsService.GetAllAsync((data) =>
        {
            this.LoadSubjects(data);
        });
        console.log ("end")
    }


    LoadSubjects(subjects)
    {
        this.Subjects.length = 0;
        for (let i = 0; i < subjects.length; i++)
        {
            this.Subjects.push(subjects[i]);
        }
    }
}


Subjects.$inject = ['SubjectsService'];

app.
    component('subjects', {
        templateUrl: './App/Views/Home/Menu/Subjects/Subjects.html',
        controller: ('subjects', Subjects),
        controllerAs: 'vm'
    });





