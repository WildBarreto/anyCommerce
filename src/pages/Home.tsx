import { useEffect, useState } from "react";
import { Card } from "../components/card";
import { SearchBar } from "../components/searchBar";
import { client } from "../network/api";

export interface Product {
  id: number;
  titulo: string;
  valor_antigo: number;
  valor_novo: number;
  imagem: string;
}

function App() {
  const [data, setData] = useState<Product[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await client.get("/product");
        setData(response.data);
      } catch (error) {
        console.error("Erro ao buscar dados:", error);
      }
    };

    fetchData();
  }, []);

  console.log(data);

  if (!data || !data.length) return null;

  return (
    <>
      <SearchBar />

      <div className="flex flex-wrap justify-between w-[80%] mx-auto mt-32">
        {data.map((product) => (
          <Card key={product.id} product={product} />
        ))}
      </div>
    </>
  );
}

export default App;
