class DailyPass extends Pass{
    constructor(pass){
        super(pass);
        let currentDateTime = new Date();
        this.expiryDate = currentDateTime.setDate(currentDateTime.getDate() + 1);
        this.type = "daily";
    }
}