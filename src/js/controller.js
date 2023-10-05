import * as model from './model.js';
import searchView from './views/searchView.js';
import resultsView from './views/resultsView.js';
import paginationView from './views/paginationView.js';

import 'core-js/stable';
import 'regenerator-runtime/runtime';
import recipeView from './views/recipeViews.js';

if (module.hot) {
  module.hot.accept();
}

const controlRecipes = async function () {
  try {
    const id = window.location.hash.slice(1);
    // console.log(id);
    // console.log(window.location.hash);
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

    // resultsView.render(model.state.search.results);
    resultsView.render(model.getSearchResultsPage());

    // 4) Render initial pagination buttons
    paginationView.render(model.state.search);

    // Test
    controlServings();
  } catch (error) {
    resultsView.renderError();
  }
};

const controlPagination = function (goToPage) {
  // 1). Render NEW results
  resultsView.render(model.getSearchResultsPage(goToPage));

  // 2).Render NEW pagination button
  paginationView.render(model.state.search);
};

const controlServings = function (newServings) {
  // Update the recipe in serving(in state)
  model.updateServings(newServings);
  // Update the recipe view
  recipeView.render(model.state.recipe);
};
const init = function () {
  searchView.addHandlerSearch(controlSearchResults);
  recipeView.addHandlerUpdateServings(controlServings);
  recipeView.addHandlerRender(controlRecipes);
  paginationView.addHandlerClick(controlPagination);
};
init();
