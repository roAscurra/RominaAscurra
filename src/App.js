import './App.css';
import Card from './components/Card';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/card' element={<Card/>}/>
      </Routes>
    </Router>
  );
}

export default App;
