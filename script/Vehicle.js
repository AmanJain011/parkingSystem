class Vehicle{
    constructor(registrationNumber, owner){
        this.id = "vehicle-" + (new Date()).getTime();
        this.registrationNumber = registrationNumber;
        this.owner = owner;
    }
}