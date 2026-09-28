import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Agentation } from 'agentation';
import LandingPage from './components/LandingPage';
import StartLearningPage from './components/StartLearningPage';
import PlaceholderPage from './components/PlaceholderPage';
import CoursesPage from './components/CoursesPage';
import Footer from './components/Footer';
import AdminPage from './components/AdminPage';
import { 
  DemosPage, FeaturesPage, EventsPage, PortfolioPage, 
  BlogPage, ContactPage, AuthPage, SearchPage, 
  AboutPage, StorePage, DemoPlayerPage
} from './components/Pages';

function App() {
  return (
    <Router>
      <Agentation />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/start-learning" element={<StartLearningPage />} />
        <Route path="/demos" element={<DemosPage />} />
        <Route path="/demo/:id" element={<DemoPlayerPage />} />
        <Route path="/courses" element={<CoursesPage />} />
        <Route path="/features" element={<FeaturesPage />} />
        <Route path="/events" element={<EventsPage />} />
        <Route path="/portfolio" element={<PortfolioPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/login" element={<AuthPage isLogin={true} />} />
        <Route path="/register" element={<AuthPage isLogin={false} />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/store" element={<StorePage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
