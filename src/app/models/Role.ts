export class Role
{
    roleID:number;
    roleName:string;
    isManager:boolean;

    constructor(roleID:number, roleName:string, isManager:boolean)
    {
        this.roleID=roleID;
        this.roleName=roleName;
        this.isManager=isManager;
    }
}