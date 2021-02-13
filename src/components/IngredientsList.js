import React from 'react'
import Ingredient from './Ingredient.js'

export default function IngredientsList({ingredients}) {
  const ingredientElement = ingredients.map(ingredient => {
    return <Ingredient key={ingredient.id} {...ingredient}/>
  })
  return (
    <div>
      {ingredientElement}
    </div>
  )
}
