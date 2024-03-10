import { BsHandbag } from "react-icons/bs";
import { Link } from "react-router-dom";
import imagem from "../assets/sabrianna-Y_bxfTa_iUA-unsplash.jpg";
import { SearchBar } from "../components/searchBar";

export function Detail() {
  return (
    <>
      <SearchBar />
      <div className="flex justify-between mt-32 ">
        <div className="ml-16  w-full bg-slate-500 rounded-md ">
          <img src={imagem} alt="" className="h-full object-cover rounded-md" />
        </div>
        <div className="flex flex-col w-full mr-20  rounded-md">
          <h1 className="text-slate-900 mx-auto mt-2 text-3xl font-semibold">
            Anel muito caro, para super ricos
          </h1>
          <div className="flex flex-col justify-center">
            <div className="flex mx-auto mt-10">
              <span className="text-slate-500 line-through mt-4 mx-2  ml-2 text-xs font-semibold">
                R$30.000,00
              </span>
              <h2 className="text-slate-900 mr-3 mt-2 text-xl font-bold">
                R$20.000,00
              </h2>
            </div>
            <div className="  h-5 mx-auto mt-10 ">
              <h3 className="font-semibold ">Ou 10x de R$2000,00 sem juros</h3>
            </div>
          </div>
          <div className="flex mx-auto mt-10">
            <button className="flex w-56 h-9   justify-between rounded-sm mr-4 border-2 border-purple-500 text-purple-500 hover:text-purple-100 bg-purple-200 font-semibold hover:bg-purple-300 ">
              <Link to="/cadastro" className="flex m-auto ">
                Adicionar ao carrinho
                <BsHandbag className="size-5 ml-1" />
              </Link>
            </button>
            <button className="flex w-56 h-9   justify-between rounded-sm mr-10  bg-purple-400 text-white font-semibold hover:bg-purple-500 hover:text-white ">
              <Link to="/cadastro" className="flex m-auto ">
                Comprar agora
              </Link>
            </button>
          </div>
          <form action="" className=" mt-10 mx-auto flex  items-center bg-slate-100">
            <input
              type="text"
              placeholder="Calcular frete"
              className=" ml-auto text-lg h-10 bg-slate-200 font-semibold  px-2 py-1 outline-none tracking-tight rounded-l-md "
            />

            <button className="  w-20 h-10 rounded-r-md bg-purple-400 text-white font-semibold hover:bg-purple-500 hover:text-white">
              calcular
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
