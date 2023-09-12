import { FC, ReactNode, useEffect, useState } from 'react'
import { QuizContext } from '../Components/Context/QuizContext';
import { useNavigate } from 'react-router-dom';
import { getLanguages, getQuestions, submitQuiz } from '../API/Quiz';
import { Question } from '../Types/Quiz';
type P = {
    children: ReactNode
}
const QuizProvider: FC<P> = ({ children }) => {



    const [questions, setQuestions] = useState<Question[]>([]);
    const [languages, setLanguages] = useState<{ name: string }[]>([]);
    const [quizStart, setQuizStart] = useState(false);
    const [selectedLanguage, setSelectedLanguage] = useState("");
    const [quizResponse, setQuizResponse] = useState<{ [qId: string]: number }>({});
    const [score, setScore] = useState<number>();
    console.log("Score : ", score);
    const Navigate = useNavigate();

    useEffect(() => {
        getLanguages().then((res) => {
            setLanguages(res);
        })
        getQuestions(selectedLanguage).then((res) => {
            setQuestions(res);
        })

    }, [selectedLanguage])

    function submit() {
        if (Object.keys(quizResponse).length < 10) {
            alert("Please Attempt all questions!");
        }
        else {
            submitQuiz(quizResponse , selectedLanguage).then((res) => {
                setScore(res.score);
                setQuizResponse({});
                setQuizStart(false);
                Navigate('/quizResult');
            })
        }
    }

    return <QuizContext.Provider value={{ score, submit, quizResponse, setQuizResponse, questions, languages, quizStart, setQuizStart, selectedLanguage, setSelectedLanguage }}>
        {children}
    </QuizContext.Provider>
}
export default QuizProvider;