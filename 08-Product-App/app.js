const products = [
    {
        name: "Laptop",
        price: 800,
        category: "Electronics"
    },

    {
        name: "Phone",
        price: 500,
        category: "Electronics"
    },

    {
        name: "Shoes",
        price: 100,
        category: "Fashion"
    },

    {
        name: "Jeans",
        price: 300,
        category: "Fashion"
    },

    {
        name: "Shirt",
        price: 200,
        category: "Fashion"
    },

    {
        name: "Bag",
        price: 1100,
        category: "Fashion"
    },

    {
        name: "Washing Machine",
        price: 1230,
        category: "Electronics"
    },

    {
        name: "Ac Inverter",
        price: 1000,
        category: "Electronics"
    }
];



// HTML Elements

const productsContainer = document.getElementById("products");
const message = document.getElementById("message");
const totalElement = document.getElementById("total");
const searchInput = document.getElementById("search-input");



// Ye variable hamesha screen par dikhne wale products ko store karega

let currentProducts = products;



// Display Products

function displayProducts(productArray) {

    productsContainer.innerHTML = "";

    productArray.forEach(product => {

        const card = document.createElement("div");

        card.className = "card";

        card.innerHTML = `
            <h3>${product.name}</h3>
            <p>Price: $${product.price}</p>
            <p>Category: ${product.category}</p>
        `;

        productsContainer.appendChild(card);

    });

}

// displayProducts(currentProducts);



// All Products

document.getElementById("all-btn").addEventListener("click", () => {

    currentProducts = products;

    displayProducts(currentProducts);

    message.textContent = "";

    totalElement.textContent = "";

});



// Electronics

document.getElementById("electronics-btn").addEventListener("click", () => {

    currentProducts = products.filter(product => {

        return product.category === "Electronics";

    });

    displayProducts(currentProducts);

    message.textContent = "";

    totalElement.textContent = "";

});



// Fashion

document.getElementById("fashion-btn").addEventListener("click", () => {

    currentProducts = products.filter(product => {

        return product.category === "Fashion";

    });

    displayProducts(currentProducts);

    message.textContent = "";

    totalElement.textContent = "";

});



// Discount

document.getElementById("discount-btn").addEventListener("click", () => {

    currentProducts = products.map(product => {

        return {

            name: product.name,

            price: product.price - (product.price * 10 / 100),

            category: product.category

        };

    });

    displayProducts(currentProducts);

    message.textContent = "10% Discount Is Available On All products";

    totalElement.textContent = "";

});



// Search

document.getElementById("search-btn").addEventListener("click", () => {

    const searchValue = searchInput.value;

    const foundProduct = products.find(product => {

        return product.name.toUpperCase() === searchValue.toUpperCase();

    });
    if (foundProduct) {

        currentProducts = [foundProduct];

        displayProducts(currentProducts);

        message.textContent = "Product Found";

    } else {

        currentProducts = [];

        productsContainer.innerHTML = "";

        message.textContent = "Product Not Found";

    }

    totalElement.textContent = "";

});



// Total Price

document.getElementById("total-btn").addEventListener("click", () => {

    const totalPrice = currentProducts.reduce((total, product) => {

        return total + product.price}, 0);

    totalElement.textContent = `Total Price: $${totalPrice}`;

});