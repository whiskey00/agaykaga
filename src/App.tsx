import React from 'react';

// Import components
import { HomePage, Header, PageTransition } from './components';

function App() {
  return (
    <div className="min-h-screen flex flex-col font-sans bg-white">
      {/* Header with Navigation */}
      <Header />

      {/* Main Content */}
      <main>
        <PageTransition>
          <HomePage />
        </PageTransition>
      </main>
    </div>
  );
}

export default App;