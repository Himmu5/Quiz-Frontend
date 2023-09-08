import { FC, InputHTMLAttributes } from 'react'

type P = object & InputHTMLAttributes<HTMLInputElement>

const input: FC<P> = (props) => {
    return <input {...props} className='px-4 py-1 border border-gray-400' />
}
export default input;