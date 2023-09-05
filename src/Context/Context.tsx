import { ReactNode, useContext } from "react";
import { CoffeContext } from "../components/Coffes";

interface ContextCoffesSelectedProps {
    children: ReactNode
}





export function ContextCoffesSelected({ children }: ContextCoffesSelectedProps) {
    const { newCoffe } = useContext(CoffeContext)
    return (
        <CoffeContext.Provider value={{ newCoffe }}>
            {children}
        </CoffeContext.Provider>
    )
}
