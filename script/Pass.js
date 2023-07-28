class Pass{
    constructor(vehicle){
       this.id = "pass-" + (new Date()).getTime();
       this.vehicle = vehicle;
    }
}