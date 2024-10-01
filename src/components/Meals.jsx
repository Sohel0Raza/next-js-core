"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

const Meals = () => {
  const [search, setSearch] = useState("a");
  const [error, setError] = useState();
  const [meals, setMeals] = useState([]);


  const hendleSearch = (e) => {
    setSearch(e.target.value);
  };

  const getData = async () => {
    try {
      const res = await fetch(
        `https://www.themealdb.com/api/json/v1/1/search.php?f=${search}`
      );
      const data = await res.json();
      setMeals(data.meals);
      setError();
    } catch (error) {
      setError(error.message);
    }
  };

  useEffect(() => {
    getData();
  }, [search]);

  return (
    <div className="my-5">
      <div className="text-center">
        <input
          onChange={hendleSearch}
          className="p-[14px] outline-none bg-slate-200 border-transparent"
          type="text"
          placeholder="Search"
        />
        <button
          className="p-3 bg-red-700 text-white text-lg "
        >
          Search
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {meals?.map((meal) => (
          <div className="shadow-2xl rounded" key={meal.idMeal}>
            <Image
              src={meal.strMealThumb}
              alt={meal.strMeal}
              width={300}
              height={300}
              blurDataURL={meal.strMealThumb}
              placeholder="blur"
              className="mx-auto py-5"
            ></Image>
            <h2 className="text-2xl font-bold p-5">{meal.strMeal}</h2>
          </div>
        ))}
      {error  && <h2 className="text-2xl font-semibold my-8">No Data Found</h2>}
      </div>
    </div>
  );
};

export default Meals;
