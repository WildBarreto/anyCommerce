import { Link } from "react-router-dom";
import { useProducts } from "../hooks/products";
import { Product } from "../pages/Home";

interface CardProps {
  product: Product; 
}

export function Card({ product }: CardProps) { 
  const { formatValue } = useProducts();

  return (
    <Link to={`/produto/${product.id}`} className="m-auto">
      <div className="flex flex-row mx-0 drop-shadow-lg">
        <div className="  h-80 w-64  rounded-md  mb-6 bg-slate-100 cursor-pointer">
          <div className="h-[60%] bg-white w-full ">
            <img src={product.imagem} alt="" className="h-48 w-full object-cover rounded-t-md" /> {/* Usando a imagem do produto */}
          </div>
          <div className="flex flex-col ">
            <h1 className="text-slate-900 mx-auto mt-2 text-md font-semibold">
              {product.titulo} {/* Exibindo o título do produto */}
            </h1>
            <div className="flex flex-wrap justify-center">
              <span className="text-slate-500 line-through mt-4 mx-2  ml-2 text-xs font-semibold">
                R$ {formatValue(product.valor_antigo)} {/* Exibindo o valor antigo do produto */}
              </span>
              <h2 className="text-slate-900 mr-3 mt-2 text-xl font-bold">
                R$ {formatValue(product.valor_novo)} {/* Exibindo o valor novo do produto */}
              </h2>
              <div className="flex ml-1 h-5 ">
                <h3 className="font-semibold ">
                  Ou 10x de R$ {formatValue(product.valor_novo / 10)} sem juros {/* Exibindo o valor da parcela */}
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
