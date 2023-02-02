//Write a “person” class to hold all the details.
class person {
    constructor (firstName, lastName, age, email, phone) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.email = email;
        this.phone = phone;
        this.persondetails = function () {
            return this.firstName + " " + this.lastName + " Age is " + this.age + " and email : " + this.email + ", PhoneNo: " + this.phone;
        }
    }
}
 
let p1 = new person ("Rajalakshmi", "Duraivelan", "28","rajydurai@gmail.com", "789456123" );
console.log(p1.persondetails());