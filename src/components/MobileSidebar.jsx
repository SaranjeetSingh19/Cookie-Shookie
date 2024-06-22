import { Heart, Home } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

const MobileSidebar = () => {
  return (
    <div className="flex justify-center gap-10 border-t
     fixed w-full bottom-0 left-0  bg-gradient-to-t from-pink-300 to-pink-50 z-10
      p-2 sm:hidden">
         <Link to={"/"} className="flex gap-1">
            <Home size={"24"}  />
            <span className="font-bold hidden md:block">Home</span>
          </Link>
          <Link to={"/favourites"} className="flex gap-1">
            <Heart size={"24"} />
            <span className="font-bold hidden md:block">Favourites</span>
          </Link>
      </div>
  );
};

export default MobileSidebar;
