import './App.css';
import Navbar from './components/Navbar';
import Slider from './components/Slider';
import ProductsList from './components/ProducsList';
import{Routes,Route} from "react-router-dom";
import About from './components/About';
import ProdcutDetails from './components/ProductDetails';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/' element={
          <>
          <Slider/>
          <ProductsList/>
          </>
        }/>  
        <Route path='about' element={<About/>} />
        <Route path='product/:productId' element={<ProdcutDetails/>} />
      </Routes>
      
    </div>
  );
}

export default App;
