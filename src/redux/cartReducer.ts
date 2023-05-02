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
    }
  }
})

export const { addToCart } = cartReducer.actions
export default cartReducer.reducer
