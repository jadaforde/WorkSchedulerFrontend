export class shiftType
{
    shiftTypeID:number;
    name:string;
    startTime:number;
    endTime:number;

    constructor(shiftTypeID:number, name:string, startTime:number, endTime:number)
    {
        this.shiftTypeID = shiftTypeID;
        this.name = name;
        this.startTime = startTime;
        this.endTime = endTime;
    }
}