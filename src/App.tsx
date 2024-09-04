import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/Home/HomePage";
import RecetteInfos from "./pages/recetteInfos/RecetteInfos";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/recetteInfos/:id" element={<RecetteInfos />} />
      </Routes>
    </>
  );
}

export default App;
