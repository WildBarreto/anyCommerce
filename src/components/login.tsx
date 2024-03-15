import { FormikProvider, useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/auth";

interface SignInFormEntry {
  email: string;
  password: string;
}

export function Login() {
  const { signIn } = useAuth();
  const navigate = useNavigate();
  const form = useFormik<SignInFormEntry>({
    initialValues: {
      email: "",
      password: "",
    },
    // validationSchema,
    onSubmit: async (values) => {
      try {
        await signIn(values);
        navigate("/");
        alert("Login efetuado!");

        
      } catch (Error) {
        alert(Error);
      }
    },
  });

  return (
    <div className="w-full">
      <FormikProvider value={form}>
        <form onSubmit={form.handleSubmit} className="w-full">
          <label htmlFor="" className="flex flex-col w-full font-semibold">
            Email:
            <input
              name="email"
              type="email"
              placeholder="exemplo@gmail.com"
              value={form.values.email}
              onChange={form.handleChange}
              className="w-full mt-2 text-lg h-10 bg-slate-300 font-semibold px-2 py-1 rounded-md"
            />
          </label>
          <label htmlFor="" className="flex my-2 flex-col w-full font-semibold">
            Senha:
            <input
              name="password"
              type="password"
              placeholder="Digite sua senha"
              value={form.values.password}
              onChange={form.handleChange}
              className="w-full mt-2 text-lg h-10 bg-slate-300 font-semibold px-2 py-1 rounded-md"
            />
          </label>

          <button
            type="submit"
            className="w-full h-9 mt-3 bg-purple-400 rounded-md text-purple-50 font-semibold hover:bg-purple-500"
          >
            Entrar
          </button>
        </form>
      </FormikProvider>
    </div>
  );
}
