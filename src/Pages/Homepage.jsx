import { Search } from "lucide-react";
import React, { useContext, useEffect, useState } from "react";
import RecipeCard from "../components/RecipeCard";
import { randomColor } from "../utils/randomColor";
import DishDetailPage from "./DishDetailPage";
import { RecipesContext } from "../context/RecipesContext";

const Homepage = () => {
  const { recipes, fetchRecipes, loading } = useContext(RecipesContext);

  const submitHandler = (e) => {
    e.preventDefault();
    fetchRecipes(e.target[0].value);
  };

  return (
    <div className="bg-pink-50 p-10 flex-1">
      <div className="max-w-screen-lg mx-auto">
        <form onSubmit={submitHandler}>
          <label className="input shadow-md flex items-center gap-2">
            <Search size={"24"} />
            <input
              type="text"
              className="text-sm md:text-lg grow"
              placeholder="What do you want to cook today?"
            />
          </label>
        </form>

        <h1 className="font-bold text-3xl md:text-5xl mt-4">
          Recommended Recipes
        </h1>
        <p className="text-zinc-500 font-semibold ml-1 my-2 tracking-tighter text-sm">
          Popular choices
        </p>

        <div className="grid gap-3 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {!loading &&
            recipes.map(({ recipe }, i) => (
              <RecipeCard key={i} recipe={recipe} {...randomColor()} />
            ))}

          {loading &&
            [...Array(9)].map((_, index) => (
              <div key={index} className="flex flex-col gap-4 w-full">
                <div className="skeleton h-32 w-full"></div>
                <div className="flex justify-between">
                  <div className="skeleton h-4 w-28"></div>
                  <div className="skeleton h-4 w-24"></div>
                </div>
                <div className="skeleton h-4 w-1/2"></div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Homepage;
