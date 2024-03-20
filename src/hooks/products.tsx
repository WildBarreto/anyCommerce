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
  addToCart(product: Product): void;
  removeFromCart(productIndex: number): void;
  formatValue(value: number): string; // Ajuste do tipo de retorno para 'string'
}

const ProductContext = createContext<ProductContextData>(
  {} as ProductContextData
);

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
      setCartCount((prevCount) => prevCount + 1);
    },
    [products]
  );

  const removeFromCart = useCallback(
    (productIndex: number) => {
      const updatedProducts = [...products];
      updatedProducts.splice(productIndex, 1);
      setProducts(updatedProducts);
      setCartCount((prevCount) => prevCount - 1);
    },
    [products]
  );

  // Função para formatar o valor monetário
  function formatValue(value: number): string {
    return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(value);
  }

  const providerData = useMemo(
    () => ({
      products,
      cartCount,
      addToCart,
      removeFromCart,
      formatValue,
    }),
    [products, cartCount, addToCart, removeFromCart]
  );

  return (
    <ProductContext.Provider value={providerData}>
      {children}
    </ProductContext.Provider>
  );
}

export function useProducts(): ProductContextData {
  const context = useContext(ProductContext);

  if (!context)
    throw new Error("useProducts must be used within a ProductProvider");

  return context;
}
