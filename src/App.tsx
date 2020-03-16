import React from 'react';
import { Home } from './pages/index';
import 'normalize.css';
import '@sweetalert2/theme-dark/dark.min.css'; // SweetAlert Dark theme
import 'react-perfect-scrollbar/dist/css/styles.css';

function App(): JSX.Element {
  return (
    <div className="App">
      <Home />
    </div>
  );
}

export default App;
