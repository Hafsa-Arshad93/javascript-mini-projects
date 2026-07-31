let recipe = {
    name: "",
    recipeIngredients: []
};

const output = document.getElementById("output");

// Create Recipe
document.getElementById("create-btn").addEventListener("click", function () {

    const recipeName = document.getElementById("recipe-name").value;

    const ingredientsInput = document.getElementById("ingredients").value;

    const ingredients = ingredientsInput.split(",");

    recipe = {
        name: recipeName,
        recipeIngredients: ingredients
    };

    const { name, recipeIngredients } = recipe;

    output.innerHTML = `
        <h2>${name}</h2>

        <p>
        <strong>Ingredients:</strong> <br>
        ${recipeIngredients.join(", ")}
        </p>
    `;
});


// Add One Ingredient
document.getElementById("add-btn").addEventListener("click", function () {

    const newIngredient =
        document.getElementById("new-ingredient").value;

    recipe.recipeIngredients = [
        ...recipe.recipeIngredients,
        newIngredient
    ];

    output.innerHTML = `
        <h2>${recipe.name}</h2>

        <p>
        <strong>Ingredients:</strong>
        ${recipe.recipeIngredients.join(", ")}
        </p>
    `;

});


// Merge Chef Ingredients
document.getElementById("merge-btn").addEventListener("click", function () {

    const chefIngredients = [
        "Oregano",
        "Chili Flakes",
        "Salt"
    ];

    recipe.recipeIngredients = [
        ...recipe.recipeIngredients,
        ...chefIngredients
    ];

    output.innerHTML = `
        <h2>${recipe.name}</h2>

        <p>
        <strong>Ingredients:</strong>
        ${recipe.recipeIngredients.join(", ")}
        </p>
    `;

});


// Copy Recipe
document.getElementById("copy-btn").addEventListener("click", function () {

    const copiedRecipe = {
        ...recipe
    };

    output.innerHTML = `
        <h2>Copied Recipe</h2>

        <p>
        <strong>Name:</strong>
        ${copiedRecipe.name}
        </p>

        <p>
        <strong>Ingredients:</strong>
        ${copiedRecipe.recipeIngredients.join(", ")}
        </p>
    `;

});


// Rest Operator
document.getElementById("favorite-btn").addEventListener("click", function () {

    const value =
        document.getElementById("favorite-input").value;

    const favoriteArray = value.split(",");
        favoriteIngredients(...favoriteArray);

    function favoriteIngredients(...items) {

        output.innerHTML = `
            <h2>Favorite Ingredients</h2>

            <p>${items.join(", ")}</p>
        `;

    }


});