import { create } from "zustand"
import type { Product } from "../data/products"
import { devtools } from "zustand/middleware";


interface CartItem {
    product: Product;
    quantity: number;
}


// 1: Definera types 
interface CartState {
    // State
    cart: CartItem[]
    // Actions
    addToCart: (product: Product) => void;
    removeFromCart: (productId: string) => void;
    increaseQuantity: (productId: string) => void;
    decreaseQuantity: (productId: string) => void;
    totalItems: () => number;
    totalPrice:  () => number;

}


// 2. Definiera vår store

const useCartStore = create<CartState>()(devtools((set, get) => ({

// State 
cart: [],

// Actions med set och get
addToCart:  (product) => set((state) => {
    const existing = state.cart.find((item) => item.product.id === product.id);
    if(existing) {
       return {
        cart: state.cart.map((item) => item.product.id === product.id ?
        {...item, quantity: item.quantity + 1 }
        : item),
     }
   } 
   return { cart: [...state.cart, {product: product, quantity: 1}]}
}),
removeFromCart: (productId) => set((state) => ({
    cart: state.cart.filter((item) => item.product.id !== productId)
})),
increaseQuantity: (productId) => set((state) => ({
    cart: state.cart.map(item => productId === item.product.id ? 
        {...item, quantity: item.quantity + 1 } :
        item
    ),
})),
decreaseQuantity: (productId) => set((state) => ({
    cart: state.cart.map(item => productId === item.product.id ? 
        {...item, quantity: item.quantity - 1 } :
        item
    ),
})),
totalItems: () => get().cart.length === 0 ? 0 : get().cart.reduce((sum, item) => sum + item.quantity, 0),
totalPrice: () => get().cart.reduce((sum, item) => sum + item.product.price * item.quantity, 0),

}), {name: "cart-store"}))    


export default useCartStore;