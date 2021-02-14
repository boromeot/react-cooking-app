import React from 'react';
import RecipeList from './RecipeList.js'
import Recipe from './Recipe.js'
import '../css/app.css'

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
    intructions: "1. Salt Chicken\n2. Put chicken in oven\n3. Rotate it",
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
    intructions: "1. Paprika Pork\n2. Put Pork in oven\n3. Rotate it",
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
