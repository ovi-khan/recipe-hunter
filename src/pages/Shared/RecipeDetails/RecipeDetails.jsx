import React from 'react';
import { useLoaderData } from 'react-router-dom';

const RecipeDetails = ({recipe}) => {
    const recipeData = useLoaderData()
    const {
        id,
        chefName,
        chefPicture,
        yearsOfExperience,
        numberOfRecipes,
        likes,
        viewRecipesButton,
      } = recipeData;
    console.log(recipe)
    const {recipeImg, recipeName, cookingMethod, rating} = recipe
    return (  
      <div className="card card-compact w-96 bg-base-100 shadow-xl">
        <figure>
          <img 
            className='h-64 w-72 rounded-lg'
            src={recipeImg}
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{recipeName}</h2>
          <p>{cookingMethod}</p>
          <p>Likes: {likes}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Fevorite</button>
          </div>
        </div>
      </div>
    );
};

export default RecipeDetails;