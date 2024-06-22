import { Route, Routes } from "react-router-dom";
import Homepage from "./Pages/Homepage";
import Sidebar from "./components/Sidebar";
import Favourite from "./Pages/Favourite";

function App() {
  return <div className="flex">
    <Sidebar />
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/favourites" element={<Favourite />} />
    </Routes>
  </div>;
}

export default App;
