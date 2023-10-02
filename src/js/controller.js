import * as model from './model.js';
import recipe from './views/recipeViews.js';

import 'core-js/stable';
import 'regenerator-runtime/runtime';
import recipeViews from './views/recipeViews.js';

const recipeContainer = document.querySelector('.recipe');

const timeout = function (s) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error(`Request took too long! Timeout after ${s} second`));
    }, s * 1000);
  });
};

// https://forkify-api.herokuapp.com/v2
// 295b0c62-3336-448e-bb3c-644e12c26660
///////////////////////////////////////

const controlRecipes = async function () {
  try {
    const id = window.location.hash.slice(1);

    if (!id) return;
    recipeView.renderSpinner();

    // 1).Loading Recipe
    await model.loadRecipe(id);

    // 2).Rendering recipe
    recipeView.render(model.state.recipe);
  } catch (error) {
    console.log(error);
  }
};

['haschange', 'load'].forEach(ev =>
  window.addEventListener(ev, controlRecipes)
);

// window.addEventListener('haschange', controlRecipes);
// window.addEventListener('load', controlRecipes);
