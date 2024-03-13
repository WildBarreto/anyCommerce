import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { FormCadastro } from "../components/formCadastro";
import { Login } from "../components/login";
//import { Login } from "../components/login";

export function Cadastro() {
  const [mostrarLogin, setMostrarLogin] = useState(true);
  const [mostrarCadastro, setMostrarCadastro] = useState(false);
  const botaoEntrarRef = useRef(null);

  const mostrarComponenteLogin = () => {
    setMostrarLogin(true);
    setMostrarCadastro(false);
  };

  const mostrarComponenteCadastro = () => {
    setMostrarCadastro(true);
    setMostrarLogin(false);
  };

  return (
    <>
      <div className="mx-auto   bg-slate-100 overflow-y-hidden flex">
        <Link to="/" className="text-6xl  text-purple-400 mx-auto">
          <h1>CJ</h1>
        </Link>
      </div>
      <div className="w-full h-1 drop-shadow-lg bg-purple-400  " />

      <div className=" w-[30%] h-full my-10 mx-auto flex flex-col items-start p-6 bg-slate-200 rounded-md ">
        <h1 className="mx-auto text-2xl mb-5">Junte-se a nós</h1>
        <div>
          <button
            ref={botaoEntrarRef}
            onClick={mostrarComponenteLogin}
            className="mr-6 font-semibold  focus:text-purple-400"
          >
            Entrar
          </button>
          <button
            onClick={mostrarComponenteCadastro}
            className="font-semibold focus:text-purple-400"
          >
            Cadastrar-se
          </button>
        </div>
        <div className="w-full h-0.5 bg-purple-400 mb-4" />
        {mostrarLogin && <Login />}
        {mostrarCadastro && <FormCadastro />}
        {/* <FormCadastro />*/}
        {/*<Login/>*/}
      </div>
    </>
  );
}
