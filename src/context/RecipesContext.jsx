import React, { createContext, useState, useEffect } from 'react';

export const RecipesContext = createContext();

const APP_ID = import.meta.env.VITE_APP_ID;
const APP_KEY = import.meta.env.VITE_APP_KEY;


export const RecipesProvider = ({ children }) => {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchRecipes = async (searchQuery) => {
    setLoading(true);
    setRecipes([]);

    try {
        const res = await fetch(
          `https://api.edamam.com/api/recipes/v2/?app_id=${APP_ID}&app_key=${APP_KEY}&q=${searchQuery}&type=public`
        );
      const data = await res.json();
      setRecipes(data.hits);
    } catch (error) {
      console.log(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchRecipes('paneer');
  }, []);

  return (
    <RecipesContext.Provider value={{ recipes, fetchRecipes, loading }}>
      {children}
    </RecipesContext.Provider>
  );
};
