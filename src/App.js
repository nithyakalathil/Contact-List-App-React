import logo from './logo.svg';
import './App.css';
import AddContact from './components/AddContact';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Search from './components/Search';
import ViewAll from './components/ViewAll';

function App() {
  return (
    
<BrowserRouter>
<Routes>
  <Route path='/' element={<AddContact/>}/>
  <Route path='/s' element={<Search/>}/>
  <Route path='/v' element={<ViewAll/>}/>
</Routes>
</BrowserRouter>

  );
}

export default App;
