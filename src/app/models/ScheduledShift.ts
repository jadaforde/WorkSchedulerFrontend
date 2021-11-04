export class ScheduledShift
{
    id:number = 0;
    shiftType:object = {};
    employee:object = {};
    date:number;

    constructor(id:number, shiftType:object, employee:object, date:number)
    {
        this.id = id;
        this.shiftType = shiftType;
        this.employee = employee;
        this.date = date;
    }
}