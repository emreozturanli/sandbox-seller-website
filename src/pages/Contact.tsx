import { useState } from "react"

const Contact = () => {
  const [inputs, setInputs] = useState({
    name: '',
    email: '',
    title: '',
    desc: ''
  })

  const handleChange = (e:any) =>{
    setInputs({
      ...inputs,
      [e.target.name] : e.target.value
    })
  }

  const handleSubmit = (e: any) => {
    e.preventDefault()
    setInputs({
      name: '',
      email: '',
      title: '',
      desc: ''
    })
  }
  
  const inputStyle = 'bg-slate-200 border-none px-2 py-4 outline-none rounded-md w-80'
  
  return (
    <section className='container m-auto max-w-7xl px-6 xl:px-0 grid place-items-center pb-24'>
      <div className="mt-8 md:mt-44 ">
        <h1 className="text-3xl font-bold text-center mb-6">GET IN TOUCH</h1>
        <form onSubmit={handleSubmit}  >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-3">
            <div className="flex flex-col gap-3">
              <input
                type="text"
                className={inputStyle}
                placeholder='Name'
                name="name"
                value={inputs.name}
                onChange={handleChange}
              />
              <input
                type="email"
                className={inputStyle}
                placeholder='Email'
                name="email"
                value={inputs.email}
                onChange={handleChange}
              />
              <input
                type="text"
                className={inputStyle}
                placeholder='Title'
                name="title"
                value={inputs.title}
                onChange={handleChange}
              />
            </div>
            <textarea
              id="desc"
              cols={30} rows={5}
              className={inputStyle}
              placeholder='Your Message'
              name="desc"
              value={inputs.desc}
              onChange={handleChange}
            ></textarea>
          </div>
          <button
            className='bg-blue-500 rounded-sm px-4 py-1 block text-white m-auto text-md cursor-pointer' type="submit"
          >
            SEND MESSAGE
          </button>
        </form>
      </div>


    </section>
  )
}

export default Contact