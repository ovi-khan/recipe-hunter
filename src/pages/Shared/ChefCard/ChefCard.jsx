import React, { useEffect, useState } from "react";
import ChefSingleCard from "../ChefSingleCard/ChefSingleCard";

const ChefCard = () => {
  const [chefData, setChefData] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/chefData")
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
