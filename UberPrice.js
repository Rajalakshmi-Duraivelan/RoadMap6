//write a class to calculate the uber price.
class uberFare {
    constructor (city, farePerKm, kmToTravel, name) {
        this.city = city;
        this.farePerKm = farePerKm;
        this.kmToTravel= kmToTravel;
        this.name  = name;
 
    }
    getTotaPrice(){
        let price = this.farePerKm*this.kmToTravel;
            return "Hello " +  this.name + " from " + this.city + ". Your total price for travel is Rs." + price;
        }
 
}
 
let chennai = new uberFare( "Chennai", 10,20, "Rajalakshmi");
let bangalore = new uberFare( "Bangalore", 30,50, "Karthikeyan");
 
console.log(chennai.getTotaPrice()); 
console.log(bangalore.getTotaPrice()); 