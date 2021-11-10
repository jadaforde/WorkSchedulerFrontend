import { Employee } from "src/app/models/Employee";

export class LoginResponse
{
    constructor(public employee:Employee, public isManager:boolean)
    {
    }
}
