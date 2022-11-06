import { BrowserRouter,Routes,Route } from 'react-router-dom';
import './App.css';
import AppBody from './AppBody';
import AppHeader from './AppHeader';

function App() {
  return (
      <div className="App">
        <h1 className='h1_library'>Библиотека</h1>
        <AppHeader/>
        <AppBody/>
      </div>
  );
}

export default App;
