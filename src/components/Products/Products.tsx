import { useEffect } from "react"
import { useAppDispatch, useAppSelector } from "../../app/hooks"
import { getProducts } from "../../features/productsSlice"
import spinner from '../../assets/spinner.gif'
import Card from "./Card"

const Products = () => {
  const { products, loading } = useAppSelector(state => state.products)
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(getProducts())
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  if (loading) {
    return <img className="block m-auto" src={spinner} alt="loading-spinner" />
  }
  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-10 ">
      {
        products.map((product) => <Card key={product.id} product={product} />)
      }
    </section>
  )
}

export default Products