import './App.scss';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/Home';
import './index.scss'
 
function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Layout />} />
      <Route index element={<Home/>} />
    </Routes>
    </>
  );
}

export default App;
