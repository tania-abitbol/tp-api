const RecipesContainer = document.querySelector("#recipesContainer");
const button10 = document.querySelector("#tenimage");
const button50 = document.querySelector("#fiftyimage");
const button100 = document.querySelector("#hundredimage");

const getRecipes = (type, number, diet) => {
  fetch(
    `https://api.spoonacular.com/${type}/search?apiKey=344cecf8cf054df1bac5fda39bede732&number=${number}&${diet}`
  )
    .then((resp) => resp.json())
    .then((resp) => {
      let recipesContainer = "";
      for (let index = 0; index < resp.results.length; index++) {
        recipesContainer += ` <div id="recipesContainer" class="recipes">
        <h2>${resp.results[index].title}</h2>
        <div class="numbers">
        <h3>${resp.results[index].readyInMinutes}min</h3>
        <h4>${resp.results[index].servings} personnes</h4>
        </div>
        <img class="recipe__image" src="https://spoonacular.com/recipeImages/${resp.results[index].image}" /></div>
      `;
      }
      RecipesContainer.innerHTML = recipesContainer;
    });
};

button10.addEventListener("click", () => {
  getRecipes("recipes", 10);
});

button50.addEventListener("click", () => {
  getRecipes("recipes", 50);
});
button100.addEventListener("click", () => {
  getRecipes("recipes", 100);
});

getRecipes("recipes", 10);
