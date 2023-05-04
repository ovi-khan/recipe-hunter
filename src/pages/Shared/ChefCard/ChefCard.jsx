import React, { useEffect, useState } from "react";
import ChefSingleCard from "../ChefSingleCard/ChefSingleCard";

const ChefCard = () => {
  const [chefData, setChefData] = useState([]);
  useEffect(() => {
    fetch("https://b7a10-chef-recipe-hunter-server-side-ovi-khan-ovi-khan.vercel.app/chefData")
      .then((res) => res.json())
      .then((data) => setChefData(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <>
      <div className="grid lg:grid-cols-3 gap-5">
        {chefData.map((chefSingleData) => (
          <ChefSingleCard
            key={chefSingleData.id}
            chefSingleData={chefSingleData}
          />
        ))}
      </div>
    </>
  );
};

export default ChefCard;
