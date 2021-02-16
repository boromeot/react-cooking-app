import React from 'react'
import RecipeIngredientEdit from './RecipeIngredientEdit.js'

export default function RecipeEdit({recipe}) {
  return (
    <div className="recipe-edit">
      <div className="recipe-edit-remove-button-container">
        <button className="btn recipe-edit-remove-button">&times;</button>
      </div>
      <div className="recipe-edit-details-grid">
        <label
          htmlFor="name"
          className="recipe-edit-label">
          Name
        </label>
        <input
          type="text"
          name="name"
          id="name"
          value={recipe.name}
          className="recipe-edit-input"
        />
        <label
          htmlFor="cookTime"
          className="recipe-edit-label">
          Cook Time
        </label>
        <input
          type="text"
          name="cookTime"
          id="cookTime"
          value={recipe.cookTime}
          className="recipe-edit-input"/>
        <label
          htmlFor="servings"
          className="recipe-edit-label">
          Servings
        </label>
        <input
          type="number"
          name="servings"
          id="servings"
          value={recipe.servings}
          min="1"
          className="recipe-edit-input"/>
        <label
          htmlFor="instructions"
          className="recipe-edit-label">
          Instruction
        </label>
        <textarea
          name="instructions"
          id="instructions"
          value={recipe.instructions}
          className="recipe-edit-input">
        </textarea>
      </div>
      <br />
      <label className="recipe-edit-label">Ingredients</label>
      <div className="recipe-edit-ingredient-grid">
        <div>Name</div>
        <div>Amount</div>
        <div></div>
        {recipe.ingredients.map(ingredient => (
          <RecipeIngredientEdit
            key={ingredient.id}
            ingredient={ingredient}
          />
        ))}
      </div>
      <div className="recipe-edit-add-ingredient-btn-container">
        <button className="btn btn-primary">Add Ingredient</button>
      </div>
    </div>
  )
}
