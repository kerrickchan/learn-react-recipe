import React from "react"

import {Link} from "react-router-dom"

const Recipes = (props) => (
  <div className="container">
    <div className="row">
      {
        props.recipes.map((recipe) => {
          return (
            <div className="col-md-4" key={recipe.recipe_id} style={{marginBottom: "2rem"}}>
              <div className="recipe__box">
                <img className="recipe__box-img" src={recipe.image_url} alt={recipe.title} />
                <div className="recipe__text">
                  <h5 className="recipe__title">{recipe.title.length < 20 ? recipe.title : recipe.title.substring(0, 26).concat("...")}</h5>
                  <p className="recipe__subtitle">Publisher: <span>{recipe.publisher}</span></p>
                  <button className="recipe__button"><Link to={{pathname: `/recipe/${recipe.recipe_id}`, state: {recipe: recipe.title}}}>View Recipe</Link></button>
                </div>
              </div>
            </div>
          )
        })
      }
    </div>
  </div>
)

export default Recipes