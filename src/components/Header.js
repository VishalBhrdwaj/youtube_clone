import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "./util/appSlice";
import {addCache} from "./util/cacheSlice"
import { YOUTUBE_SEARCH_API } from "./util/const";
import store from "./util/store";

const Header = () => {
  const dispatch = useDispatch();
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestion, setShowSuggestion] = useState(false);
  const cacheData=useSelector(store=>store.cache)


  function toggleMenuHandele() {
    dispatch(toggleMenu());
  }

  const getSearchData = async () => {
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const json = await data.json();
    setSuggestions(json[1]);
    dispatch(addCache({
        [searchQuery]:json[1]
    }));
  };
  useEffect(() => {
    const timer = setTimeout(() => {
        if(cacheData[searchQuery])
        setSuggestions(cacheData[searchQuery])
        else
        getSearchData()
    }, 200);
    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);
  return (
    <div className="grid grid-flow-col shadow-lg px-3 py-3">
      <div className="flex col-span-1">
        <div>
          <img
            className="h-8 cursor-pointer"
            onClick={() => toggleMenuHandele()}
            alt="icon"
            src="https://i0.wp.com/css-tricks.com/wp-content/uploads/2012/10/threelines.png"
          />
        </div>
        <div>
          <img
            alt="youtube"
            className="h-8"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/YouTube_Logo_%282013-2017%29.svg/1280px-YouTube_Logo_%282013-2017%29.svg.png"
          />
        </div>
      </div>

      <div className="col-span-10 pt-1 pl-72">
        <div>
          <input
            value={searchQuery}
            onFocus={() => setShowSuggestion(true)}
            onBlur={() => setShowSuggestion(false)}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-1/2 border px-5 border-gray-400 p-1 rounded-l-full"
            type="text"
          />
          <button className="border border-gray-400 p-1 px-4  bg-gray-100 rounded-r-full">
            🔍
          </button>
        </div>
        {showSuggestion && (
          <div className="fixed bg-white w-[25rem] px-5 py-2 rounded-lg">
            <ul>
              {suggestions.map((suggestion, index) => {
                return (
                  <li
                    key={index}
                    className="py-2 shadow-sm cursor-pointer hover:bg-gray-200"
                  >
                    🔍 {suggestion}
                  </li>
                );
              })}
            </ul>
          </div>
        )}
      </div>

      <div className="col-span-2">
        <img
          className="h-10"
          alt="user"
          src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
        />
      </div>
    </div>
  );
};

export default Header;
