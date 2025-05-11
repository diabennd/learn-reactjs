import { HashRouter as Router, Routes, Route, Link } from "react-router-dom";
import ReactRouter from "./pages/ReactRouter";
import RouterRed from "./pages/RouterRed";
import RouterGreen from "./pages/RouterGreen";
import RouterBlue from "./pages/RouterBlue";

const RouterApp = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ReactRouter />} />
        <Route path="/red" element={<RouterRed />} />
        <Route path="/green" element={<RouterGreen />} />
        <Route path="/blue" element={<RouterBlue />} />
      </Routes>
    </Router>
  );
};

export default RouterApp;
