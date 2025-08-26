import React, { useState } from 'react';

// Import page components
import HomePage from './components/HomePage';
import CollectionsPage from './components/CollectionsPage';
import AboutPage from './components/AboutPage';
import Header from './components/Header';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'collections':
        return <CollectionsPage />;
      case 'about':
        return <AboutPage />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col font-sans bg-white">
      {/* Header with Navigation */}
      <Header currentPage={currentPage} onPageChange={setCurrentPage} />

      {/* Main Content */}
      <main>
        {renderPage()}
      </main>
    </div>
  );
}

export default App;