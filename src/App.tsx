import React from 'react';

// Import components
import HomePage from './components/HomePage';
import Header from './components/Header';

function App() {
  return (
    <div className="min-h-screen flex flex-col font-sans bg-white">
      {/* Header with Navigation */}
      <Header />

      {/* Main Content */}
      <main>
        <HomePage />
      </main>
    </div>
  );
}

export default App;