import { ChangeEvent, useEffect, useState } from "react";
import { BsHandbag } from "react-icons/bs";
import { CiLogin } from "react-icons/ci";
import { IoMdSearch } from "react-icons/io";
import { Link } from "react-router-dom";
import { useAuth } from "../hooks/auth";
import { client } from "../network/api";
import { Card } from "./card";
//import { Card } from "./card";

export interface Product {
  id: number;
  titulo: string;
  valor_antigo: number;
  valor_novo: number;
  imagem: string;
}

export function SearchBar() {
  const { signOut } = useAuth();
  const user = localStorage.getItem("user");

  const [termoBusca, setTermoBusca] = useState("");
  const [resultados, setResultados] = useState<Product[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await client.get("/product");
        const produtos: Product[] = response.data;

        if (termoBusca.trim() === "") {
          setResultados([]); // Se o termo de busca estiver vazio, limpe os resultados
        } else {
          const resultadosFiltrados = produtos.filter((produto) =>
            produto.titulo.toLowerCase().includes(termoBusca.toLowerCase())
          );
          console.log(resultados);
          setResultados(resultadosFiltrados);
        }
      } catch (error) {
        console.error("Erro ao buscar dados:", error);
      }
    };

    fetchData();
  }, [termoBusca]);

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setTermoBusca(event.target.value);
  };

  return (
    <div className="flex flex-col items-center ">
      <div className="mx-auto drop-shadow-lg drop-shadow-purple-500 flex flex-row h-20 w-full items-center bg-slate-100 fixed z-50 top-0">
        <Link to="/">
          <h1 className="text-purple-400 ml-10 text-3xl w-full">Chica Joias</h1>
        </Link>
        <form
          action=""
          className="w-[70%] mx-auto flex  items-center bg-slate-100"
        >
          <input
            type="text"
            placeholder="Busque por nome..."
            className="w-[37rem] ml-[9.3rem] text-lg h-10 bg-slate-200 font-semibold  px-2 py-1 outline-none tracking-tight rounded-l-md "
            value={termoBusca}
            onChange={handleInputChange}
          />
          <button className=" bg-slate-200 mr-auto h-10 rounded-r-md ">
            <IoMdSearch className="text-purple-400 size-9 mx-0 hover:bg-violet-300 hover:rounded-lg hover:text-slate-600" />
          </button>
        </form>
        {user ? (
          <button
            onClick={signOut}
            className="flex justify-center rounded-md w-16 h-6 text-purple-500 font-semibold hover:text-purple-700"
          >
            Sair
          </button>
        ) : (
          <button className="flex justify-center rounded-md mr-10 w-16 h-9 text-purple-500 font-semibold hover:text-purple-700">
            <Link to="/cadastro" className="m-auto">
              Login
            </Link>
            <CiLogin className="m-auto size-10" />
          </button>
        )}
        <button className="flex justify-center rounded-md mr-10 w-16 h-9 text-purple-500 font-semibold hover:text-purple-700">
          <Link to="/carrinho" className="m-auto">
            <BsHandbag className="size-6" />
          </Link>
        </button>
      </div>

      <div className="w-full h-screen  z-40 mt-20 absolute ">
        <div className="bg-slate-50 w-[48rem]  mx-auto   grid grid-cols-3 gap-4 ">
          {resultados.map((resultado) => (
            <Link to={`/produto/${resultado.id}`} key={resultado.id}>
              <div className="m-3">
                <Card product={resultado} />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
