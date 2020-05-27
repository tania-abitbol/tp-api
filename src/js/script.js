const RecipesContainer = document.querySelector("#recipesContainer");
const button10 = document.querySelector("#tenimage");
const button50 = document.querySelector("#fiftyimage");
const button100 = document.querySelector("#hundredimage");
const buttonVegan = document.querySelector("#vegan");
const buttonVegetarian = document.querySelector("#vegetarian");
const buttonNoGluten = document.querySelector("#nogluten");
const callApi = "https://api.spoonacular.com/";
const typeRecipes = "recipes";
const apiKey = "search?apiKey=344cecf8cf054df1bac5fda39bede732";

const getRecipes = (props) => {
  fetch(props)
    .then((resp) => resp.json())
    .then((resp) => {
      let recipesContainer = "";
      for (let index = 0; index < resp.results.length; index++) {
        recipesContainer += ` <div class="recipes__card">
        <h2>${resp.results[index].title}</h2>
        <div class="recipes__card__numbers">
        <h3 class="recipes__card__time">${resp.results[index].readyInMinutes}min</h3>
        <h4 class="recipes__card__people">${resp.results[index].servings} people</h4>
        </div>
        <img class="recipes__card__image" src="https://spoonacular.com/recipeImages/${resp.results[index].image}" />
        <a href="${resp.results[index].sourceUrl}" class="recipes__button" target="_blank">See this recipe</a>
        </div>
      `;
      }
      RecipesContainer.innerHTML = recipesContainer;
    });
};

button10.addEventListener("click", () => {
  props = `${callApi}${typeRecipes}${apiKey}&number=10`;
  getRecipes(props);
});

button50.addEventListener("click", () => {
  props = `${callApi}${typeRecipes}/${apiKey}&number=50`;
  getRecipes(props);
});
button100.addEventListener("click", () => {
  props = `${callApi}${typeRecipes}/${apiKey}&number=100`;
  getRecipes(props);
});

buttonVegetarian.addEventListener("click", () => {
  props = `${callApi}${typeRecipes}/${apiKey}&diet=vegetarian`;
  getRecipes(props);
});

buttonVegan.addEventListener("click", () => {
  props = `${callApi}${typeRecipes}/${apiKey}&diet=vegan`;
  getRecipes(props);
});

buttonNoGluten.addEventListener("click", () => {
  props = `${callApi}${typeRecipes}/${apiKey}&diet=Gluten Free`;
  getRecipes(props);
});

getRecipes(`${callApi}${typeRecipes}/${apiKey}&number=10`);
