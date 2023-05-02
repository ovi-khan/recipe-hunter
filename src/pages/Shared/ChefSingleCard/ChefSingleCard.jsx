import React from 'react';

const ChefSingleCard = ({ chefSingleData }) => {
    console.log('the data is',  chefSingleData)
  const {
    id,
    chefName,
    chefPicture,
    yearsOfExperience,
    numberOfRecipes,
    likes,
    viewRecipesButton,
  } = chefSingleData;

  return (
    <div>
      <h1>{id}</h1>
      <h1>{chefName}</h1>
      <div className="card card-compact w-96 bg-base-100 shadow-xl">
        <figure>
          <img src={chefPicture} alt={`Portrait of ${chefName}`} />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{chefName}</h2>
          <p>Years of experience: {yearsOfExperience}</p>
          <p>Number of recipes: {numberOfRecipes}</p>
          <p>Likes: {likes}</p>
          <div className="card-actions justify-end">
            <a
              href={viewRecipesButton}
              className="btn btn-primary"
              role="button"
            >
              View Recipes
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChefSingleCard;
