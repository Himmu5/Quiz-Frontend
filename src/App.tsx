import Register from "./Components/Auth/Register"
import { Route, Routes } from "react-router-dom";
import Home from "./Components/Pages/Home";
import UserProvider from "./Providers/UserProvider";

function App() {

  return (
    <div>
      <UserProvider>
        <Routes>
          <Route path="/Auth" element={<Register />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </UserProvider>
    </div>
  )
}

export default App
