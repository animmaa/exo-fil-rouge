import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';
import ListCars from './components/ListCars';


function App() {
  /* ---------- exercice 1 ----------- */

  const [cars, setCars] = useState([]);
  const carsLoading = () => {
    axios
      .get('https://parallelum.com.br/fipe/api/v1/carros/marcas/')
      .then((response) => setCars(response.data));
  };

  /* ---------- exercice 2 ----------- */

 useEffect(() => {

  /* appel axios ici */

 }, [])

  return (
    <div className="App">
      <div className="container-left">
        <button onClick={carsLoading}>afficher la liste des voitures</button>
        {cars.map((car) => (
          <div className="container" key={car.codigo}>
            <ListCars car={car} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
