import React from "react";
import { useLoaderData, useParams } from "react-router-dom";
import RecipeData from "../RecipeData/RecipeData";

const ChefDetails = () => {
  const chefDetails = useLoaderData();
  const {chefName, chefPicture, yearsOfExperience, numberOfRecipes, likes, description} = chefDetails 
  return (
    <div>
      <div className="bg-slate-600">
      <figure className="px-10 pt-10">
        <img  
          src={chefPicture}
          alt="Shoes"
          className="rounded-xl w-[50%] m-0 m-auto"
        />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{chefName}</h2>
        <p>{description}</p>
        <p>Likes: {likes}</p>
        <p>Number of recipes: {numberOfRecipes}</p>
        <p>Experiences: {yearsOfExperience} years</p>
      </div>
    </div>
    <RecipeData></RecipeData>
    </div>
  );
};

export default ChefDetails;
