import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Header/Navbar";
import Home from "./components/HomePage/LandHome";
import Details from "./components/Filter/Details";
import Footer from "./components/Footer/Footer";
import DayHealth from "./components/DayHealth";
import GalleryPage from "./components/GalleryPage/GalleryPage";
import ContactPage from "./components/ContactPage/ContactPage";
import DayWaten from "./components/DayWaten/DayWaten";
function App() {
  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route path="/details/:detailsId" element={<Details />} />
        <Route path="/" element={<Home />} />
        <Route path="/dayHealth" element={<DayHealth />} />
        <Route path="/dayWaten" element={<DayWaten />} />
        <Route path="/Gallery" element={<GalleryPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
      <Footer />
    </div>
  );
}
export default App;
