import Register from "./Components/Auth/Register"
import { Route, Routes } from "react-router-dom";
import Home from "./Components/Pages/Home";
import UserProvider from "./Providers/UserProvider";
import Scoreboard from "./Components/Pages/Scoreboard";
import { QuizContext } from "./Components/Context/QuizContext";
import { useEffect, useState } from "react";
import { getLanguages, getQuestions } from "./API/Quiz";

function App() {

  const [questions, setQuestions] = useState([]);
  const [languages, setLanguages] = useState([]);
  const [quizStart, setQuizStart] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("");

  useEffect(() => {
    getLanguages().then((res) => {
      setLanguages(res);
    })
    getQuestions().then((res) => {
      setQuestions(res);
    })

  }, [selectedLanguage])

  return (
    <div>
      <UserProvider>
        <QuizContext.Provider value={{ questions, languages, quizStart, setQuizStart }}>
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
