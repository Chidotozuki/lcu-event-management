import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Layout from "./components/Layout";
import Home from "./pages/Home/Home";
import EventList from "./pages/EventList/EventList";
import Eventdetails from "./pages/EventDetails/Eventdetails";
import Login from "./pages/Login/Login";
import SignUp from "./pages/SignUp/SignUp";
import FilterEvents from "./pages/FilterEvents/FilterEvents";
import DashBoard from "./components/DashBoard/DashBoard";
import About from "./pages/About/About";
import DashHome from "./components/DashBoard/DashHome";
import MyEvents from "./components/DashBoard/MyEvents";
import InterestedEvents from "./components/DashBoard/InterestedEvents";
import CreateEvent from "./components/DashBoard/CreateEvent";
import Settings from "./components/DashBoard/Settings";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="all-events" element={<EventList />} />
            <Route path="find-events" element={<FilterEvents />} />
            <Route path="event/:id" element={<Eventdetails />} />
            <Route path="dashboard/*" element={<DashBoard />}>
              <Route index element={<DashHome />} /> {/* Default dashboard page */}
              <Route path="my-events" element={<MyEvents />} />
              <Route path="interested-events" element={<InterestedEvents />} />
              <Route path="create-event" element={<CreateEvent />} />
              <Route path="settings" element={<Settings />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
