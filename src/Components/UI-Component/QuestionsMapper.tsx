import { FC } from 'react'
import { Question } from '../../Types/Quiz'
type P = {
    questions: Question[];
    quizResponse: { [qId: string]: number };
    setQuizResponse:(w : { [qId: string]: number })=>void;
}
const QuestionsMapper: FC<P> = ({ questions, quizResponse , setQuizResponse }) => {
    console.log("Quiz response",questions);
    return <div>
        {
            questions.map((q, i) => {
                return <div className='relative bg-white border border-black m-2 p-3'>
                    <p className={' absolute right-2 rounded-md text-sm px-3 py-2  text-white '+(q.diffeculty=== "Easy" && " bg-green-600 ")+(q.diffeculty=== "Medium" && " bg-yellow-600 ")+(q.diffeculty=== "Hard" && " bg-red-600  ")  }>{q.diffeculty}</p>
                    <h2 className='text-xl sm:text-2xl md:text-3xl font-bold'>Q{i + 1} - <span>{q.text}</span></h2>
                    <div className='pl-8 sm:text-xl'>
                        {
                            q.options.map((option, i) => {
                                return <div className='flex items-center gap-2'>
                                    <input type="checkbox" checked={quizResponse[q._id] === i} onChange={() => setQuizResponse({ ...quizResponse, [q._id]: i })} />
                                    <p>{option.text}</p>
                                </div>
                            })
                        }
                    </div>
                </div>
            })
        }
    </div>
}
export default QuestionsMapper;