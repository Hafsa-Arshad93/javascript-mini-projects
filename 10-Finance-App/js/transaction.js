// Store all transactions
let transactions = [];


//  Transaction Object

function createTransaction(title, amount, type) {

    const transaction = {

        id: Date.now(),

        title: title,

        amount: Number(amount),

        type: type

    };


    return transaction;

}



// Add Transaction

function addTransaction(item) {

    transactions = [

        ...transactions, item

    ];

}



// Delete Transaction

function deleteTransaction(id) {

    transactions = transactions.filter(function (transaction) {

        return transaction.id !== id;

    });

}



// Find Transaction

function findTransaction(id) {

    return transactions.find(function (transaction) {

        return transaction.id === id;

    });

}



// Calculate Total Income

function calculateIncome() {


    return transactions

        .filter(function (transaction) {

            return transaction.type === "income";

        })

        .reduce(function (total, transaction) {

            return total + transaction.amount;

        }, 0);


}




// Calculate Total Expense

function calculateExpense() {


    return transactions

        .filter(function (transaction) {

            return transaction.type === "expense";

        })

        .reduce(function (total, transaction) {

            return total + transaction.amount;

        }, 0);


}



// Calculate Balance

function currentBalance() {

    return calculateIncome() - calculateExpense();

}