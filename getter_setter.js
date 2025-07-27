//✅ 1. Getters/Setters allow control, logic, and safety
//Without getters/setters:
//account.balance = -99999; // ❌ Invalid, but no one stops this!

//With getters/setters:
//it allows us to implement OOPS logic


// OOP principle of encapsulation:
//➡️ Hide internal details, expose controlled interfaces.
class BankAccount {
  #balance = 0; // private field

  get balance() {
    return this.#balance;
  }

  set balance(amount) {
    if (amount < 0) throw new Error("Balance can't be negative");
    this.#balance = amount;
  }
}

const account = new BankAccount();

// Test the getter
console.log("Initial balance:", account.balance); // Should print 0

// Test the setter with valid value
account.balance = 1000;
console.log("After setting 1000:", account.balance); // Should print 1000

// Test the setter with invalid value (this will throw an error)
try {
  account.balance = -99999; // ❌ This will throw an error
} catch (error) {
  console.log("Error caught:", error.message);
}