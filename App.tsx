import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import EntrySections from './components/EntrySections';
import Footer from './components/Footer';
import TechOverlay from './components/TechOverlay';
import OpportunitiesPage from './components/OpportunitiesPage';
import CoursesPage from './components/CoursesPage';
import PathwaysPage from './components/PathwaysPage';
import Onboarding from './components/Onboarding';
import AuthModal from './components/AuthModal';
import Dashboard from './components/Dashboard';

export type Page = 'home' | 'opportunities' | 'courses' | 'pathways' | 'onboarding' | 'dashboard';
export type Theme = 'dark' | 'light';

const App: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [theme, setTheme] = useState<Theme>('dark');
  const [isAuthModalOpen, setAuthModalOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPage]);

  const toggleTheme = () => setTheme(prev => prev === 'dark' ? 'light' : 'dark');

  const handleLoginSuccess = () => {
    setIsLoggedIn(true);
    setAuthModalOpen(false);
    setCurrentPage('dashboard');
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setCurrentPage('home');
  };

  const renderContent = () => {
    let content;
    switch (currentPage) {
      case 'opportunities':
        content = <OpportunitiesPage theme={theme} />;
        break;
      case 'courses':
        content = <CoursesPage theme={theme} />;
        break;
      case 'pathways':
        content = <PathwaysPage theme={theme} />;
        break;
      case 'onboarding':
        content = <Onboarding theme={theme} onNavigate={setCurrentPage} onComplete={() => setAuthModalOpen(true)} />;
        break;
      case 'dashboard':
        content = <Dashboard theme={theme} onNavigate={setCurrentPage} />;
        break;
      case 'home':
      default:
        content = (
          <>
            <Hero onNavigate={setCurrentPage} theme={theme} />
            <EntrySections onNavigate={setCurrentPage} theme={theme} />
          </>
        );
        break;
    }
    return <div key={currentPage} className="page-transition">{content}</div>;
  };

  const bgClass = theme === 'dark' ? 'bg-[#020617] text-slate-200' : 'bg-[#f8fafc] text-slate-900';

  return (
    <div className={`min-h-screen ${bgClass} selection:bg-cyan-500/30 flex flex-col transition-colors duration-500`}>
      <TechOverlay theme={theme} />
      
      <header className={`fixed top-0 w-full z-[100] transition-all duration-300 ${
        scrolled || currentPage !== 'home' 
          ? (theme === 'dark' ? 'bg-[#020617]/90 backdrop-blur-md border-b border-white/5 py-3' : 'bg-white/90 backdrop-blur-md border-b border-slate-200 py-3') 
          : 'bg-transparent py-6'
      }`}>
        <Navbar 
          currentPage={currentPage} 
          onNavigate={setCurrentPage} 
          theme={theme} 
          toggleTheme={toggleTheme} 
          onLogin={() => setAuthModalOpen(true)}
          isLoggedIn={isLoggedIn}
          onLogout={handleLogout}
        />
      </header>

      <main className="flex-grow">
        {renderContent()}
      </main>

      <AuthModal 
        isOpen={isAuthModalOpen} 
        onClose={() => setAuthModalOpen(false)} 
        theme={theme} 
        onSuccess={handleLoginSuccess}
      />
      <Footer theme={theme} />
    </div>
  );
};

export default App;