import { Card } from "../components/card";
import { SearchBar } from "../components/searchBar";
import { useAuth } from "../hooks/auth";

function App() {
  const auth = useAuth();

  console.log(auth)

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
