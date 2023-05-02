import { createSlice } from '@reduxjs/toolkit'

const cartReducer = createSlice({
  name: 'cart',
  initialState: [] as TProduct[],
  reducers: {
    addToCart (state, action: { payload: TProduct }) {
      const item = action.payload
      const itemInCart = state.find(i => i.id === item.id)
      if (itemInCart != null) return state
      state.push(item)
    },
    removeFromCart (state, action: { payload: TProduct['id'] }) {
      const id = action.payload
      return state.filter(i => i.id !== id)
    }
  }
})

export const { addToCart, removeFromCart } = cartReducer.actions
export default cartReducer.reducer
