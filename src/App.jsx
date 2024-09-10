import './App.css';
import Mainpage from './components/Mainpage';
import { Route, Routes,Navigate } from 'react-router-dom';
import Mealinfo from './components/Mealinfo';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Mainpage />} />
      <Route path='/:mealId' element={<Mealinfo/>}/>

    </Routes>
  );
}

export default App;
