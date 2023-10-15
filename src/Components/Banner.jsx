import "./Banner.css";
import axios from "../../utils/axios.js";
import requests from "../../utils/request.js";
import { useEffect, useState } from "react";

function Banner() {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const request = await axios.get(requests.fetchNetflixOriginals);
        const randomIndex = Math.floor(
          Math.random() * request.data.results.length - 1
        );
        const randomMovie = request.data.results[randomIndex];
        setMovie(randomMovie);
        return request;
      } catch (error) {
        console.error(error);
        throw error;
      }
    }
    fetchData()
  }, []);

  console.log("movie", movie);

  const truncate = (str, n) => {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  };

  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
        backgroundPosition: "center center",
      }}
    >
      <div className="banner-container">
        <h1 className="banner-title">{movie?.title || movie?.name || movie?.original_name} </h1>
        <div className="banner-buttons">
          <button className="banner-button">Play</button>
          <button className="banner-button">My List</button>
        </div>
        <h1 className="banner-description">
          {truncate(movie?.overview, 150)}
        </h1>
        <div className="banner--fadeBottom" />
      </div>
    </header>
  );
}

export default Banner;
