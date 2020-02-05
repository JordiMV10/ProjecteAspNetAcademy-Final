class Student
{

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


    constructor(dni, name, email, chairNumber, $http)
    {
        this.Http = $http;
        this.Dni = dni;
        this.Name = name;
        this.Email = email;
        this.ChairNumber = chairNumber;
    }


    get IsLogon()
    {
        return Globals.IsLogon;
    }
}