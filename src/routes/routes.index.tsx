import { createBrowserRouter } from "react-router-dom";
import { FormCadastro } from "../components/formCadastro";
import { Login } from "../components/login";
import Home from "../pages/Home";
import { Cadastro } from "../pages/cadastro";
import { Carrinho } from "../pages/carrinho";
import { Detail } from "../pages/detail";
import PrivateRoute from "./privateRoute";

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
    path: "/produto/:id",
    element: <Detail />,
  },
  {
    path: "/carrinho",
    element: (
      <PrivateRoute>
        <Carrinho />
      </PrivateRoute>
    ),
  },
]);

export default router;
