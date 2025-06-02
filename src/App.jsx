import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/header';
import Footer from './components/footer';
import Home from './pages/home';
import Career from './pages/career';
import Track from './pages/track';
import Contacts from './pages/contacts';
import Engineer from './pages/engineer';
function App() {
  return (
    <Router>
      <Header />
      <main>
        <Routes>
          <Route exact path="/react_app" element={<Home />} />
          <Route path="career" element={<Career />} />
          <Route path="track" element={<Track />} />
          <Route path="contacts" element={<Contacts />} />
          <Route path="engineer" element={<Engineer />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  )
}

export default App
