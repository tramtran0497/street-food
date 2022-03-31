import {ADD_TO_CART, REMOVE_FROM_CART} from "./types"

const INITIAL_STATE = {
    listCarts: [],
};

const cartReducer = (state = INITIAL_STATE, action) => {
    const existInCart = state.listCarts?.find(
        (item) => item.id === action.payload?.id
    )
    console.log("Action", action)
    switch(action.type) {
        case ADD_TO_CART:
            if(existInCart){
                const newState = {
                    ...state,
                    listCarts: 
                    state.listCarts.map((item) =>
                        item.id === action.payload.id ? {...item, qty: item.qty + 1} : item
                    )
                }
                return newState
            } else{
                const newState = {
                    ...state,
                    listCarts: [
                        ...state.listCarts,
                        {
                            ...action.payload,
                            qty: 1,
                        }
                    ]
                }
                return newState
            }
    }

    return state
}
export default cartReducer;