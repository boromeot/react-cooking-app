import React, { useState, useEffect } from 'react';
import RecipeList from './RecipeList.js';
import Recipe from './Recipe.js';
import '../css/app.css';

export const RecipeContext = React.createContext()

function App() {
  const [recipes, setRecipes] = useState(sampleRecipes)
  const LOCAL_STORAGE_KEY = 'cookingWithReact.recipes'

  useEffect(() => {
    const recipeJSON = localStorage.getItem(LOCAL_STORAGE_KEY)
    if (recipeJSON != null) setRecipes(JSON.parse(recipeJSON))
  }, [])

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(recipes))
  }, [recipes])

  const recipeContextVlaue = {
    handleRecipeAdd: handleRecipeAdd,
    handleRecipeDelete: handleRecipeDelete
  }
  return (
    <RecipeContext.Provider value={recipeContextVlaue}>
      <RecipeList recipes={recipes}/>
    </RecipeContext.Provider>
  )
  function handleRecipeAdd() {
    const newRecipe = {
      id: Date.now().toString(),
      name: 'New',
      servings: 1,
      cookTime: '1:00',
      instructions: 'Instruct',
      ingredients: [
        {id: Date.now().toString(), name: 'Name', amount: '1 Tbs'}
      ]
    }
    setRecipes([...recipes, newRecipe])
  }
  function handleRecipeDelete(id) {
    setRecipes(recipes.filter(recipe => recipe.id !== id))
  }
}

const sampleRecipes =[
  {
    id: 1,
    name: "Chicken",
    servings: 3,
    cookTime: "30mins",
    instructions: "1. Salt Chicken\n2. Put chicken in oven\n3. Rotate it",
    ingredients: [
      {
        id: 1,
        name: "Chicken",
        amount: "3lbs"
      },
      {
        id: 2,
        name: "Salt",
        amount: "1Tbs"
      }
    ]
  },
  {
    id: 2,
    name: "Pork",
    servings: 5,
    cookTime: "45mins",
    instructions: "1. Paprika Pork\n2. Put Pork in oven\n3. Rotate it",
    ingredients: [
      {
        id: 1,
        name: "Pork",
        amount: "5lbs"
      },
      {
        id: 2,
        name: "Paprika",
        amount: "1Tbs"
      }
    ]
  }
]

export default App;
