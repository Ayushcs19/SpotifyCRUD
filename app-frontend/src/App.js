import logo from './logo.svg';
import './App.css';
import HomePage from './components/Home.page';
import AddSongs from './components/AddSongs.page';
import PopUp from './components/popup';
import {Routes ,Route,BrowserRouter} from 'react-router-dom'
import NavBar from './components/Navbar';
import Topten from './components/Topten';
import ToptenArtist from './components/ToptenArtist';

function App() {
  return (
    <>
    {/* <PopUp/> */}
  <BrowserRouter>
  <NavBar/>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/topten" element={<Topten />} />
      <Route path="/toptenart" element={<ToptenArtist/>} />
      <Route path="/addartist" element={<PopUp />} />
    
    </Routes>
    </BrowserRouter>
    
      </>

  );
}

export default App;
