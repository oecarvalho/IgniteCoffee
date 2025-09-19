import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

//tipagem do café
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

//interface de contexto
interface CartContextType {
    cart: CartItem[]; //café
    addToCart: (product: CoffeeProps, amount: number) => void //função que add ao carrinho o café e atualiza a quantidade
    totalQuantity: number //quantidade total
    totalPrice: number //preço total de cada elemento
    changeCartItemQuantity: (cartItemId: number, type: 'increment' | 'decrement') => void
    removeCartItem: (cartItemId: number) => void
    cleanCart: () => void
}
//criando contexto do tipo CartContext
const CartContext = createContext<CartContextType | undefined>(undefined);

//cria componente de provider
export function CartProvider({children}: {children: ReactNode}){
    const [cart, setCart] = useState<CartItem[]>([]);//cria um estado para atualizar o café selecionado

    //função que adiciona o café no  carrinho, recebe o café e a quantidade
    function addToCart(product: CoffeeProps, amount: number){
        setCart(coffeeList => {
            const existing = coffeeList.find(coffee => coffee.id === product.id); //verifica se existe café
            
            if(existing){
                return coffeeList.map(coffee => 
                    coffee.id === product.id ? 
                    {...coffee, amount: coffee.amount + amount} : //se existe o café, atualiza a qntd dele
                    coffee)
            } else {
                return [...coffeeList, {...product, amount: amount}]//atualiza a lista com os cafés existentes mais o novo café e a quantidade
            }
        })
    }

    const totalQuantity = cart.reduce((acc, item) => acc + item.amount, 0)// faz a soma da quantidade total de cafés

    const totalPrice = cart.reduce((total, item) => { // faz a soma do valor total de cada elemento do carrinho
        return total + (item.price * item.amount)
    }, 0)

    function changeCartItemQuantity(cartItemId: number, type: 'increment' | 'decrement'){
        setCart((state) => {
            const newCart = state.map((item)=>{
                if(item.id === cartItemId){
                    const newAmount = type === 'increment' ? item.amount + 1 : item.amount - 1
                    return {...item, amount: newAmount}
                }
                return item
            })
            return newCart.filter((item) => item.amount > 0)
        })
    }

    function removeCartItem(cartItemId: number){
        setCart(state => state.filter(item => item.id !== cartItemId))
    }

    function cleanCart() {
        setCart([]);
    }

    //retorna um contexto contendo o carringo, a função de add ao carinho e a quantidade total
    return <CartContext.Provider value={{
        cart, 
        addToCart, 
        totalQuantity, 
        totalPrice,
        changeCartItemQuantity,
        removeCartItem,
        cleanCart
        }}>{children}</CartContext.Provider>
}

export function useCart(){
    const context = useContext(CartContext);

    if(!context){
        throw new Error("useCart deve ser usado dentro de um CartProvider")
    }

    return context
}