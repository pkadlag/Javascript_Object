/******************************************************************************************/
var amitabh = {
    fname: "Amitabh", lname: "Bachhan", age: 75, skills: "Acting",
    address: {
        city: "Mumbai",
        pincode: 411025
    },
    dateofbirth: new Date('1942-08-21').toDateString(),
    married: true,
    profession: "Actor",
}
var abhishek = Object.create(amitabh);
abhishek.fname = "Amitabh";
abhishek.age = 42;
abhishek.dateofbirth = ('1976-02-05');

var aradhya = Object.create(abhishek);
aradhya.fname = "Aradhya";
aradhya.age = 7;
aradhya.dateofbirth = new Date('2011-02-05').toDateString();
aradhya.married = false;
console.log(aradhya.fname);
console.log(aradhya.lname);
console.log(aradhya.dateofbirth);
/******************************************************************************************/