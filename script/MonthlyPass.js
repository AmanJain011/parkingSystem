class MonthlyPass extends Pass{
    constructor(pass){
        super(pass);
        let currentDateTime = new Date();
        this.expiryDate = currentDateTime.setDate(currentDateTime.getDate() + 30);
        this.type = "monthly";
    }
}