import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";
import { HiEllipsisVertical, HiBars3BottomRight } from "react-icons/hi2";
import { GifState } from "../context/gif-context";
import GifSearch from "./GifSearch";

const Header = () => {
  const [categories, setCategories] = useState([]);
  const [showCategoreies, setShowCategories] = useState(false);

  const { gf, favorites, filter, setFilter } = GifState();

  const fetchgifCategories = async () => {
    const { data } = await gf.categories();
    setCategories(data);
  }

  useEffect(() => {
    fetchgifCategories()
  }, [])

  return (
    <nav>
      <div className="relative flex gap-2 justify-between items-center ">

        <Link to="/" className=" flex items-baseline gap-2 mt-2 ml-4">
          <img src={logo} alt="Giphy Logo" className="w-6" />
          <h1 className=" text-xl mt-2 font-bold tracking-tight cursor-pointer">GIPHYLe</h1>
        </Link>


        { /* render categories*/}
        <div className="font-bold  text-md flex justify-between gap-4 items-center  mt-2 mr-2">
          {categories?.slice(0, 7).map((category) => {
            return (<Link
              key={category.name}
              to={`/${category.name_encoded}`}
              className="hover:bg-slate-500 py-2 px-2 border-b-2 hover:gradient hidden lg:block  ">
              {category.name}</Link>)
          })}



          <button onClick={() => setShowCategories(!showCategoreies)}
          ><HiEllipsisVertical
              size={35}
              className={`py-0.5 transiton ease-out hover:gradient ${showCategoreies ? 'gradient' : ''
                }border-b-2 cursor-pointer hidden lg:block`} />
          </button>

          {favorites.length > 0 && (
            <div className="h-9 bg-slate-400 pt-1.5 px-6 hover:gradient cursor-pointer rounded">
              <Link to='/favorites'>Favorites Gifs</Link>

            </div>)}

          <button onClick={() => setShowCategories(!showCategoreies)}>
            <HiBars3BottomRight
              size={30}
              className="text-sky-700 block  lg:hidden " /></button></div>


        {showCategoreies && (
          <div className="absolute right-0 top-14 mt-7 px-10 pt-6 pb-9 w-full gradient z-20">
            <span className="text-3xl font-extrabold">Categories</span>
            <hr className="bg-gray-100 opacity-50 my-5" />
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
              {categories?.map((category) => {
                return <Link
                  onClick={() => setShowCategories(false)}
                  key={category.name}
                  to={`/${category.name_encoded}`}
                  className="font-boldS">{category.name}</Link>
              })}

            </div>
          </div>
        )}
      </div>
      <GifSearch filter={filter} setFilter={setFilter} />
    </nav >
  );
};

export default Header;
