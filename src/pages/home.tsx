import reactLogo from "~/assets/react.svg";
import "~/App.css";
import { useExampleQuery } from "~/hooks/use-example-query";
import Loading from "~/components/loading";

function Home() {
  const { data, isLoading } = useExampleQuery();

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
      <div className="flex flex-col">
        {!isLoading && data ? (
          <span>Handcrafted by {data.data[0].name}</span>
        ) : (
          <Loading />
        )}
      </div>
      <p className="read-the-docs">Click on the the logos to learn more</p>
    </div>
  );
}

export default Home;
