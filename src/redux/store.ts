import { configureStore } from '@reduxjs/toolkit'
import productReducer from './productReducer'
import cartReducer from './cartReducer'

export const store = configureStore({
  reducer: {
    product: productReducer,
    cart: cartReducer
  }
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {product: ProductState, cart: CartState}
export type AppDispatch = typeof store.dispatch
