import React from "react";
import RecipeCard from "../components/RecipeCard";
import { randomColor } from "../utils/randomColor";

const Favourite = () => {
  const fav = JSON.parse(localStorage.getItem("favourites")) || [];

  return (
    <div className="bg-pink-50 flex-1 p-10 min-h-screen">
      <div className="mx-auto max-w-screen-lg">
        <h1 className="font-bold text-3xl my-4 md:text-5xl border-b-2 border-rose-300">
          My Favourites.
        </h1>

        {fav.length === 0 && (
          <div className="h-[70vh] flex flex-col items-center gap-4">
            <img src="/404.svg" alt="not found" className="h-3/4" />
          </div>
        )}

        
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {
              fav.map((f) => (
                <RecipeCard key={f.label} recipe={f} {...randomColor()} />
              ))
            }
          </div>
        
      </div>
    </div>
  );
};

export default Favourite;
