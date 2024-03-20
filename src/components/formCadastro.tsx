import axios from 'axios'; // Importa Axios
import { ChangeEvent, FormEvent, useState } from "react";
import { v4 as uuid } from 'uuid';

interface FormData {
  id: string;
  nome: string;
  email: string;
  senha: string;
}

export function FormCadastro() {
  const [formData, setFormData] = useState<FormData>({
    id: "",
    nome: "",
    email: "",
    senha: "",
  });

  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const newUser = { ...formData, id: uuid() };
      const response = await axios.post("http://localhost:3000/users", newUser); 

      if (response.status === 201) {
        console.log("Dados salvos com sucesso!");

        setFormData({
          id: "",
          nome: "",
          email: "",
          senha: "",
        });

        alert("Cadastro realizado com sucesso!");
      } else {
        throw new Error("Erro ao salvar os dados");
      }
    } catch (error) {
      console.error("Erro ao salvar os dados:", error);
      alert(
        "Erro ao realizar o cadastro. Por favor, tente novamente mais tarde."
      );
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full">
      <label htmlFor="" className="flex flex-col w-full font-semibold">
        Nome completo:
        <input
          type="text"
          name="nome"
          value={formData.nome}
          onChange={handleChange}
          placeholder="Nome Completo"
          className="w-full mt-2 text-lg h-10 bg-slate-300 font-semibold  px-2 py-1  rounded-md "
        />
      </label>
      <label htmlFor="" className="flex my-2 flex-col w-full font-semibold">
        Email:
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="E-mail"
          className="w-full mt-2 text-lg h-10 bg-slate-300 font-semibold  px-2 py-1  rounded-md "
        />
      </label>

      <label htmlFor="" className="flex my-2 flex-col w-full font-semibold">
        Senha:
        <input
          type="password"
          name="senha"
          value={formData.senha}
          onChange={handleChange}
          placeholder="Senha"
          className="w-full mt-2 text-lg h-10 bg-slate-300 font-semibold  px-2 py-1  rounded-md "
        />
      </label>

      <button
        type="submit"
        className="w-full h-9 mt-3 bg-purple-400 rounded-md  text-purple-50 font-semibold hover:bg-purple-500  "
      >
        Cadastrar-se
      </button>
    </form>
  );
}
