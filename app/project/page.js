"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import data from "../data.json";
import Navbar from "../navbar/page";
import Mainbody from "../mainbody/page";
import Movieslist from "../Movies/page";
import Tvserieslist from "../Tvseries/page";
import Bookmarklist from "../Bookmark/page";
import Searchbar from "../search/pages";
import Searchresult from "../searchresult/page";
function Project() {
  const [AllMovies, setAllMovies] = useState([]);
  const [Book, setBook] = useState([]);
  useEffect(() => {
    setAllMovies(data);
    console.log(AllMovies);
  });
  const [All, SetAll] = useState(true);
  const [Movies, SetMovies] = useState(false);
  const [Tvseries, SetTvseries] = useState(false);
  const [Bookmark, SetBookmark] = useState(false);
  const [Searchpost, setSearchpost] = useState(false);
  const [Search, setSearch] = useState("");
  function handleSearch() {
    if (Search !== "") {
      console.log(Search);
      SetAll(false);
      SetBookmark(false);
      SetMovies(false);
      SetTvseries(false);
      setSearchpost(true);
    } else {
      console.log(search);
    }
  }
  return (
    <div className="main flex">
      <Navbar
        All={All}
        Movies={Movies}
        Tvseries={Tvseries}
        Bookmark={Bookmark}
        Searchpost={Searchpost}
        setSearchpost={setSearchpost}
        SetAll={SetAll}
        SetMovies={SetMovies}
        SetTvseries={SetTvseries}
        SetBookmark={SetBookmark}
        setSearch={setSearch}
      />
      <div>
        <Searchbar
          Search={Search}
          setSearch={setSearch}
          handleSearch={handleSearch}
        />
        {All && <Mainbody AllMovies={AllMovies} />}
        {Movies && (
          <Movieslist AllMovies={AllMovies} Book={Book} setBook={setBook} />
        )}
        {Tvseries && <Tvserieslist AllMovies={AllMovies} />}
        {Bookmark && <Bookmarklist Book={Book} />}
        {Searchpost && <Searchresult AllMovies={AllMovies} Search={Search} />}
      </div>
    </div>
  );
}

export default Project;
