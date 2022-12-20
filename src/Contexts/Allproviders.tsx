import { CartProvider } from "./CartContexts/CartContexts";
import { UserProvider } from "./UserContexts/UserContexts";
interface iChildren {
  children: React.ReactNode;
}

export const AllProviders = ({ children }: iChildren) => {
  return (
    <CartProvider>
      <UserProvider>{children}</UserProvider>
    </CartProvider>
  );
};
