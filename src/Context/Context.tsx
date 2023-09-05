import { useState } from "react";
import { createContext, ReactNode } from "react";

interface ContextCoffeeSelectedProps {
  children: ReactNode;
}

export interface CartItems {
  id: number;
  title: string;
  price: number;
  coffeeImage: string;
  amountCoffee: number;
}

export interface CartContext {
  cartItems: CartItems[];
  setCartItems: React.Dispatch<React.SetStateAction<CartItems[]>>;
}

export const CoffeeContext = createContext<CartContext>({} as CartContext);

export function ContextItemsCart({ children }: ContextCoffeeSelectedProps) {
  const [cartItems, setCartItems] = useState<CartItems[]>([]);

  console.log(cartItems);

  return (
    <CoffeeContext.Provider value={{ cartItems, setCartItems }}>
      {children}
    </CoffeeContext.Provider>
  );
}
