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

    get IsLogon()
    {
        return Globals.IsLogon;
    }

    SaveSubject()
    {

    }

    DelSubject()
    {

    }

    EditSubject()
    {

    }

    ClearForm()
    {

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





