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
  cartCount: number;

  addToCart(product: Product): void; // Função para adicionar produtos ao carrinho
}

const ProductContext = createContext<ProductContextData>(
  {} as ProductContextData
);

// Definir o provider
export default function ProductProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [products, setProducts] = useState<Product[]>([]);
  const [cartCount, setCartCount] = useState(0);

  const addToCart = useCallback(
    (product: Product) => {
      setProducts([...products, product]);
      setCartCount((prevCount) => prevCount + 1); // Incrementar o contador de produtos
    },
    [products]
  );

  // Memoize
  const providerData = useMemo(
    () => ({
      products,
      cartCount,
      addToCart,
    }),
    [products, cartCount, addToCart]
  );

  return (
    <ProductContext.Provider value={providerData}>
      {children}
    </ProductContext.Provider>
  );
}

// Criar o nosso hook
export function useProducts(): ProductContextData {
  const context = useContext(ProductContext);

  if (!context)
    throw new Error("useProducts must be used within an ProductProvider");

  return context;
}
