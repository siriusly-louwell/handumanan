import "./App.css";
import Header from "./components/Header";
import "./index.css";
import { Route, Routes } from "react-router-dom";
import Places from "./pages/Places";
import Place from "./pages/Place";
import HomePage from "./pages/HomePage";
import TourSpots from "./pages/TourSpots";
import { SPOTS } from "./services/data";

function App() {
  return (
    <div className="flex flex-col items-center w-screen">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/places" element={<Places />} />
        <Route path="/read" element={<Place />} />
        {/* <Route path="/spots" element={<TourSpots />} /> */}

        {Object.keys(SPOTS).map((key) => (
          <Route path={`/${key}`} element={<TourSpots />} />
        ))}
      </Routes>
    </div>
  );
}

export default App;
