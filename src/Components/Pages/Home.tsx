import { FC } from 'react'
import { withUser } from '../Hoc/withUser'
import { Navigate } from 'react-router-dom'
import { User } from '../../Types/User'
import { withQuiz } from '../Hoc/withQuiz'
import Button from '../UI-Component/Button'
import { Question } from '../../Types/Quiz'
import QuestionsMapper from '../UI-Component/QuestionsMapper'
import Navbar from '../UI-Component/Navbar'

type P = {
    user: User;
    languages: { name: string }[];
    selectedLanguage: string;
    setSelectedLanguage: (s: string) => void;
    setQuizStart: (s: boolean) => void;
    quizStart: boolean;
    questions: Question[];
    quizResponse: { [qId: string]: number };
    setQuizResponse: (r: { [qId: string]: number }) => void;
    submit:()=>void;
    logOut:()=>void;
}

const Home: FC<P> = ({ logOut ,submit, quizResponse ,setQuizResponse, user, languages, setSelectedLanguage, selectedLanguage, setQuizStart, quizStart, questions }) => {
    if (!user) {
        return <Navigate to={"/Auth"} />
    }
    return <>

       <Navbar logOut={logOut} />
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

                <Button  disabled={ selectedLanguage === "" }  className={'rounded-md '+ (selectedLanguage === "" && " bg-gray-400 ") } onClick={() => setQuizStart(!quizStart)} >Start Quiz</Button>

            </div>}
            <div className='max-w-5xl mx-auto space-y-4'>
                {quizStart && <h1 className='text-xl sm:text-2xl md:text-3xl  text-center py-10 '> Quiz is Started  </h1>}
                {
                    quizStart && <QuestionsMapper setQuizResponse={setQuizResponse} quizResponse={quizResponse} questions={questions} />
                }
                {

                    quizStart && <div className='flex justify-center gap-2 py-3'>
                        <Button children="Submit Quiz" onClick={submit} className='active:scale-90 rounded-md' />
                        <Button className='bg-red-500 rounded-md ' onClick={()=>setQuizStart(!quizStart)}>Reset </Button>
                    </div>
                }

            </div>

        </div>
    </>
}

export default withQuiz(withUser(Home));