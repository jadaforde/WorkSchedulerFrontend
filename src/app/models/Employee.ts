export class Employee
{
    employeeID:number;
    name:string;
    startDate:number;

    constructor(employeeID:number,name:string,username:string,password:string,startDate:number)
    {
        this.employeeID = employeeID;
        this.name = name;
        this.startDate = startDate;
    }
}