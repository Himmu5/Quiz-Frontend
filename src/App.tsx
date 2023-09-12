import Register from "./Components/Auth/Register"
import { Route, Routes } from "react-router-dom";
import Home from "./Components/Pages/Home";
import UserProvider from "./Providers/UserProvider";
import Scoreboard from "./Components/Pages/Scoreboard";
import QuizResult from "./Components/Pages/QuizResult";
import QuizProvider from "./Providers/QuizProvider";

function App() {


  return (
    <div>
      <UserProvider>
        <QuizProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Auth" element={<Register />} />
            <Route path="/scores" element={<Scoreboard />} />
            <Route path="/quizresult" element={<QuizResult />} />
          </Routes>
        </QuizProvider>
      </UserProvider>
    </div>
  )
}

export default App
