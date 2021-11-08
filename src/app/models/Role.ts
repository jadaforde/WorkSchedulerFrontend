export class Role
{
    roleID:number;
    isManager:boolean;

    constructor(roleID:number, isManager:boolean)
    {
        this.roleID=roleID;
        this.isManager=isManager;
    }
}