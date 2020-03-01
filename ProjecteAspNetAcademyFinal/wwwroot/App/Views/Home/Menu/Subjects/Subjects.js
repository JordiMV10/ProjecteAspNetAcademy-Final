class Subjects
{
    constructor(SubjectsService)
    {
        this.SubjectsService = SubjectsService;
    }
    Subjects = [];
    get IsLogon()
    {
        return Globals.IsLogon;
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





