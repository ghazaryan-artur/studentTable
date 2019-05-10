export class Student { 
    constructor(a?:any,b?:string,c?:string,d?:any,e?:string,f?:string,g?:number,h?:string) {
        this.id = a;
        this.name = b;
        this.lastName = c;
        this.phone = d;
        this.faculty = e;
        this.group = f;
        this.course = g;
        this.foto = h;
    }
    id:any;
    name:string;
    lastName:string;
    phone:number;
    faculty:string;
    group:string;
    course:number;
    foto:string;
    shownStatus = true;
}