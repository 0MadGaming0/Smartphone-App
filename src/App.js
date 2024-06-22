import logo from './logo.svg';
import './App.css';
import AddSmartPhone from './components/AddSmartPhone';
import SearchSmartphone from './components/SearchSmartphone';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import DeleteSmartphone from './components/DeleteSmartphone';

function App() {
  return (
   <BrowserRouter>
   <Routes>
    <Route path="/" element={<AddSmartPhone/>}/>
    <Route path="/search" element={<SearchSmartphone/>}/>
    <Route path="/delete" element={<DeleteSmartphone/>}/>
   </Routes>
   </BrowserRouter>
  );
}

export default App;
