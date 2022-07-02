import logo from './logo.svg';
import './App.css';
import Login from './Components/Login';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Dashboard from './Components/Dashboard';
import Protected from './Protected';
import ErrorPage from './Components/ErrorPage';


function App() {
  return (
    <div className="App">
      {/* <Login /> */}
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login />} />

          {/* <Route path='/dashboard' element={<Dashboard />} /> */}
          <Route path='/dashboard' element={<Protected> <Dashboard /> </Protected>} />
          
          <Route path='*' element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
