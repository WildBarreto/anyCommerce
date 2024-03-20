import {
    createContext,
    useCallback,
    useContext,
    useMemo,
    useState,
} from "react";

interface Product {
  imagem: string;
  titulo: string;
  valor_antigo: number;
  valor_novo: number;
}

interface ProductContextData {
  products: Product[];

  addToCart(product: Product): void; // Função para adicionar produtos ao carrinho
}

const ProductContext = createContext<ProductContextData>(
  {} as ProductContextData
);

// definir o provider
export default function ProductProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [products, setProducts] = useState<Product[]>([]);

  const addToCart = useCallback(
    (product: Product) => {
      setProducts([...products, product]);
    },
    [products]
  );

  // memoize
  const providerData = useMemo(
    () => ({
      products,

      addToCart,
    }),
    [products, addToCart]
  );
  {
    console.log(products);
  }
  return (
    <ProductContext.Provider value={providerData}>
        
      {children}
    </ProductContext.Provider>
  );
}

// criar o nosso hook
export function useProducts(): ProductContextData {
  const context = useContext(ProductContext);

  if (!context)
    throw new Error("useProducts must be used within an ProductProvider");

  return context;
}
