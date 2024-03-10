import imagem from "../assets/sabrianna-Y_bxfTa_iUA-unsplash.jpg";
import { SearchBar } from "../components/searchBar";

export function Detail() {
  return (
    <>
      <SearchBar />
      <div className="flex justify-between mt-32 bg-slate-300">
        <div className="ml-16 size-96 w-full bg-slate-500 rounded-md ">
          <img src={imagem} alt="" className="h-full object-cover rounded-md" />
        </div>
        <div className="flex flex-col w-full mr-20 bg-slate-100">
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
            <div className="  h-5 mx-auto mt-10 bg-white">
              <h3 className="font-semibold ">Ou 10x de R$2000,00 sem juros</h3>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
