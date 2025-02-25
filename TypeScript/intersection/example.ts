interface Employee{
    name: string;
    id: string;
}

interface Admin{
    isAdmin:boolean;
    accessLevel: number;
}

type AdminEmployee=Admin & Employee;

let adminEmployee: AdminEmployee={
    id:'123',
    name:'mano',
    isAdmin:true,
    accessLevel:2
}