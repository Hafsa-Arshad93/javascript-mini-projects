// Select HTML elements

const balance = document.getElementById("balance");

const income = document.getElementById("income");

const expense = document.getElementById("expense");

const transactionList = document.getElementById("transaction-list");

const titleInput = document.getElementById("title");

const amountInput = document.getElementById("amount");

const typeInput = document.getElementById("type");

const addBtn = document.getElementById("add-btn");

const searchInput = document.getElementById("search");



// Display Transactions

function displayTransactions(list = transactions) {


    transactionList.innerHTML = "";


    list.map(function(transaction){


        const li = document.createElement("li");


        li.className = 
        `transaction ${transaction.type}`;



        li.innerHTML = `

            <div>

                <h3>${transaction.title}</h3>

                <p>
                Rs ${transaction.amount}
                </p>

            </div>


            <button 
            class="delete-btn"
            onclick="removeTransaction(${transaction.id})">

            Delete

            </button>

        `;



        transactionList.appendChild(li);



    });


}



// Update Dashboard

function updateDashboard(){


    balance.innerHTML =
    `Rs ${currentBalance()}`;


    income.innerHTML =
    `Rs ${calculateIncome()}`;


    expense.innerHTML =
    `Rs ${calculateExpense()}`;


}




// Add Transaction Button

addBtn.addEventListener("click", function(){


    const title = titleInput.value;

    const amount = amountInput.value;

    const type = typeInput.value;



    if(title === "" || amount === ""){

        alert("Please fill all fields");

        return;

    }



    const newTransaction =
    createTransaction(title, amount, type);



    addTransaction(newTransaction);



    saveTransactions();



    updateDashboard();

    displayTransactions();



    titleInput.value = "";

    amountInput.value = "";

});




// Delete Transaction

function removeTransaction(id){


    deleteTransaction(id);


    saveTransactions();


    updateDashboard();

    displayTransactions();


}




// Search Transaction

searchInput.addEventListener("input", function(){


    const searchValue =
    searchInput.value.toLowerCase();



    const filteredTransactions =
    transactions.filter(function(transaction){


        return transaction.title
        .toLowerCase()
        .includes(searchValue);


    });



    displayTransactions(filteredTransactions);



});




// Load Data When Page Opens

loadTransactions();


updateDashboard();

displayTransactions();