import "./App.css";
import LoginPage from "./pages/Authentication/LoginPage";
import {
  Route,
  Routes,
} from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import Protected from "./components/Authentication/Protected";

function App() {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/" element={<Protected />}>
        <Route index element={<HomePage />} />
      </Route>
    </Routes>
  )
}

export default App;
