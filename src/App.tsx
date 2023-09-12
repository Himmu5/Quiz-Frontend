import Register from "./Components/Auth/Register"
import { Route, Routes } from "react-router-dom";
import Home from "./Components/Pages/Home";
import UserProvider from "./Providers/UserProvider";
import Scoreboard from "./Components/Pages/Scoreboard";
import { QuizContext } from "./Components/Context/QuizContext";
import { useEffect, useState } from "react";
import { getLanguages, getQuestions } from "./API/Quiz";
import { Question } from "./Types/Quiz";

function App() {

  const [questions, setQuestions] = useState<Question[]>([]);
  const [languages, setLanguages] = useState<{ name: string }[]>([]);
  const [quizStart, setQuizStart] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("");

  useEffect(() => {
    getLanguages().then((res) => {
      setLanguages(res);
    })
    getQuestions(selectedLanguage).then((res) => {
      setQuestions(res);
    })

  }, [selectedLanguage])

  return (
    <div>
      <UserProvider>
        <QuizContext.Provider value={{ questions, languages, quizStart, setQuizStart ,selectedLanguage , setSelectedLanguage}}>
          <Routes>
            <Route path="/Auth" element={<Register />} />
            <Route path="/" element={<Home />} />
            <Route path="/scores" element={<Scoreboard />} />
          </Routes>
        </QuizContext.Provider>
      </UserProvider>
    </div>
  )
}

export default App
