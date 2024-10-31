import { useState } from 'react';
import PasswordStrengthChecker from './components/PasswordStrengthChecker';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <PasswordStrengthChecker />
    </>
  );
}

export default App;
