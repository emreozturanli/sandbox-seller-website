import { useParams } from "react-router-dom"
import { useAppSelector } from "../app/hooks"

const Details = () => {
  const { products } = useAppSelector(state => state.products)
  const { productId } = useParams()
  const product = products.find(product => productId && product.id === +productId)

  const url = 'https://picsum.photos/900/400'

  return (
    <section className="container m-auto pb-28 max-w-7xl px-6 xl:px-0 pt-6">
      <div className="flex flex-col lg:flex-row gap-4 lg:gap-8">

        <div className="lg:w-3/5 flex flex-col gap-4 bg-slate-100 rounded-md p-2">
          <h2 className="text-3xl font-bold ">{product?.title}</h2>
          <img
            src={url}
            alt={product?.title}
            className='rounded-lg h-full object-cover'
          />
          <p>{product?.description}</p>
        </div>

        <div className="flex flex-col gap-4 ">

          <div className="flex flex-col gap-2 rounded-md p-2 bg-slate-100">
            <h4 className="text-xl font-semibold">Tags</h4>
            <hr />
            <p>{product?.category}</p>
          </div>

          <div className="flex flex-col gap-2 rounded-md p-2 bg-slate-100">
            <h4 className="text-xl font-semibold">Images</h4>
            <hr />
            <div className="flex flex-wrap gap-2">
              {product?.images.map((image, index) => {
                return <img
                  key={index}
                  src={image}
                  alt='smallImage'
                  className="w-28 h-28 object-cover"
                />
              })}
            </div>
          </div>

          <div className="flex flex-col gap-2 rounded-md p-2 bg-slate-100">
            <h4 className="text-xl font-semibold">Informations</h4>
            <hr />
            <p><span className="text-blue-600">Price : </span>${product?.price}</p>
            <p><span className="text-blue-600">Discount : </span>%{product?.discountPercentage}</p>
            <p><span className="text-blue-600">Stock : </span>{product?.stock}</p>
            <p><span className="text-blue-600">Rating : </span>{product?.rating}</p>
          </div>

        </div>

      </div>
    </section>
  )
}

export default Details