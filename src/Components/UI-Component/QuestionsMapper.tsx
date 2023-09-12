import { FC } from 'react'
import { Question } from '../../Types/Quiz'
type P = {
    questions : Question[]
}
const QuestionsMapper: FC<P> = ({ questions }) => {
    return <div>
        {
            questions.map((q, i) => {
                return <div className='bg-white border border-black m-2 p-3'>
                    <h2 className='text-xl sm:text-2xl md:text-3xl font-bold'>Q{i + 1} - <span>{q.text}</span></h2>
                    <div className='pl-8 sm:text-xl'>
                        {
                            q.options.map((option) => {
                                return <div className='flex items-center gap-2'>
                                    <input type="checkbox" />
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