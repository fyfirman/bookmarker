import BookmarkGrid from "~/components/bookmark-grid";
import Navbar from "~/components/navbar";

function Home() {
  return (
    <div className="bg-gray-50">
      <Navbar />
      <div className="px-8">
        <BookmarkGrid />
        <div className="flex flex-col">
          <span>Handcrafted by fyfirman</span>
        </div>
      </div>
    </div>
  );
}

export default Home;
