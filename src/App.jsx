import './assets/styles/tailwind.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Suspense } from "react";
import routes from "./routes/routes";
import ScrollToTop from "./components/Scroll";
import Header from "./layouts/Header";
import Footer from "./layouts/Footer";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Header />
      
      <Suspense fallback={<div className="text-center py-10">Loading...</div>}>
        <Routes>
          {routes.map((route, index) => (
            <Route key={index} path={route.path} element={route.element} />
          ))}
        </Routes>
      </Suspense>

      <Footer />
    </Router>
  );
}

export default App;
