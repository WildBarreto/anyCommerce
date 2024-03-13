import { Card } from "../components/card";
import { SearchBar } from "../components/searchBar";

function App() {
  return (
    <>
      <SearchBar />
      <div className=" flex flex-wrap justify-between w-[80%] mx-auto mt-32 ">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
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
