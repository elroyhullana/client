import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from './Pages/Home';
import RecentWorks from './Pages/RecentWorks';
import Contact from './Pages/Contact';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/recentworks" element={<RecentWorks />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
