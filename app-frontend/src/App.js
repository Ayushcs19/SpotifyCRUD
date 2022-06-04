import logo from './logo.svg';
import './App.css';
import HomePage from './components/Home.page';
import AddSongs from './components/AddSongs.page';
import PopUp from './components/popup';
import {Routes ,Route,BrowserRouter} from 'react-router-dom'
import NavBar from './components/Navbar';

function App() {
  return (
    <>
  <NavBar/>
    {/* <PopUp/> */}
  <BrowserRouter>
    <Routes>
    
      <Route path="/" element={<HomePage />} />
      <Route path="/addsongs" element={<AddSongs />} />
      <Route path="/addartist" element={<PopUp />} />
    </Routes>
    </BrowserRouter>
      </>

  );
}

export default App;
