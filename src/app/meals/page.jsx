import Meals from "@/components/Meals";
import React from "react";

const MealsPage = async() => {
    
  return (
    <div className="h-screen mt-5">
      <div className="text-center">
        <h2 className="text-3xl font-semibold p-2 text-[#a11c1c]">
          Choose Your Meals
        </h2>
        <p className="text-lg text-[#574a4a]">
          Choose meals of you choise by searching
        </p>
      </div>
      <Meals/>
    </div>
  );
};

export default MealsPage;
