// src/App.tsx
import React from 'react';
import GridLayout from './components/GridLayout';
import "./App.css"
import TwoColumnLayout from './components/skillssection1';

const App: React.FC = () => {
  return (
    <div className="App">
      <TwoColumnLayout/>
      <GridLayout />
    </div>
  );
};

export default App;
