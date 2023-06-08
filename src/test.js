import { useState } from 'react';
import { ThemeProvider } from 'styled-components';

const themes = {
  dark: {
    background: "#1f1f1f",
    color: "#fff"
  },
  light: {
    background: "#fff",
    color: "#1f1f1f"
  }
};

const App = () => {
  const [mode, setMode] = useState('light');

  const toggleMode = () => {
    setMode(mode === 'light' ? 'dark' : 'light');
  };

  return (
    <ThemeProvider theme={themes[mode]}>
      <div>
        <h1>Welcome to my App</h1>
        <p>Here is some text in {mode} mode</p>
        <button onClick={toggleMode}>Toggle Mode</button>
      </div>
    </ThemeProvider>
  );
};

export default App;
