import React from "react";
import { useLoaderData } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const RecipeDetails = ({ recipe }) => {
  const recipeData = useLoaderData();
  const {
    id,
    chefName,
    chefPicture,
    yearsOfExperience,
    numberOfRecipes,
    likes,
    viewRecipesButton,
  } = recipeData;
  console.log(recipe);
  const { recipeImg, recipeName, cookingMethod, rating } = recipe;
  const handleToastBtn = () => {
    toast("Yammy Yammy testy food")
  };
  return (
    <div className="card card-compact w-96 bg-base-100 shadow-xl">
        <ToastContainer />
      <figure>
        <img className="h-64 w-72 rounded-lg" src={recipeImg} />
      </figure>
      <div className="card-body mx-10">
        <h2 className="card-title font-bold">{recipeName}</h2>
        <p><span className="font-bold">Cooking Method:</span> {cookingMethod}</p>
        <p><span className="font-bold">Likes:</span> {likes}</p>
        <p><span className="font-bold">Rating:</span> {rating}</p>
        <div className="card-actions justify-end">
          <button onClick={handleToastBtn} className="btn btn-primary">
            Fevorite
          </button>
        </div>
      </div>
    </div>
  );
};

export default RecipeDetails;
