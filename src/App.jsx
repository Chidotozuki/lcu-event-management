import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Layout from "./components/Layout";
import Home from "./pages/Home/Home";
import EventList from "./pages/EventList/EventList";
import EventDetails from "./pages/EventDetails/EventDetails";
import Login from "./pages/Login/Login";
import SignUp from "./pages/SignUp/SignUp";
import FilterEvents from "./pages/FilterEvents/FilterEvents";
import Dashboard from "./components/DashBoard/Dashboard";
import About from "./pages/About/About";
import DashHome from "./components/DashBoard/DashHome";
import MyEvents from "./components/DashBoard/MyEvents";
import InterestedEvents from "./components/DashBoard/InterestedEvents";
import CreateEvent from "./components/DashBoard/CreateEvent";
import Settings from "./components/DashBoard/Settings";
import { Toaster } from "react-hot-toast";
import { AuthProvider } from "./context/AuthContext";

function App() {
  return (
    <BrowserRouter>
    <AuthProvider>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="all-events" element={<EventList />} />
            <Route path="find-events" element={<FilterEvents />} />
            <Route path="event/:id" element={<EventDetails />} />
            <Route path="dashboard/*" element={<Dashboard />}>
              <Route index element={<DashHome />} /> {/* Default dashboard page */}
              <Route path="my-events" element={<MyEvents />} />
              <Route path="interested-events" element={<InterestedEvents />} />
              <Route path="create-event" element={<CreateEvent />} />
              <Route path="settings" element={<Settings />} />
            </Route>
          </Route>
        </Routes>
        <Toaster/>
    </AuthProvider>
      </BrowserRouter>
  );
}

export default App;
