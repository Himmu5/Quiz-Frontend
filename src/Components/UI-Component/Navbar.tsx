import {FC} from 'react'
import { Link } from 'react-router-dom';
type P = {
    logOut : ()=>void;
}
const Navbar:FC<P> =({ logOut })=>{
  return  <div className='flex justify-between items-center px-4 bg-gray-500  py-2 shadow-2xl '>
  <div></div>

  <div className='flex items-center gap-3 font-bold'>
      <Link to={"/scores"} children="Scoreboard" className='bg-gray-200 px-3 py-1 rounded-md border hover:scale-90' />
      <Link to={"/"} children="LOG OUT" onClick={logOut} className='bg-gray-200 px-3 py-1 rounded-md border hover:scale-90' />
  </div>
</div>
}
export default Navbar;