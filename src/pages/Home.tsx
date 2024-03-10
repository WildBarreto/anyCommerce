import { Card } from "../components/card";
import { SearchBar } from "../components/searchBar";

function App() {
  return (
    <>
      <SearchBar />
      <div className="flex">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </>
  );
}

export default App;
