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
      <div className="recipe">
        <div className="recipe-header">
          <h3 className="recipe-title"> { name } </h3>
          <div>
            <button className="btn btn-primary mr-1">Edit</button>
            <button className="btn btn-danger">Delete</button>
          </div>
        </div>
        <div className="recipe-row">
          <span className="recipe-label">Cook Time</span>
          <span className="recipe-value">{cookTime}</span>
        </div>
        <div className="recipe-row">
          <span className="recipe-label">Servings</span>
          <span className="recipe-value ">{servings}</span>
        </div>
        <div className="recipe-row">
          <span className="recipe-label">Instructions</span>
          <div className="recipe-value recipe-value-indented recipe-instructions">
            { intructions }
          </div>
        </div>
        <div className="recipe-row">
          <span className="recipe-label">Ingredients</span>
          <div className="recipe-value recipe-value-indented">
            <IngredientsList ingredients={ ingredients } />
          </div>
        </div>
      </div>
  )
}
