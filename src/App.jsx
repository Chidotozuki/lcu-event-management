import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Layout from "./components/Layout";
import Home from "./pages/Home/Home";
import EventList from "./pages/EventList/EventList";
import Eventdetails from "./pages/EventDetails/Eventdetails";
import Login from "./pages/Login/Login";
import SignUp from "./pages/Login/SignUp";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="find-events" element={<EventList />} />
            <Route path="event/:id" element={<Eventdetails />} />
        </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
