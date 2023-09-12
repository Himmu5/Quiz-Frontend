import { FC } from 'react'
import Button from '../UI-Component/Button'
import { withQuiz } from '../Hoc/withQuiz'
import { Link } from 'react-router-dom'

type P = {
    score: number
}

const QuizResult: FC<P> = ({ score }) => {
    console.log("score" , score);
    return <div className=' flex justify-center items-center min-h-screen '>
        <div className='flex flex-col gap-4 rounded-md p-4 bg-yellow-200 shadow-xl '>
            <div className='flex items-center gap-2 justify-center '>
                <h1 className='text-xl sm:text-2xl md:text-3xl font-bold '>Congratulation your Score is :</h1>
                <p className='text-lg sm:text-xl md:text-2xl font-bold '>{score}</p>
            </div>
            <Link to="/" className='self-center'><Button className='rounded'>Play Again?</Button></Link>
        </div>
    </div>
}
export default withQuiz(QuizResult);