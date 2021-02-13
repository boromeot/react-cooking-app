import React from 'react'
import IngredientsList from './IngredientsList.js'

export default function Recipe(props) {
  const {
    name,
    cookTime,
    servings,
    intructions,
    ingredients
  } = props
  return (
      <div>
        <div>
          <h3> { name } </h3>
          <div>
            <button>Edit</button>
            <button>Delete</button>
          </div>
        </div>
        <div>
          <span>Cook Time</span>
          <span>{cookTime}</span>
        </div>
        <div>
          <span>Servings</span>
          <span>{servings}</span>
        </div>
        <div>
          <span>Instructions</span>
          <div>
            { intructions }
          </div>
        </div>
        <div>
          <span>Ingredients</span>
          <div>
            <IngredientsList ingredients={ ingredients } />
          </div>
        </div>
      </div>
  )
}
