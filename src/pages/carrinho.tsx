import { SearchBar } from "../components/searchBar";
import { useAuth } from "../hooks/auth";




export function Carrinho() {
  const { user } = useAuth();
  return (
    <>
      <SearchBar />
      <h1 className="mt-32 text-4xl">Carrinho {user!.name}</h1>
     
    </>
  );
}