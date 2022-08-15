import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Cards from './components/Card';


function App() {
  return (
    <div>
    <Header/> 
    <div className='area'> 
    <Cards  
     imag="https://media.chvnoticias.cl/2018/12/casas-en-la-playa-en-yucatan-2712.jpg"
     title=" Casa de Playa"
     text="Despierta tus días oyendo el oceano"
    /> 
    <Cards
     imag="https://www.construyehogar.com/wp-content/uploads/2020/02/Dise%C3%B1o-casa-en-ladera.jpg"
     title=" Casa de campo"
     text="Un lugar ideal para descansar de la ciudad"
     />
     <Cards
     imag="https://fotos.perfil.com/2018/09/21/trim/950/534/nueva-york-09212018-366965.jpg"
     title=" Casa en el centro"
     text="Ten cerca de ti todo lo que necesitas"
     />
    </div> 
    <Footer/>
    </div>
  );
}
export default App;
