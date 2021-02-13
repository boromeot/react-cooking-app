import React from 'react'
import Ingredient from './Ingredient.js'

export default function Ingredients({ingredients}) {
  const ingredientElement = ingredients.map(ingredient => {
    return <Ingredient />
  })
  return (
    <div>

    </div>
  )
}
