import reactLogo from "~/assets/react.svg";
import "~/App.css";
import Loading from "~/components/loading";
import { useBookmarkQuery } from "~/hooks/use-bookmark-query";

function Home() {
  const { data, isLoading } = useBookmarkQuery();

  return (
    <div className="App">
      <div className="flex flex-row justify-center">
        <a href="https://vitejs.dev" rel="noreferrer" target="_blank">
          <img alt="Vite logo" className="logo" src="/vite.svg" />
        </a>
        <a href="https://reactjs.org" rel="noreferrer" target="_blank">
          <img alt="React logo" className="logo react" src={reactLogo} />
        </a>
      </div>
      <h1>Bookmarker</h1>
      {!isLoading && data ? <code>{JSON.stringify(data)}</code> : <Loading />}
      <div className="flex flex-col">
        <span>Handcrafted by fyfirman</span>
      </div>
      <p className="read-the-docs">Click on the the logos to learn more</p>
    </div>
  );
}

export default Home;
