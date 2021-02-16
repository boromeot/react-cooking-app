import React from 'react'

export default function RecipeIngredientEdit({ingredient}) {
  return (
    <>
      <input
        type="text"
        className="recipe-edit-input"
        value={ingredient.name}
      />
      <input
        type="text"
        className="recipe-edit-input"
        value={ingredient.amount}
      />
      <button className="btn btn-danger">&times;</button>
    </>
  )
}
