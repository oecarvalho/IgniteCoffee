import { createContext, useContext, useEffect, useState, type ReactNode } from "react";


export type CoffeeProps = {
    id: number,
    name: string,
    description: string,
    tags: string[],
    price: number,
    image: string,
    amount: number,
}

type CartItem = CoffeeProps

interface CartContextType {
    cart: CartItem[];
    addToCart: (product: CoffeeProps, amount: number) => void
    totalQuantity: number
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({children}: {children: ReactNode}){
    const [cart, setCart] = useState<CartItem[]>([]);

    function addToCart(product: CoffeeProps, amount: number){
        setCart(coffeeList => {
            const existing = coffeeList.find(coffee => coffee.id === product.id);
            
            if(existing){
                return coffeeList.map(coffee => 
                    coffee.id === product.id ? 
                    {...coffee, amount: coffee.amount + amount} : 
                    coffee)
            } else {
                return [...coffeeList, {...product, amount: amount}]
            }
        })
    }

    const totalQuantity = cart.reduce((acc, item) => acc + item.amount, 0)
    
    useEffect(() => {
        console.log("🛒 ESTADO ATUALIZADO DO CARRINHO:", cart);
    }, [cart]);

    return <CartContext.Provider value={{cart, addToCart, totalQuantity}}>{children}</CartContext.Provider>
}

export function useCart(){
    const context = useContext(CartContext);

    if(!context){
        throw new Error("useCart deve ser usado dentro de um CartProvider")
    }

    return context
}