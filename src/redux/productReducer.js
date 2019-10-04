
const initialState = {
	cart: [
    {
      product: 'production 700g',
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

export default function ProductReducer(state=initialState, action){
    return state
}



