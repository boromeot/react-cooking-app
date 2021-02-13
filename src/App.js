import React from 'react';
import RecipeList from './RecipeList.js'
import Recipe from './Recipe.js'

function App() {
  return (
    <RecipeList recipes={sampleRecipes} />
  )
}

const sampleRecipes =[
  {
    id: 1,
    name: "Chicken",
    servings: 3,
    cookTime: "30mins",
    intructions: "1. Salt Chicken\n2. Put chicken in oven\n3. Rotate it"
  },
  {
    id: 2,
    name: "Pork",
    servings: 5,
    cookTime: "45mins",
    intructions: "1. Salt Pork\n2. Put Pork in oven\n3. Rotate it"
  }
]

export default App;
