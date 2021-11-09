import { Employee } from "./Employee";

export class RecurringUnavailability
{
    recurringUnavailabilityID:number;
    employee:Employee;
    weekday:number;
    startTime:number;
    endTime:number;

    constructor(recurringUnavailabilityID:number, employee:Employee, weekday:number, startTime:number, endTime:number)
    {
        this.recurringUnavailabilityID = recurringUnavailabilityID;
        this.employee = employee;
        this.weekday = weekday;
        this.startTime = startTime;
        this.endTime = endTime;
    }
}