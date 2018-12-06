/*******************************************************************************************/
var Person1 = {
    fname: "Punam", lname: "Kadlag", age: 21, skills: ["C", "C++", "Java"],
    address: add = {
        city: "Pune",
        pincode: 411039
    },
    dateofbirth: new Date('1997-03-23').toDateString(),
    married: false,
    profession: "Analyst",
    print() {
        console.log(this.fname,
            this.lname,
            this.age,
            this.skills,
            this.address,
            this.dateofbirth,
            this.married,
            this.profession)
    }
}
var Person2 = {
    fname: "Poonam", lname: "Paraskar", age: 21, skills: ["C", "C++", "Java", "SQL"],
    address: add = {
        city: "Mumbai",
        pincode: 400709
    },
    dateofbirth: new Date('1997-08-17').toDateString(),
    married: false,
    profession: "Analyst",
    print() {
        console.log(this.fname,
            this.lname,
            this.age,
            this.skills,
            this.address,
            this.dateofbirth,
            this.married,
            this.profession)

    }
}

Person1.print();
Person2.print();

/*******************************************************************************************/


