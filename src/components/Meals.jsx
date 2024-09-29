"use client";
import { useEffect, useState } from "react";

const Meals = () => {
  const [search, setSearch] = useState("");
  const [meals, setMeals] = useState([]);
console.log('✌️meals --->', meals);

  const hendleSearch = (e) => {
    e.preventDefault();
    setSearch(e.target.value);
  };

  const getData = async () => {
    try {
      const res = await fetch(
        `https://www.themealdb.com/api/json/v1/1/search.php?f=${search}`
      );
      console.log("✌️res --->", res);
      const data = await res.json();
      setMeals(data.meals);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, [search]);

  return (
    <div className="text-center my-5">
      <input
        onChange={hendleSearch}
        className="p-[14px] outline-none bg-slate-200 border-transparent"
        type="text"
        placeholder="Search"
      />
      <button onClick={getData} className="p-3 bg-red-700 text-white text-lg ">Search</button>
      <div>
        {
            meals?.map(meal => <div key={meal.idMeal}>
                <h2>{meal.strMeal}</h2>
            </div>)
        }
      </div>
    </div>
  );
};

export default Meals;
