/*********************************************************************/
var amitabh = new Object()
amitabh.fname = "Amitabh";
amitabh.lname = "Bachhan";
amitabh.age = 72;
amitabh.skills = ['Acting', 'Singing', 'Dancing'];
amitabh.address = {
    city: "Mumbai",
    pincode: 411025
};
amitabh.dateofbirth = new Date('1942-08-21').toDateString();
amitabh.married = true;
amitabh.profession = "Actor";
amitabh.print = function () {
    console.log(this.fname,
        this.lname,
        this.age,
        this.skills,
        this.address,
        this.dateofbirth,
        this.married,
        this.profession)
}


var abhishek = Object.create(amitabh);
abhishek.fname = "Abhishek";
abhishek.age = 42;
abhishek.dateofbirth = new Date('1976-02-05').toDateString();
abhishek.skills = ['Acting', 'team-leading(Kabbadi)'];

abhishek.print();
amitabh.print();
/*********************************************************************/