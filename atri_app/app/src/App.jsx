import { Routes, Route } from "react-router-dom";
import "./styles.css";
import Home from "./pages/Home.jsx";
import MunishYadavAssignment from "./pages/MunishYadav_assignment.jsx";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
<Route path="/atri/MunishYadav_assignment" element={<MunishYadavAssignment />} />
    </Routes>
  );
}
