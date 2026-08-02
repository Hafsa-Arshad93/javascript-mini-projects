// Save transactions to LocalStorage

function saveTransactions() {

    localStorage.setItem(
        "transactions",
        JSON.stringify(transactions)
    );

}



// Get transactions from LocalStorage

function loadTransactions() {

    const savedTransactions =
        localStorage.getItem("transactions");


    if (savedTransactions) {

        transactions = JSON.parse(savedTransactions);

    }

}