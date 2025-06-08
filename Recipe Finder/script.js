// Function to search for recipes based on ingredients
function searchRecipes() {
    const searchInput = document.getElementById('searchInput').value;
    const apiKey = '700261df425641c79168e81b644174b8';
    const apiUrl = `https://api.spoonacular.com/recipes/findByIngredients?ingredients=${searchInput}&apiKey=${apiKey}`;
    const loader = document.getElementById('loader');

    setTimeout(() => {}, 3000);

    fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            displayRecipes(data);
        })
        .catch(error => {
            console.error('Error fetching recipes:', error);
            document.getElementById('errmsg').innerHTML = '<p>Error fetching data - 404</p>'
        });
}

// Function to display recipes in the UI
function displayRecipes(recipes) {
    const recipeList = document.getElementById('recipeList');
    recipeList.innerHTML = '';

    recipes.forEach(recipe => {
        const recipeItem = document.createElement('div');
        recipeItem.classList.add('card');

        const title = document.createElement('h3');
        title.textContent = recipe.title;

        const image = document.createElement('img');
        image.src = recipe.image;

        const ingredients = document.createElement('p');
        ingredients.textContent = `Missing Ingredients: ${recipe.missedIngredients.map(ingredient => ingredient.original).join(', ')}`;

        recipeItem.appendChild(title);
        recipeItem.appendChild(image);
        recipeItem.appendChild(ingredients);

        // Add event listener to display recipe details when clicked
        recipeItem.addEventListener('click', () => {
            displayRecipeDetails(recipe);
        });

        recipeList.appendChild(recipeItem);
    });
}

// Function to display detailed information about a recipe in a modal
function displayRecipeDetails(recipe) {
    const modal = document.createElement('div');
    modal.classList.add('modal');

    const modalContent = document.createElement('div');
    modalContent.classList.add('modal-content');

    const closeBtn = document.createElement('span');
    closeBtn.classList.add('close-btn');
    closeBtn.innerHTML = '&times;';
    closeBtn.addEventListener('click', () => {
        modal.remove();
    });

    const title = document.createElement('h2');
    title.textContent = recipe.title;

    const image = document.createElement('img');
    image.src = recipe.image;

    const ingredients = document.createElement('ul');
    ingredients.innerHTML = recipe.missedIngredients.map(ingredient => `<li>${ingredient.original}</li>`).join('');

    const instructions = document.createElement('p');
    instructions.textContent = recipe.instructions || 'No instructions available';

    modalContent.appendChild(closeBtn);
    modalContent.appendChild(title);
    modalContent.appendChild(image);
    modalContent.appendChild(ingredients);
    modalContent.appendChild(instructions);

    modal.appendChild(modalContent);
    document.body.appendChild(modal);
}