import { Employee } from "src/app/models/Employee";

export class LoginResponse
{
    constructor(private employee:Employee, private isManager:boolean)
    {
    }

    public getEmployee()
    {
        return this.employee;
    }

    public getIsManager()
    {
        return this.isManager;
    }
}
