import { useParams } from "react-router-dom";
import { RecipesContext } from "../context/RecipesContext";
import { useContext } from "react";

const DishDetailPage = () => {
  const { uri } = useParams();
  const decodedUri = decodeURIComponent(uri);

  const { recipes, fetchRecipes, loading } = useContext(RecipesContext);

  const recipe = recipes.find((rec) => rec.recipe.uri === decodedUri);
  console.log("Single Dish ==>", recipe);
  const res = recipe?.recipe;

  const importantNutrients = [
    "ENERC_KCAL",
    "PROCNT",
    "FAT",
    "CHOCDF",
    "FIBTG",
    "SUGAR",
  ];

  const cuisineType = res?.cuisineType[0] || "";
  const capitalizedCuisineType =
    cuisineType.charAt(0).toUpperCase() + cuisineType.slice(1);

  const dishType = res?.dishType ? res.dishType[0] : "";
  const capitalizedDishType =
    dishType.charAt(0).toUpperCase() + dishType.slice(1);

  const mealType = res?.mealType ? res?.mealType[0] : "";
  const capitalizedMealType =
    mealType.charAt(0).toUpperCase() + mealType.slice(1) 

  return (
    <div class="flex flex-col items-center justify-center py-12 px-6 md:px-12 lg:px-24 bg-pink-50">
      <h1 class="text-3xl md:text-4xl font-bold mb-4 text-pink-600">
        {res?.label}
      </h1>

      <img
        src={res?.images?.THUMBNAIL?.url}
        alt={res?.label}
        class="w-48 h-48 rounded-full mb-4 shadow-md hover:shadow-lg"
      />

      <div class="flex flex-col md:flex-row justify-center mb-4">
        <h1
          class="text-xl bg-gradient-to-r from-rose-200 to-pink-50
        hover:bg-gradient-to-r hover:from-sky-200 hover:to-sky-50
        px-4 py-2 rounded-full text-sky-500 cursor-pointer mb-2 font-semibold hover:scale-110 transition ease-out duration-150 hover:rounded-full md:mr-4"
        >
          <strong className="text-rose-500">Cuisine Type:</strong>
          {"  "}
          {capitalizedCuisineType}
        </h1>
        <h1
          class="text-xl bg-gradient-to-r from-rose-200 to-pink-50
        hover:bg-gradient-to-r hover:from-sky-200 hover:to-sky-50
        px-4 py-2 rounded-full text-sky-500 cursor-pointer mb-2 font-semibold hover:scale-110 transition ease-out duration-150 hover:rounded-full md:mr-4"
        >
          <strong className="text-rose-500">Dish Type:</strong>
          {"  "}
          {capitalizedDishType}
        </h1>
        <h1
          class="text-xl bg-gradient-to-r from-rose-200 to-pink-50
        hover:bg-gradient-to-r hover:from-sky-200 hover:to-sky-50
        px-4 py-2 rounded-full text-sky-500 cursor-pointer mb-2 font-semibold hover:scale-110 transition ease-out duration-150 hover:rounded-full md:mr-4"
        >
          <strong className="text-rose-500">Meal Type:</strong>
          {"  "}
          {capitalizedMealType}
        </h1>
      </div>

      <h1
        class="text-xl mb-4 shadow-lg md:py-4 rounded-xl px-8 py-2 
        
        bg-gradient-to-r from-sky-200 to-sky-50
     tranisiton ease-in-out duration-150  hover:shadow-blue-300 text-rose-500 font-semibold w-3/4"
      >
        <strong className="text-2xl text-blue-500 font-extrabold">
          {" "}
          Ingredients 😋:{" "}
        </strong>{" "}
        {res?.ingredientLines.join(", ")}
      </h1>

      <div class="flex flex-col md:flex-row justify-center mb-4">
        <h1
          class="text-xl   bg-green-200
       
        px-4 py-2 rounded-xl text-green-600 cursor-pointer mb-2 font-semibol md:mr-4"
        >
          <strong className="text-green-800">Total Time:</strong>
          {"  "}

          <b>{res?.totalTime || "24"} minutes ⌛</b>
        </h1>
        <h1
          class="text-xl   bg-green-200
       
        px-4 py-2 rounded-xl text-green-600 cursor-pointer mb-2 font-semibol md:mr-4"
        >
          <strong className="text-green-800">Calories:</strong>
          {"  "}

          <b>{res?.calories.toFixed(2).replace(/\.00$/, "")} kcal</b>
        </h1>
      </div>

      <div class="bg-zinc-200 p-4  rounded-md mb-4 shadow-md hover:shadow-lg">
        <h2 class="text-2xl font-bold mb-2 text-stone-900">
          Key Nutritional Information 🤓 :
        </h2>
        {importantNutrients.map((key) => (
          <div key={key} class="flex items-center mb-2">
            <strong class="mr-2 text-stone-700">
              {res?.totalNutrients[key].label}:
            </strong>
            <span className="font-bold text-stone-500">
              {res?.totalNutrients[key].quantity
                .toFixed(2)
                .replace(/\.00$/, "")}{" "}
              <span className="">{res?.totalNutrients[key].unit}</span>
            </span>
          </div>
        ))}
      </div>

      <h1 class="text-xl mb-2 bg-rose-400 text-white px-3 py-2 rounded-xl">
        Allergies/Cautions: {res?.cautions} kcal
      </h1>

      <div className="flex text-xl text-white px-3 py-2 rounded-xl  font-bold bg-black hover:bg-zinc-200 cursor-pointer hover:text-black">
        <p className="mr-4">Source : </p>
        <a target="_blank" href={res?.url} class="hover:text-blue-700 ">
          {res?.source} 🔗
        </a>
      </div>

      <h1 class="text-lg mb-4 mt-2 bg-rose-400 text-white  px-3 py-2 rounded-lg font-bold">
        Total Weight: {res?.totalWeight.toFixed(2)} g
      </h1>
    </div>
  );
};

export default DishDetailPage;
