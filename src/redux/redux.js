 
import { createStore, combineReducers } from 'redux'

import cartReducer from './cartReducer'
import productReducer from './productReducer'


const allReducers = {
	products: productReducer,
	shoppingCart: cartReducer
}

const rootReducers = combineReducers(allReducers)

const store = createStore(rootReducers)

export default store