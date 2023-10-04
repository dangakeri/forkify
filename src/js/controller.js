import * as model from './model.js';
import searchView from './views/searchView.js';
import resultsView from './views/resultsView.js';

import 'core-js/stable';
import 'regenerator-runtime/runtime';
import recipeView from './views/recipeViews.js';

if (module.hot) {
  module.hot.accept();
}

const controlRecipes = async function () {
  try {
    const id = window.location.hash.slice(1);
    console.log(id);
    console.log(window.location.hash);
    if (!id) return;
    recipeView.renderSpinner();

    // 1).Loading Recipe
    await model.loadRecipe(id);

    // 2).Rendering recipe
    recipeView.render(model.state.recipe);
  } catch (error) {
    recipeView.renderError();
  }
};

const controlSearchResults = async function () {
  try {
    resultsView.renderSpinner();

    // 1). Get search query
    const query = searchView.getQuery();
    if (!query) return;

    //2). Load Search results
    await model.loadSearchResults(query);

    // 3) Render results

    resultsView.render(model.state.search.results);
  } catch (error) {
    resultsView.renderError();
  }
};

const init = function () {
  recipeView.addHandlerRender(controlRecipes);
  searchView.addHandlerSearch(controlSearchResults);
};
init();
