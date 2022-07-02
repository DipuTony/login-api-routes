import './App.css';
import Login from './Components/Login';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Dashboard from './Components/Dashboard';
import Protected from './Protected';
import ErrorPage from './Components/ErrorPage';
import { MyContaxt } from './Components/Context';


function App() {
  return (
    <div className="App">

      <MyContaxt.Provider value="this is Contaxt" >
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Login />} />
            <Route path='/dashboard' element={<Protected> <Dashboard /> </Protected>} />
            <Route path='*' element={<ErrorPage />} />
          </Routes>
        </BrowserRouter>
      </MyContaxt.Provider>
    </div>
  );
}

export default App;
