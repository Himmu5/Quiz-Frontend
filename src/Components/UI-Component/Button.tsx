import {ButtonHTMLAttributes, FC} from 'react'

type P = object & ButtonHTMLAttributes<HTMLButtonElement>

const Button:FC<P> =({ children })=>{
  return <button className='px-3 py-1 bg-blue-500 text-white '>{children}</button>
}
export default Button;