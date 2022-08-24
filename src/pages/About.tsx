const url = 'https://picsum.photos/900/400'

const About = () => {
  return (
    <section className='container m-auto max-w-7xl px-6 xl:px-0 grid place-items-center pb-24'>
      <div className="mt-20 text-center flex flex-col gap-4 items-center">
        <img src={url} alt="randomImage" className="w-28 h-28 rounded-full border-solid border-orange-400 border-4 " />
        <h1 className="text-2xl font-bold">About Sandbox</h1>
        <p className="max-w-xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus minus tempora ea nihil totam, doloribus laborum, quaerat molestiae dolorum quidem et, eaque natus ullam error vero sapiente nulla molestias magni harum odio officiis. Quasi, doloribus cupiditate quis eligendi aspernatur libero neque, saepe mollitia error hic, alias corrupti! Totam nulla recusandae laborum esse quaerat amet minima deserunt porro at iusto rem, consequuntur nam, atque harum repellendus sit, dolore est enim reiciendis. </p>
      </div>
    </section>
  )
}

export default About