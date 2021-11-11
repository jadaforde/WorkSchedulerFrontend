import { Employee } from "./Employee";

export class TimeOffRequest
{
    timeOffRequestID:number;
    employee:Employee;
    startTime:number;
    endTime:number;
    approved:boolean;

    constructor(timeOffRequestID:number, employee:Employee, startTime:number, endTime:number, approved:boolean)
    {
        this.timeOffRequestID=timeOffRequestID;
        this.employee=employee;
        this.startTime=startTime;
        this.endTime=endTime;
        this.approved=approved;
    }
}