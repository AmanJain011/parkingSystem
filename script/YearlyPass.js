class YearlyPass extends Pass{
    constructor(pass){
        super(pass);
        let currentDateTime = new Date();
        this.expiryDate = currentDateTime.setDate(currentDateTime.getDate() + 365);
        this.type = "yearly";
    }
}