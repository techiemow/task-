class Uber{
    constructor(distance,Rate = 18,WaitRate=0){
        this.distance = distance
        this.RatePerKm = Rate
        this.WaitingCharge = WaitRate
    }
    toCalculate(){
        let Fare = (this.distance*this.RatePerKm)+this.WaitingCharge;
        return `The Customer Ride Total Fare : ${Fare} and Waiting Charges : ${this.WaitingCharge}`;
    }
}

let ride1 = new Uber(100);
let ride2 = new Uber(50,15,40);

console.log(ride1.toCalculate());
console.log(ride2.toCalculate());
