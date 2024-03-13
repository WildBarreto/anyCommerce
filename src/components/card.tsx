import joia from "../assets/sabrianna-Y_bxfTa_iUA-unsplash.jpg";

export function Card() {
  return (
    <div className="flex flex-row mx-0 ">
      <div className="  h-80 w-64  rounded-md  mb-6 bg-slate-200 cursor-pointer">
        <div className="h-[60%] bg-white w-full ">
          <img src={joia} alt="" className="h-48 object-cover rounded-t-md" />
        </div>
        <div className="flex flex-col ">
          <h1 className="text-slate-900 mx-auto mt-2 text-md font-semibold">
            Anel muito caro, para ricos
          </h1>
          <div className="flex flex-wrap justify-center">
            <span className="text-slate-500 line-through mt-4 mx-2  ml-2 text-xs font-semibold">
              R$30.000,00
            </span>
            <h2 className="text-slate-900 mr-3 mt-2 text-xl font-bold">
              R$20.000,00
            </h2>
            <div className="flex ml-1 h-5 ">
              <h3 className="font-semibold ">
                Ou 10x de R$2000,00 sem juros
              </h3>
            </div>
           
          </div>
        </div>
      </div>
    </div>
  );
}
