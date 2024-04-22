import MovieVideo from "../components/movieVideos";
import Navbar from "../components/navBar";
import RecentlyAdded from "../components/recentlyAdded";

function Home() {
  return (
    <div className="p-5 lg:p-0">
      <MovieVideo />
      <h1 className="text-3xl font-bold">Recently Added</h1>
      <RecentlyAdded />
    </div>
  );
}

export default Home;
