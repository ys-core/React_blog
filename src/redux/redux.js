 
import { createStore, combineReducers } from 'redex'

const initialState = {
	cart: [
    {
      product: 'bread 700g',
      quantity: 2,
      unitCost: 90
    },
    {
      product: 'milk 500ml',
      quantity: 1,
      unitCost: 47
    }
  ]
}

const productReducer = function(state=initialState, action){
	return state	
}

const cartReducer = function(state=initialState, action){
	return state
}
const allReducers = {
	products: productReducer,
	shoppingCart: cartReducer
}

const rootReducer = combineReducers(allReducers)

const store = createStore(rootReducers)

export default store