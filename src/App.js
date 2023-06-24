import './App.css';

import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Peliculas from './components/Peliculas';

function App() {
  return (
    <div className='App'>
      
      <NavBar/>
      <Peliculas/>
      <Footer/>
           
      

    </div>
  );
}
/*-<Routes>
        <Route path='/' element={<Peliculas/>}/>
        <Route path='/Peli' element={<Peli/>}/>
      </Routes>-*/
export default App;
