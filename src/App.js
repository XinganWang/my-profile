import {Routes,Route
} from "react-router-dom";
import './App.css';
import Navbar from './component/Navbar/Navbar'
import Home from './component/Home/Home'
import About from './component/About/About'
import Projects from './component/Projects/Projects'
import Footer from './component/Footer/Footer'

function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/home' element = {<Home/>}></Route>
        <Route path='/about' element = {<About/>}></Route>
        <Route path='/Projects' element = {<Projects/>}></Route>
        <Route path='/my-profile' element = {<Home/>}></Route>
        <Route path='' element = {<Home/>}></Route>
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
