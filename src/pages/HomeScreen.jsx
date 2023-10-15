import "./HomeScreen.css";
import Navbar from "../Components/Navbar";
import Banner from "../Components/Banner";
import requests from "../../utils/request";
import Row from "../Components/Row";

function HomeScreen() {
  return (
    <div className="homeScreen">
      <Navbar />
    
      <Banner />
      

      <Row 
      title="NETFLIX ORIGINALS"
      fetchURL={requests.fetchNetflixOriginals}
      isLargeRow
      />
      <Row title="Trending Now" fetchURL={requests.fetchTrending} />
      <Row title="Top Rated" fetchURL={requests.fetchTopRated} />
      <Row title="Action Movies" fetchURL={requests.fetchActionMovies} />
      <Row title="Comedy Movies" fetchURL={requests.fetchComedyMovies} />
      <Row title="Horror Movies" fetchURL={requests.fetchHorrorMovies} />
      <Row title="Romance Movies" fetchURL={requests.fetchRomanceMovies} />
      <Row title="Documentaries" fetchURL={requests.fetchDocumentaries} />
    </div>
  );
}

export default HomeScreen;
