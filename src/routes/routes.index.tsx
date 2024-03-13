import { createBrowserRouter } from "react-router-dom";
import { FormCadastro } from "../components/formCadastro";
import { Login } from "../components/login";
import Home from "../pages/Home";
import { Cadastro } from "../pages/cadastro";
import { Detail } from "../pages/detail";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "cadastro",
    element: <Cadastro />,
    children: [
      {
        path: "formCadastro",
        element: <FormCadastro />,
      },
      {
        path: "login",
        element: <Login />,
      },
    ],
  },
  {
    path: "/produto",
    element: <Detail />,
  },
]);

export default router;
