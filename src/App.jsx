import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';
import ListCars from './components/ListCars';
import ListCarsModeles from './components/ListCarsModeles';

function App() {
  /* ---------- exercice 1 ----------- */

  const [cars, setCars] = useState([]);
  const carsLoading = () => {
    axios
      .get('https://parallelum.com.br/fipe/api/v1/carros/marcas/')
      .then((response) => setCars(response.data));
  };

  /* ---------- exercice 2 ----------- */

  const [idModele, setIdModele] = useState(1);
  const [carsModeles, setCarsModeles] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://parallelum.com.br/fipe/api/v1/carros/marcas/${idModele}/modelos`
      )
      .then((response) => setCarsModeles(response.data.modelos));
  }, [idModele]);

  return (
    <div className="App">
      <div className="container-left">
        <button onClick={carsLoading}>afficher la liste des voitures</button>
        {cars.map((res) => (
          <div className="container" key={res.codigo}>
            <ListCars car={res} />
            <button onClick={() => setIdModele(res.codigo)}>
              identifiant {res.codigo}{' '}
            </button>
          </div>
        ))}
      </div>
      <div className="container-right">
        {carsModeles.map((res) => (
          <ListCarsModeles key={res.codigo} modele={res} />
        ))}
      </div>
    </div>
  );
}

export default App;
