const initialState = {
	cart: [
    {
      product: 'shopping cart',
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

export default function cartReducer (state=initialState, action){
    return state
}