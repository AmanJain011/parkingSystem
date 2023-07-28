class Student extends User{
    constructor(name, contact, gender){
        super(name, contact, gender);
        this.role = "student";
    }
}