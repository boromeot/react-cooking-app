import React, { useContext } from 'react'
import RecipeIngredientEdit from './RecipeIngredientEdit.js'
import { RecipeContext } from './App.js'

export default function RecipeEdit({recipe}) {
  const { handleRecipeChange, handleRecipeSelect } = useContext(RecipeContext)

  function handleChange(changes) {
    handleRecipeChange(recipe.id, { ...recipe, ...changes })
  }

  function handleIngredientChange(id, ingredient) {
    const newIngredients = [...recipe.ingredients]
    const index = newIngredients.findIndex(i => i.id === id)
    newIngredients[index] = ingredient
    handleChange({ingredients: newIngredients})
  }

  function handleIngredientAdd() {
    const newIngredient = {
      id: Date.now().toString(),
      name: '',
      amount: ''
    }
    handleChange({ ingredients: [...recipe.ingredients, newIngredient]})
  }

  function handleIngredientDelete(id) {
    handleChange({
      ingredients: recipe.ingredients.filter(i => i.id !== id)
    })
  }

  return (
    <div className="recipe-edit">
      <div className="recipe-edit-remove-button-container">
        <button
          className="btn recipe-edit-remove-button"
          onClick={() => handleRecipeSelect(undefined)}>
          &times;
        </button>
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
          onChange={e => handleChange({name: e.target.value})}
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
          onChange={e => handleChange({cookTime: e.target.value})}
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
          onChange={e => handleChange({servings: parseInt(e.target.value) || ''})}
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
          onChange={e => handleChange({instructions: e.target.value})}
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
            handleIngredientChange={handleIngredientChange}
            handleIngredientDelete={handleIngredientDelete}
            ingredient={ingredient}
          />
        ))}
      </div>
      <div className="recipe-edit-add-ingredient-btn-container">
        <button
          className="btn btn-primary"
          onClick={() => handleIngredientAdd()}>
          Add Ingredient
        </button>
      </div>
    </div>
  )
}
