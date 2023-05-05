import { useLoaderData } from "react-router-dom";
import RecipeDetails from "../RecipeDetails/RecipeDetails";

const RecipeData = () => {
  const recipeData = useLoaderData();
//   console.log(recipeData);
  const recipesDetails = recipeData.recipes
  

  return (
    <div className="grid lg:grid-cols-3 mx-10 mt-20">
        {
            recipesDetails.map(recipe => <RecipeDetails
             recipe={recipe}
             key={recipe.id}
            ></RecipeDetails>)
        }
    </div>
  );
};

export default RecipeData;
