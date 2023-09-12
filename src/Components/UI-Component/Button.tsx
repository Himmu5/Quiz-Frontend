import {ButtonHTMLAttributes, FC} from 'react'

type P = object & ButtonHTMLAttributes<HTMLButtonElement>

const Button:FC<P> =({ children , className , ...rest })=>{
  return <button {...rest} className={'px-3 py-1 bg-blue-500 text-white '+className}>{children}</button>
}
export default Button;