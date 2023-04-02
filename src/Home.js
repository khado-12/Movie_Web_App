import Movie from "./Movie";
import Search from "./Search";
import './home.css'

const Home = () => {
  return (
    <>
      <div className="container">

        <Search />
        <Movie />
      </div>
    </>
  );
};

export default Home;
