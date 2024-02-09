class person {
    constructor(name,age,location,phoneno,email_Id) {
        this.name = name;
        this.age= age;
        this.location = location;
        this.phoneno = phoneno;
        this.email_Id = email_Id;
    }
    getEducationBackground(){
        let educationBack = `Done UG`
         return educationBack
    }
     getdetails(){
        console.log('name :',this.name);
        console.log('age :',this.age)
        console.log(`location : ${this.location}`);
        console.log(`PhoneNumber : ${this.phoneno}`);
        console.log(`EmailId : ${this.email_Id}`);
        console.log(`EducationalBackGround :${this.getEducationBackground()}`)
     }
}
let person1 = new person('Mowriyaa',22,'chennai',1234567890,'mowriyaabk@gmail.com');

person1.getdetails();
