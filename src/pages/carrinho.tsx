import { SearchBar } from "../components/searchBar";
import { useProducts } from "../hooks/products";

export function Carrinho() {
  const { products } = useProducts();

  let total = 0;

  const calcularTotal = () => {
    for (const product of products) {
      total += product.valor_novo;
    }
    return total;
  };

  {
    calcularTotal().toFixed(2);
  }

  return (
    <>
      <SearchBar />
      <div className="ml-10 mt-32">
        <h1 className="text-4xl">Carrinho de compras</h1>
        <div className="flex justify-between mt-8">
          {products.length === 0 ? (
            <p>O carrinho está vazio.</p>
          ) : (
            <div className="flex w-[70%]">
              <ul className="flex flex-col w-full mr-10 bg-slate-100 mb-20 ">
                {products.map((product, index) => (
                  <li
                    key={index}
                    className="w-full flex border border-solid rounded-md border-gray-300 p-4"
                  >
                    <img
                      src={product.imagem}
                      alt={product.titulo}
                      className="size-24 rounded-lg"
                    />
                    <div className="w-full flex justify-between ml-4">
                      <h2 className="text-xl font-semibold">
                        {product.titulo}
                      </h2>
                      <h2 className="font-semibold text-xl">
                        R${product.valor_novo.toFixed(2)}
                      </h2>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div className="h-52 w-96 bg-slate-100 border border-solid border-gray-300 p-4 fixed top-48.5 right-10 rounded-md">
            <h2 className="font-semibold">Resumo da compra</h2>
            <div className="flex  justify-between">
              <h2>Produto: </h2>
              <h2>R${total.toFixed(2)}</h2>
            </div>
            <div className="flex  justify-between">
              <h2>Frete:</h2>
              <h2> R$200,00</h2>
            </div>
            <div className="flex  justify-between">
              <h2>Total: </h2>
              <h2>R${(total + 200).toFixed(2)}</h2>
            </div>
            <button className="flex w-full h-9 mt-10 mx-auto justify-between rounded-md   bg-purple-400 text-white font-semibold hover:bg-purple-500 hover:text-white ">
              <div className="flex m-auto ">Fechar pedido</div>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
