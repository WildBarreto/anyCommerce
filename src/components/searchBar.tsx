import { BsHandbag } from "react-icons/bs";
import { CiLogin } from "react-icons/ci";
import { IoMdSearch } from "react-icons/io";

import { Link } from "react-router-dom";
import { useAuth } from "../hooks/auth";

export function SearchBar() {
  const { signOut } = useAuth();
  const user = localStorage.getItem("user");

  return (
    <>
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
            className="w-[60%] ml-auto text-lg h-10 bg-slate-200 font-semibold  px-2 py-1 outline-none tracking-tight rounded-l-md "
          />

          <button className=" bg-slate-200 mr-auto h-10 rounded-r-md ">
            <IoMdSearch className="text-purple-400 size-9 mx-0 hover:bg-violet-300 hover:rounded-lg hover:text-slate-600" />
          </button>
        </form>

        {user ? (
          <>
            <button
              onClick={signOut}
              className="flex justify-center rounded-md  w-16 h-6 text-purple-500 font-semibold hover:text-purple-700"
            >
              Sair
            </button>
          </>
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
    </>
  );
}
