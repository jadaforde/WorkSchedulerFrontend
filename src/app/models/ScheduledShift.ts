import { Employee } from "./Employee";
import { shiftType } from "./ShiftType";

export class ScheduledShift
{
    scheduledShiftID:number = 0;
    shiftType:shiftType;
    employee:Employee;
    date:number;

    constructor(id:number, shiftType:shiftType, employee:Employee, date:number)
    {
        this.scheduledShiftID = id;
        this.shiftType = shiftType;
        this.employee = employee;
        this.date = date;
    }

}