import './App.css';
import Home from './Home';
import
{
  BrowserRouter as Router,
  Routes,
  Route
}from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
      <Home></Home>
      </Router>
      
    </div>
  );
}

export default App;
