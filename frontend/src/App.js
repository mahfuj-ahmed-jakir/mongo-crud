import { Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import ActivityDetails from "./pages/ActivityDetails";
import Home from "./pages/Home";
import PostActivity from "./pages/PostActivity";
import TodayClass from "./pages/TodayClass";

function App() {
  return (
    <>
      <Sidebar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/todayclass" element={<TodayClass />} />
        <Route path="/postactivity" element={<PostActivity />} />
        <Route path="/activitylist" element={<ActivityDetails />} />
      </Routes>
    </>
  );
}

export default App;
