// App.js

import React from 'react';
import Header from './src/components/Header'; // Make sure the path is correct

function App() {
  return (
    <div>
      {/* Add Header */}
      <Header />

      {/* Add other components or content here */}
      <main>
        <h1>Welcome to QuickApplyLoan!</h1>
        {/* Additional sections like About, Services, Contact, etc. */}
      </main>
    </div>
  );
}

export default App;
