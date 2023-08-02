/**
 * 
 * Task 3: Object Property Getters and Setters

Create an object called bankAccount with the following properties and values:balance: 1000 (default value)Use a getter to define a property called formattedBalance, which returns the balance with a currency symbol (e.g., "$1000").


Use a setter to define a property called balance, which updates the account balance and automatically updates the corresponding formattedBalance value.

Implement a method called transfer on the bankAccount object that takes two bankAccount objects and an amount as arguments. The method should transfer the specified amount from the current account to the target account. Ensure that the balance and formattedBalance properties of both accounts are updated correctly.

 */


// createBankAccount function returns a new bankAccount object with its own unique closure variables
export type BankAccount = {
    balance: number;
    formattedBalance: string;
    transfer: (targetAccount: BankAccount, amount: number) => void;
  }
  
  export function bankAccount(): BankAccount {
    let _balance = 1000;
    let _formattedBalance = `$${_balance}`;
  
    return {
      get balance() {
        return _balance;
      },
  
      set balance(newBalance: number) {
        _balance = newBalance;
        _formattedBalance = `$${newBalance}`;
      },
  
      get formattedBalance() {
        return _formattedBalance;
      },
  
      transfer: function (targetAccount: BankAccount, amount: number) {
        if (_balance >= amount) {
          _balance -= amount;
          _formattedBalance = `$${_balance}`;
  
          let targetAccountBalance = targetAccount.balance;
          targetAccountBalance += amount;
          targetAccount.balance = targetAccountBalance;
        }
      },
    };
  }