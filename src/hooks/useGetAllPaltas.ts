import { setProductList } from '@/redux/productReducer'
import type { RootState } from '@/redux/store'
import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

export function useGetAllPaltas (): TProduct[] {
  const dispatch = useDispatch()
  const productList = useSelector((state: RootState) => state.product)

  useEffect(() => {
    const getProducts = async (): Promise<void> => {
      try {
        if (productList.length === 0) {
          const response = await fetch('/api/avo')
          const data = await response.json()
          dispatch(setProductList(data.data))
        }
      } catch (error) {
        console.error(error)
      }
    }
    getProducts()
      .catch(console.error)
  }, [dispatch, productList.length])

  return productList
}
