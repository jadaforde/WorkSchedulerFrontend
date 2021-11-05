export class Role
{
    roleID:number;
    canCreateShifts:boolean;
    canAssignShifts:boolean;
    canApproveTimeOff:boolean;

    constructor(roleID:number, canCreate:boolean, canAssign:boolean, canApprove:boolean)
    {
        this.roleID=roleID;
        this.canCreateShifts=canCreate;
        this.canAssignShifts=canAssign;
        this.canApproveTimeOff=canApprove;
    }
}