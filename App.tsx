import React from 'react';
import { HashRouter as Router, Routes, Route, ScrollRestoration } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Team } from './pages/Team';
import { Events } from './pages/Events';
import { Training } from './pages/Training';
import { Roadmaps } from './pages/Roadmaps';

const ScrollToTop = () => {
  const { pathname } = React.useMemo(() => ({ pathname: window.location.hash }), []);

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="team" element={<Team />} />
          <Route path="events" element={<Events />} />
          <Route path="training" element={<Training />} />
          <Route path="roadmaps" element={<Roadmaps />} />
          {/* Fallback for Join Us to Home for now, or a specific form page */}
          <Route path="join" element={<Home />} /> 
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
