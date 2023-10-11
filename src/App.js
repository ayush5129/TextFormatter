import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextDom';
import React, { useState } from 'react';
import Alert from './components/alert';

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setalert] = useState(null);

  const showAlert = (message, type) => {
    setalert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setalert(null)
    }, 2000);
  }
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#585887';
      document.title = 'TextTransorm-Dark Mode';
      showAlert("Dark mode has been enabled", "success")
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      document.title = 'TextTransorm-Light Mode';
      showAlert("Light mode has been enabled", "success")
    }
  };
  return (
    <>
      <Navbar title="Textformatters" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className="container my-3 ">
        <TextForm showAlert={showAlert} heading="TextFormatters-Word counter | Copy text | Remove extra spaces | Download file" />
      </div>
    </>
  );
}
export default App;
