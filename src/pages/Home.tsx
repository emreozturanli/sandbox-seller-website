import Hero from '../components/Hero'
import Info from '../components/Info'
import Products from '../components/Products/Products'

const Home = () => {
  return (
    <main className='container m-auto pb-16 max-w-7xl px-6 xl:px-0'>
      <Hero/>
      <Info/>
      <Products/>
    </main>
  )
}

export default Home