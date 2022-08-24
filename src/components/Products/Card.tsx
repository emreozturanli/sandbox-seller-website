import { Product } from "../../types/interfaces"

interface ICardProps {
  product : Product
}
const Card = ({product}:ICardProps) => {
  const { title, thumbnail} = product

  return (
    <div className="rounded-sm shadow-lg">
      <img className="rounded-sm w-full h-60 object-cover" src={thumbnail} alt={title} />
      <h3 className="m-3 font-bold text-lg">{title}</h3>
      <button className='bg-blue-500 rounded-sm m-3 py-1 px-3 text-white text-md cursor-pointer'>Details</button>
    </div>
  )
}

export default Card