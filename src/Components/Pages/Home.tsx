import { FC } from 'react'
import { withUser } from '../Hoc/withUser'
import { Link, Navigate } from 'react-router-dom'
import { User } from '../../Types/User'
import { withQuiz } from '../Hoc/withQuiz'
import Button from '../UI-Component/Button'
import { Question } from '../../Types/Quiz'
import QuestionsMapper from '../UI-Component/QuestionsMapper'

type P = {
    user: User;
    languages: { name: string }[];
    selectedLanguage: string;
    setSelectedLanguage: (s: string) => void;
    setQuizStart: (s: boolean) => void;
    quizStart: boolean;
    questions: Question[]
}

const Home: FC<P> = ({ user, languages, setSelectedLanguage, selectedLanguage, setQuizStart, quizStart, questions }) => {
    if (!user) {
        return <Navigate to={"/Auth"} />
    }
    return <>

        <div className='flex justify-between items-center px-4 bg-gray-500  py-2 shadow-2xl '>
            <div></div>

            <div className='flex items-center gap-3 font-bold'>
                <Link to={"/scores"} children="Scoreboard" className='bg-gray-200 px-3 py-1 rounded-md border hover:scale-90' />
                <Link to={"/"} children="LOG OUT" className='bg-gray-200 px-3 py-1 rounded-md border hover:scale-90' />
            </div>
        </div>
        <div className='  min-h-screen bg-gray-300'>


            {!quizStart && <div className='flex justify-center flex-col items-center space-y-2 '>
                <h1 className='font-bold text-xl mt-5'>To Start Quiz Select the language</h1>
                <select value={selectedLanguage} onChange={(e) => setSelectedLanguage(e.target.value)} id="" className='px-3 py-2 rounded-md mt-4 shadow-md bg-gray-100'>
                    <option value="">Select a language</option>
                    {
                        languages.map((lang) => {
                            return <option key={lang.name}>{lang.name}</option>
                        })
                    }
                </select>

                <Button className='rounded-md ' onClick={() => setQuizStart(!quizStart)} >Start Quiz</Button>

            </div>}
            <div className='max-w-5xl mx-auto space-y-4'>
                <h1 className='text-xl sm:text-2xl md:text-3xl  text-center py-10 '> Quiz is Started  </h1>
                {
                    quizStart && <QuestionsMapper questions={questions} />
                }
                <div className='flex justify-center py-3'>
                    <Button children="Submit Quiz" className='active:scale-90 rounded-md' />
                </div>

            </div>

        </div>
    </>
}

export default withQuiz(withUser(Home));