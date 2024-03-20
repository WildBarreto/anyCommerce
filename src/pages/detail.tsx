import { useEffect, useState } from "react";
import { BsHandbag } from "react-icons/bs";
import { Link, useParams } from "react-router-dom";
import { SearchBar } from "../components/searchBar";
import { useProducts } from "../hooks/products";
import { client } from "../network/api";

interface ProductData {
  imagem: string;
  titulo: string;
  valor_antigo: number;
  valor_novo: number;
}

export function Detail() {
  const [productData, setProductData] = useState<ProductData | null>(null);
  const { addToCart } = useProducts();

  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await client.get(`/product/${id}`);
        setProductData(response.data);
      } catch (error) {
        console.error("Erro ao buscar dados:", error);
      }
    };

    fetchData();
  }, [id]);

  // Verifica se productData não é null antes de desestruturá-lo
  const { imagem, titulo, valor_antigo, valor_novo } = productData || {};

  {
    /*console.log(products)*/
  }
  return (
    <>
      <SearchBar />
      <div className="flex justify-between mt-32 ">
        <div className="h-96 ml-16  w-full bg-slate-500 rounded-md ">
          <img
            src={imagem}
            alt=""
            className="h-full w-full object-fill rounded-md"
          />
        </div>
        <div className="flex flex-col justify-center w-full mr-10  rounded-md">
          <h1 className="text-slate-900 mx-auto mt-2 text-3xl font-semibold">
            {titulo}
          </h1>
          <div className="flex flex-col justify-center">
            <div className="flex mx-auto mt-10">
              <span className="text-slate-500 line-through mt-4 mx-2  ml-2 text-xs font-semibold">
                R${valor_antigo}
              </span>
              <h2 className="text-slate-900 mr-3 mt-2 text-xl font-bold">
                R${valor_novo}
              </h2>
            </div>
            <div className="  h-5 mx-auto mt-10 ">
              {valor_novo && (
                <h3 className="font-semibold">
                  Ou 10x de R${(valor_novo / 10).toFixed(2)} sem juros
                </h3>
              )}
            </div>
          </div>
          <div className="flex mx-auto mt-10">
            <button
              onClick={() => addToCart(productData!)}
              className="flex w-56 h-9   justify-between rounded-md mr-4 border-2 border-purple-500 text-purple-500 hover:text-purple-100 bg-purple-200 font-semibold hover:bg-purple-300 "
            >
              <div className="flex m-auto ">
                Adicionar ao carrinho
                <BsHandbag className="size-5 ml-1" />
              </div>
            </button>
            <Link
              to="/carrinho"
              className="flex w-56 h-9   justify-between rounded-md   bg-purple-400 text-white font-semibold hover:bg-purple-500 hover:text-white"
            >
              <button onClick={() => addToCart(productData!)} className=" flex m-auto">
                Comprar agora
              </button>
            </Link>
          </div>
          <form
            action=""
            className=" mt-10 mx-auto flex  items-center bg-slate-100"
          >
            <input
              type="text"
              placeholder="CEP  0000 - 0000"
              className=" ml-auto text-lg h-10 bg-slate-200 font-semibold  px-2 py-1 outline-none tracking-tight rounded-l-md "
            />

            <button className="  w-20 h-10 rounded-r-md bg-purple-400 text-white font-semibold hover:bg-purple-500 ">
              calcular
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
