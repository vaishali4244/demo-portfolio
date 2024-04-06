import { Route, Routes } from 'react-router-dom';
import './App.css';
import Screen from './screens';

function App() {
  return (
    
      <Routes>
        <Route path='/' element={<Screen/>} />
      </Routes>
    
  );
}

export default App;
