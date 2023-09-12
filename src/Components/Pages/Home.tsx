import { FC } from 'react'
import { withUser } from '../Hoc/withUser'
import { Link, Navigate } from 'react-router-dom'
import { User } from '../../Types/User'

type P = {
    user: User
}

const Home: FC<P> = ({ user }) => {
    if (!user) {
        return <Navigate to={"/Auth"} />
    }
    return <> 

    <div className='flex justify-between items-center px-4 bg-gray-500  py-2 shadow-2xl '>
        <div></div>

        <div className='flex items-center gap-3 font-bold'>
            <Link to={"/scores"} children="Scoreboard" className='bg-gray-200 px-3 py-1 rounded-md border hover:scale-90' />
            <Link to={"/"} children="LOG OUT" className='bg-gray-200 px-3 py-1 rounded-md border hover:scale-90'/>
        </div>
    </div>
    <div className='  min-h-screen bg-gray-300'>


        <div className='flex justify-center flex-col items-center '>
            <h1 className='font-bold text-xl mt-5'>To Start Quiz Select the language</h1>
            <select name="" id="" className='px-3 py-2 rounded-md bg-gray-100'>
                <option value="">Select a language</option>
                {
                    
                }
            </select>

        </div>

    </div>
    </>
}

export default withUser(Home);