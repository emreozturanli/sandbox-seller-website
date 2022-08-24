import Hero from '../components/Hero'
import Info from '../components/Info'

const Home = () => {
  return (
    <main className='container m-auto max-w-7xl px-6 xl:px-0'>
      <Hero/>
      <Info/>
    </main>
  )
}

export default Home