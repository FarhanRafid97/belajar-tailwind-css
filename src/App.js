import './App.css';
import Navbar from './components/navbar/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './components/home/Home';
import Section2 from './components/section2/Section2';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Section2 />

      <Routes>{/* <Route path="/" element={<Navbar />} /> */}</Routes>
    </div>
  );
}

export default App;
