import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Register from './Register';
import Login from './Login';
import Homepage from './Homepage';

function App() {
  return (
    <>
<BrowserRouter>
<Routes>
  <Route path="/" element={<Login/>}/>
  <Route path="/register" element={<Register/>}/>
  <Route path="/homepage" element={<Homepage/>}/>
</Routes>
</BrowserRouter>
    </>
  );
}

export default App;
