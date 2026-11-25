import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Aboutpage from "./pages/Aboutpage";

function App() {
  return (
    <BrowserRouter>
    <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<Aboutpage />} />
    </Routes>
    
    
    </BrowserRouter>
   
  );
}

export default App;