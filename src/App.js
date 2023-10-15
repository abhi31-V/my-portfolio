import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { Home } from './Components/Home';
import { Navbar } from './Components/Navbar';
import About from './Components/About';

function App() {
  return (
    <div className="bg-bgImg bg-cover bg-center bg-no-repeat min-h-screen min-w-screen ">
      <BrowserRouter>
      <Navbar className="hidden"/>
      <Routes>
<Route exact path="/" element={<Home/>}/>
<Route path="/about" element={<About/>}/>
</Routes>
</BrowserRouter>
    </div>
  );
}

export default App;
