import { useEffect, useState } from 'react';
import './App.css';
import About from './components/About';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');
  const [theme, setTheme] = useState('grey');
  const [alert, setAlert] = useState(null);
  const colours = {
    "body": {
      "light": {
        "grey": "#495057",
        "cyan": "#087990",
        "pink": "#801f4f",
        "teal": "#13795b"
      },
      "dark": {
        "grey": "#dee2e6",
        "cyan": "#6edff6",
        "pink": "#e685b5",
        "teal": "#79dfc1"
      }
    },
    "navbarTextArea": {
      "light": {
        "grey": "#212529",
        "cyan": "#032830",
        "pink": "#2b0a1a",
        "teal": "#06281e"
      },
      "dark": {
        "grey": "#f8f9fa",
        "cyan": "#cff4fc",
        "pink": "#f7d6e6",
        "teal": "#d2f4ea"
      }
    }
  };

  const getColorByTheme = (type, mode, theme)=>{
    return colours[type][mode][theme];
  }

  const showAlert = (message, type)=>{
    setAlert({
      message: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500 );
  }

  const toggleTheme = (event)=>{
    setTheme(event.target.value);
  }

  const toggleMode = ()=>{
    document.body.style.backgroundColor = colours["body"][mode][theme];
    if (mode === 'light') {
      setMode('dark');
      showAlert("Dark mode is enabled", "success")
    } else {
      setMode('light');
      showAlert("Light mode is enabled", "success")
    }
  }

  useEffect(() => {
    document.body.style.backgroundColor = getColorByTheme("body", mode === 'dark' ? 'light' : 'dark', theme);
  });

  return (
    <>
    <Alert alert={alert}/>
    <Router>
      <Navbar mode={mode} theme={theme} toggleMode={toggleMode} toggleTheme={toggleTheme} getColorByTheme={getColorByTheme}/>
        <div className="container">
          <Routes>
            <Route exact path="/about" element={<About />}>
            </Route>
            <Route exact path="/" element={<TextForm mode={mode} theme={theme} getColorByTheme={getColorByTheme} heading="Enter the text to anaylse" showAlert={showAlert}/>}>
            </Route>
          </Routes>
        </div>
      {/* <About mode={mode}/> */}
    </Router>
    </>
  );
}

export default App;
