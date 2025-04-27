import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import About from "./components/About";
import User from "./components/User";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/user/:userid" element={<User />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
