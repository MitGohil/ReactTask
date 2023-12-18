import logo from './logo.svg';
import './App.css';
import browserRouter, { BrowserRouter, Route, Routes } from "react-router-dom"
import Userdata from './Components/Userdata';
import Userdetail from './Components/Userdetail';
import Createuser from './Components/Createuser';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Userdata />} />
        <Route path='userdetail/:userid' element={<Userdetail />} />
        <Route path='/createUser' element = {< Createuser />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
