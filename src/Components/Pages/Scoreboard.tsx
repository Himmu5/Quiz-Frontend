import { FC, useEffect, useState } from 'react'
import { getTopScorers } from '../../API/Quiz'
import { AiOutlineLeftCircle } from 'react-icons/ai' 
import { Link } from 'react-router-dom'

type P = object
const Scoreboard: FC<P> = () => {

    const [topScorers, setTopScorers] = useState<{ score: number, email: string }[]>([]);

    useEffect(() => {
        getTopScorers().then((res) => {
            setTopScorers(res);
        })
    }, [])

    return <div className='min-h-screen  p-4'>
        <div className='max-w-5xl mx-auto'>
            <div className='flex items-center justify-between p-2'>
                <Link to={"/"}><AiOutlineLeftCircle size={25} className=" active:scale-90 " /></Link>
                <h1 className='text-center text-xl sm:text-2xl md:text-3xl font-bold '>POINTS TABLE</h1>
                <p></p>
            </div>
            <div className='py-6 '>
                <div className=' font-bold text-xl sm:text-2xl flex justify-between rounded-md bg-gradient-to-r from-blue-400 to-indigo-600 p-2 text-white items-center '>
                    <p>Email</p>
                    <p>Points</p>
                </div>
                {
                    topScorers.map((score, index) => {
                        return <div key={index} className=' rounded-md bg-gradient-to-r from-blue-400 to-indigo-600 p-2 text-white text-sm my-2  flex justify-between items-center '>
                            <p>{index + 1}.    {score.email}</p>
                            <p className='w-12'>{score.score}</p>
                        </div>
                    })
                }
            </div>
        </div>
    </div>
}
export default Scoreboard;