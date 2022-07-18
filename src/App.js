import './App.css';
import Login from './Components/Login';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Dashboard from './Components/Dashboard';
import Protected from './Protected';
import ErrorPage from './Components/ErrorPage';
import { MyContaxt } from './Components/Context';
import { useState } from 'react';
import Home from './Components/Home';


function App() {
  const [isLogin, setisLogin] = useState(0);
  const changeLoginStatus=(e) => setisLogin(e);
  const value = {isLogin, changeLoginStatus};
  return (
    <div className="App">

      <MyContaxt.Provider value={value} >
        <Home />
        {/* <Login /> */}
      </MyContaxt.Provider>
      
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Login />} />
            <Route path='/dashboard' element={<Protected> <Dashboard /> </Protected>} />
            <Route path='*' element={<ErrorPage />} />
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
