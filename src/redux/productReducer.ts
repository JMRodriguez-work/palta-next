import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

const productSlice = createSlice({
  name: 'product',
  initialState: [] as TProduct[],
  reducers: {
    setProductList (state, action: PayloadAction<TProduct[]>) {
      return action.payload
    }
  }
})

export const { setProductList } = productSlice.actions
export default productSlice.reducer
