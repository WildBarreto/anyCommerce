export function Login() {
  return (
    <form action="" className="w-full">
      <label htmlFor="" className="flex flex-col w-full font-semibold">
        Email:
        <input
          placeholder="exemplo@gmail.com"
          type="email"
          className="w-full mt-2 text-lg h-10 bg-slate-300 font-semibold  px-2 py-1  rounded-md "
        />
      </label>
      <label htmlFor="" className="flex my-2 flex-col w-full font-semibold">
        Senha:
        <input
          placeholder="Digite sua senha"
          type="password"
          className="w-full mt-2 text-lg h-10 bg-slate-300 font-semibold  px-2 py-1  rounded-md "
        />
      </label>

      <button className="w-full h-9 mt-3 bg-purple-400 rounded-md  text-purple-50 font-semibold hover:bg-lime-500 ">
        Entrar
      </button>
    </form>
  );
}
