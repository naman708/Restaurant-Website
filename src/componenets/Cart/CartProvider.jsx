import { useReducer } from "react";
import CartContext from "./CartContext";



const CartReducer = (state,action) => {
      if(action.type=="ADD"){
        const getRemovedItemIndex = state.items.findIndex(item=>(item.id==action.item.id))
        const existingItem = state.items[getRemovedItemIndex];
        if(!existingItem){
        const updateItem = state.items.concat(action.item);
        const updateTotal = state.totalAmount+action.item.price*action.item.amount;
        return{items:updateItem,totalAmount:updateTotal};
        }
        const updateItem = {...existingItem,amount:action.item.amount+1}
        let updateItems=[...state.items]
        updateItems[getRemovedItemIndex]=updateItem
        const updateTotal= state.totalAmount+action.item.price*action.item.amount;
        return{items:updateItems,totalAmount:updateTotal};
      }
      if(action.type=="REMOVE"){
        const getRemovedItemIndex = state.items.findIndex(item=>(item.id==action.id))
        const existingItem = state.items[getRemovedItemIndex];
        if(!existingItem) return state;
        let updateTotal= state.totalAmount-existingItem.price;
        let updateItems;
        if(existingItem.amount==1){
             updateItems = state.items.filter(item=>(item.id!==action.id))
        }
        else{
           const updateItem={...existingItem,amount:existingItem.amount-1}
            updateItems=[...state.items];
            updateItems[getRemovedItemIndex]=updateItem;

        }
    
         return{items:updateItems,totalAmount:updateTotal};
      }
};



const CartProvider =({children})=>{
    const [cartState,dispatchCartAction] = useReducer(CartReducer,{
       items:[],
       totalAmount:0
    });
    const addItemHandler = (item)=>{
        console.log("🚀 ~ addItemHandler ~ item:", item)
        dispatchCartAction({type:"ADD",item});
    };
    const removeItemHandler =(id)=>{
        dispatchCartAction({type:"REMOVE",id});
    }
    const cartContext ={
     items:cartState.items,
     totalAmount:cartState.totalAmount,
     addItem:addItemHandler,
     removeItem:removeItemHandler

    }
    return(
        <CartContext.Provider value={cartContext}>
            {children}
        </CartContext.Provider>
    );
};

export default CartProvider;