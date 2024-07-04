import { Heart, HeartPulseIcon, Soup, Youtube } from "lucide-react";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import DishDetailPage from "../Pages/DishDetailPage";

const twoArrValues = (arr) => {
  return [arr[0], arr[1]];
};

const RecipeCard = ({ recipe, bg, badge }) => {
  const navigate = useNavigate();

  const healthLabel = twoArrValues(recipe.healthLabels);

  const [isFav, setIsFav] = useState(
    localStorage.getItem("favourites")?.includes(recipe.label)
  );
  const addToFavourites = () => {
    let favourites = JSON.parse(localStorage.getItem("favourites")) || [];
    const alreadyInFav = favourites.some((fav) => fav.label === recipe.label);

    if (alreadyInFav) {
      favourites = favourites.filter((fav) => fav.label !== recipe.label);
      setIsFav(false);
    } else {
      favourites.push(recipe);
      setIsFav(true);
    }

    localStorage.setItem("favourites", JSON.stringify(favourites));
  };

 

  const handleCardClick = (uri) => {
    navigate(`/dish/${encodeURIComponent(uri)}`);
  };

  return (
    <div
    onClick={() => handleCardClick(recipe?.uri)}
      className={`flex flex-col rounded-md ${bg} overflow-hidden p-3 relative hover:scale-105 shadow-md transform transition duration-300 ease-in-out hover:shadow-lg`}
    >
      <div className="relative h-32">
        <div className="skeleton absolute inset-0" />
        <img
          src={recipe?.image}
          alt="recipe img"
          className="rounded-md w-full h-full object-cover cursor-pointer opacity-0 transition-opacity duration-400"
          onLoad={(e) => {
            e.currentTarget.style.opacity = 1;
            e.currentTarget.previousElementSibling.style.display = "none";
          }}
        />
        <div
          className="absolute bottom-2 left-2 bg-white rounded-full p-1
               cursor-pointer flex items-center gap-1 text-sm"
        >
          <Soup size={"16"} /> {recipe?.yield} Servings
        </div>
        <div
          onClick={(e) => {
            e.preventDefault();
            addToFavourites();
          }}
          className="absolute top-1 right-2 bg-white rounded-full p-1 cursor-pointer"
        >
          {!isFav && (
            <Heart
              size={20}
              className="hover:fill-rose-400 hover:text-rose-500"
            />
          )}
          {isFav && <Heart size={20} className="fill-rose-600 text-rose-500" />}
        </div>
      </div>

      <div className="flex mt-1">
        <p className="font-bold tracking-wide">{recipe.label}</p>
      </div>

      <p className="my-2 text-zinc-700">
        {recipe.cuisineType[0].charAt(0).toUpperCase() +
          recipe.cuisineType[0].slice(1)}{" "}
        Kitchen
      </p>

      <div className="flex justify-around mt-auto">
        {healthLabel.map((label, i) => (
          <div
            key={i}
            className={`flex gap-1 ${badge} items-center p-1 rounded-md`}
          >
            <HeartPulseIcon size={"16"} />
            <span className="text-sm tracking-tighter font-semibold">
              {label}
            </span>
          </div>
        ))}
        <a
          href={`https://www.youtube.com/results?search_query=${recipe.label} recipe`}
          target="_blank"
          className="relative"
        >
          <div className="hover:scale-125 transition ease-in duration-75">
            <Youtube />
          </div>
        </a>
      </div>
      <div className="hidden">
          <DishDetailPage rec={recipe} />
        </div>
    </div>
  );
};

export default RecipeCard;
