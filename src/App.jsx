import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Layout from "./components/Layout";
import Home from "./pages/Home/Home";
import EventList from "./pages/EventList/EventList";
import Eventdetails from "./pages/EventDetails/Eventdetails";
import Login from "./pages/Login/Login";
import SignUp from "./pages/SignUp/SignUp";
import FilterEvents from "./pages/FilterEvents/FilterEvents";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="all-events" element={<EventList />} />
            <Route path="find-events" element={<FilterEvents />} />
            <Route path="event/:id" element={<Eventdetails />} />
        </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
