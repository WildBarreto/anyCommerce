import AuthProvider from "./auth";
import ProductProvider from "./products";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ProductProvider>
      <AuthProvider>{children}</AuthProvider>
    </ProductProvider>
  );
}
