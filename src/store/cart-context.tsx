import { createContext, useContext, useReducer } from "react";
import { Meal } from "../components/Maels/AvailableMeals";

enum CartActionKind {
  ADD = 'ADD',
  REMOVE = 'REMOVE'
}

export type MealItem  =
  Meal & {
    amount: number
  }


type CartState = {
  items: MealItem[],
  totalAmount: number
}

type CartAction = {
  type: CartActionKind,
  id?: string,
  item?: MealItem 
}

type CartContext = CartState & {
  addItem: (item: MealItem) => void
  removeItem: (id: string) => void
}

const initialState: CartState = {
  items: [],
  totalAmount: 0
}

const cartReducer = (state: typeof initialState, action: CartAction): typeof initialState => {
  if (action.type === CartActionKind.ADD && action.item) {
    let updatedItems
    const currentItem = state.items.find(item => item.id === action.item?.id)
    
    if (currentItem) {
       updatedItems = [...state.items].map(item => item.id ===action.item?.id ? ({...item, amount: item.amount + action.item.amount}) : item)
    } else {
      updatedItems = [action.item, ...state.items]
    }

    return {
      ...state,
      items: updatedItems,
      totalAmount: updatedItems.reduce((acc, cur) => acc + cur.amount * cur.price , 0)
    }
  }

  if (action.type ===  CartActionKind.REMOVE) {
    const updatedItems = state.items.filter(item => item.id !== action.id)
    const updatedUmounts = updatedItems.reduce((acc, cur) => acc + cur.amount * cur.price , 0)
    return {
      items: updatedItems,
      totalAmount: updatedUmounts
    }
  }

 throw new Error()

}

export const CartCtx = createContext<CartContext>({
  items: [],
  totalAmount: 0,
  addItem(item) {},
  removeItem(id) {},
})

export const CartCtxProvider = ({children}: {children: JSX.Element}) => {
  const [state, dispatch] = useReducer(cartReducer, initialState)
  
  const addItem = (item: MealItem) => {
    dispatch({type: CartActionKind.ADD, item})
  }
  
  const removeItem = (id: string) => {
    dispatch({type: CartActionKind.REMOVE, id})
  }

  const context = {
    ...state,
    addItem,
    removeItem
  }

  return <CartCtx.Provider value={context}>{children}</CartCtx.Provider>
}

export const useCartCtx = () => useContext(CartCtx)

// TODO FIX ADD IN MODAL AND ADD REMOVE
