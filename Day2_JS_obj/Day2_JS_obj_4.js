/**********************************************************************************************************/
class BankAccount {
    constructor(accountNumber, accountHolderName, accountBalance) {
        this.accountNumber = accountNumber;
        this.accountHolderName = accountHolderName;
        this.accountBalance = accountBalance;
    }
    deposit(amount) {
        this.accountBalance += parseInt(amount);
    }
    getaccountBalance() {

        console.log(this.accountBalance);
    }
}
class Savings extends BankAccount {

    constructor(accountNumber, accountHolderName, accountBalance, isSalary) {
        super(accountNumber, accountHolderName, accountBalance);
        this.isSalary = isSalary;
    }
    withdrawal(amount) {
        if (this.accountBalance < parseInt(amount))
            console.log("Insufficient Funds");
        else {
            this.accountBalance -= parseInt(amount);
        }
    }
};

var savings = new Savings(12345621, "Punam", 20000, true);
console.log(savings);
console.log(savings.accountBalance);
savings.deposit(1000);
savings.getaccountBalance();
savings.withdrawal(500);
savings.getaccountBalance();

class Current extends BankAccount {
 constructor(accountNumber, accountHolderName, accountBalance, odLimit) {
        super(accountNumber, accountHolderName, accountBalance);
        this.odLimit = odLimit;
    }
    withdrawal(amount) {
        if (this.accountBalance + this.odLimit < parseInt(amount))
            console.log("Can not withdraw");
        else {
            this.accountBalance -= parseInt(amount);
          }
    }
};

var current = new Current(12345201, "Poonam", 50000, 80000);
console.log(current);
console.log(current.accountBalance);
current.deposit(1000);
current.getaccountBalance();
current.withdrawal(60000);
current.getaccountBalance();
/**********************************************************************************************************/

