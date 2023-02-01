import Home from "./pages/Home";
import About from "./pages/About"
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/general/Layout";
import Blog from "./pages/Blog";
import Portfolio from "./pages/Portfolio"
import Pricing from "./pages/Pricing"
import Contact from "./pages/Contact"
function App() {
  return (
    <BrowserRouter>
      <div className="relative">
        <Routes>
          <Route path="/" element={<Layout />} >
          <Route index element={<Home/>}/>
          <Route path="about" element={<About/>}/>
          <Route path="blog" element={<Blog/>}/>
          <Route path="portfolio" element={<Portfolio/>}/>
          <Route path="pricing" element={<Pricing/>}/>
          <Route path="contact" element={<Contact/>}/>
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
