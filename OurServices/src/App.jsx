import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='max-w-[1300px] mx-auto text-center py-4'>
        <h1 className='text-4xl'>Our Services</h1>
      </div>

      <div className='max-w-[1200px] mx-auto grid lg:grid-cols-4 sm:grid-cols-2 gap-6 '>
        <div className='group shadow-lg text-center py-[30px] px-2 hover:bg-blue-500 duration-1000 hover:text-white'>
          <i className="fa fa-code text-2xl text-blue-500 group-hover:text-white duration-1000 animate-bounce" />
          <h3 className='text-xl py-2'>Development</h3>
          <p className='text-sm text-slate-500 group-hover:text-white duration-1000'>
            We develop everything which exist on internet
          </p>
        </div>
         <div className='group shadow-lg text-center py-[30px] px-2 hover:bg-blue-500 duration-1000 hover:text-white'>
          <i className="fa fa-camera text-2xl text-blue-500 group-hover:text-white duration-1000 animate-bounce" />
          <h3 className='text-xl py-2'>Photography</h3>
          <p className='text-sm text-slate-500 group-hover:text-white duration-1000'>
            We capture best moments without disturbing you
          </p>
        </div>
         <div className='group shadow-lg text-center py-[30px] px-2 hover:bg-blue-500 duration-1000 hover:text-white'>
          <i className="fa fa-birthday-cake text-2xl text-blue-500 group-hover:text-white duration-1000 animate-bounce" />
          <h3 className='text-xl py-2'>Bakery</h3>
          <p className='text-sm text-slate-500 group-hover:text-white duration-1000'>
            We provide mouthwatering cakes
          </p>
        </div>
         <div className='group shadow-lg text-center py-[30px] px-2 hover:bg-blue-500 duration-1000 hover:text-white'>
          <i className="fa fa-mortar-board text-2xl text-blue-500 group-hover:text-white duration-1000 animate-bounce" />
          <h3 className='text-xl py-2'>Certification</h3>
          <p className='text-sm text-slate-500 group-hover:text-white duration-1000'>
            Learn from us and get certified in your favorite technology
          </p>
        </div>
         <div className='group shadow-lg text-center py-[30px] px-2 hover:bg-blue-500 duration-1000 hover:text-white'>
          <i className="fa fa-music text-2xl text-blue-500 group-hover:text-white duration-1000 animate-bounce" />
          <h3 className='text-xl py-2'>Music</h3>
          <p className='text-sm text-slate-500 group-hover:text-white duration-1000'>
            We teaches music as well
          </p>
        </div>
         <div className='group shadow-lg text-center py-[30px] px-2 hover:bg-blue-500 duration-1000 hover:text-white'>
          <i className="fa fa-thumbs-up text-2xl text-blue-500 group-hover:text-white duration-1000 animate-bounce" />
          <h3 className='text-xl py-2'>Reviews</h3>
          <p className='text-sm text-slate-500 group-hover:text-white duration-1000'>
            See what clients says for us
          </p>
        </div>
         <div className='group shadow-lg text-center py-[30px] px-2 hover:bg-blue-500 duration-1000 hover:text-white'>
          <i className="fa fa-taxi text-2xl text-blue-500 group-hover:text-white duration-1000 animate-bounce" />
          <h3 className='text-xl py-2'>Texi Services</h3>
          <p className='text-sm text-slate-500 group-hover:text-white duration-1000'>
            We provide cab services for our clients
          </p>
        </div>
         <div className='group shadow-lg text-center py-[30px] px-2 hover:bg-blue-500 duration-1000 hover:text-white'>
          <i className="fa fa-trademark text-2xl text-blue-500 group-hover:text-white duration-1000 animate-bounce" />
          <h3 className='text-xl py-2'>Trademark</h3>
          <p className='text-sm text-slate-500 group-hover:text-white duration-1000'>
            We provide trademark services
          </p>
        </div>

      </div>
    </>
  )
}

export default App
