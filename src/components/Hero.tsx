import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import placeholderImg from '../assets/placeholderImg.gif'

const Hero = () => {
    const [loaded, setLoaded] = useState<boolean>(false);

    const navigate = useNavigate()

    const url = 'https://picsum.photos/900/400'

    const onImageLoaded = () => {
        setLoaded(true);
      };
  return (
    <section className='my-6 flex flex-col lg:flex-row xl:items-center gap-4 lg:gap-8 mb-10'>
        <img 
        onLoad={onImageLoaded}
        src={loaded ? url : placeholderImg}
        alt="hero" 
        className='rounded-lg lg:w-3/5 object-cover'
        />
        <div className='flex flex-col gap-3 items-start'>
            <h2 className='text-2xl font-bold'>Sandbox</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos non esse, distinctio placeat error sint doloribus odit consequuntur saepe illo tempora aliquid neque quaerat veritatis fugiat molestias minima facere maiores numquam optio est laudantium ipsam modi. Velit ducimus nulla, voluptates consequuntur esse tempora deleniti aspernatur numquam dolores pariatur aliquam optio recusandae unde maxime similique doloremque culpa vitae iure minus.
            </p>
            <button 
            className='bg-blue-500 rounded-sm px-4 py-1 text-white text-md cursor-pointer'
            onClick={()=> navigate('/about')}
            >About Us</button>
        </div>
    </section>
  )
}

export default Hero