import { Routes, Route } from "react-router-dom";
import ActivityDetails from "./pages/ActivityDetails";
import Home from "./pages/Home";
import Login from "./pages/Login";
import PostActivity from "./pages/PostActivity";
import Registration from "./pages/Registration";
import TodayClass from "./pages/TodayClass";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/todayclass" element={<TodayClass />} />
        <Route path="/postactivity" element={<PostActivity />} />
        <Route path="/activitylist" element={<ActivityDetails />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
