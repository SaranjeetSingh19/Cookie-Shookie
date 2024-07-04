import { Route, Routes } from "react-router-dom";
import DishDetailPage from "./Pages/DishDetailPage";
import Favourite from "./Pages/Favourite";
import Homepage from "./Pages/Homepage";
import Sidebar from "./components/Sidebar";
import { RecipesProvider } from "./context/RecipesContext";

function App() {
  return <div className="flex">
    <RecipesProvider>
    <Sidebar />
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/favourites" element={<Favourite />} />
      <Route path="/dish/:uri" element={<DishDetailPage />} />
    </Routes>
    </RecipesProvider>
  </div>;
}

export default App;
