import './App.css';
import Destination from './components/Destination';

const fruits = ['pomme', 'banane', 'kiwi', 'ananas', 'orange', 'pêche'];

const address = [
  {
    city: 'Paris',
    country: 'France',
    street: 'place de la bourse',
  },
  {
    city: 'Londre',
    country: 'Angleterre',
    street: 'Rue des anglais',
  },
  {
    city: 'Madrid',
    country: 'Espagne',
    street: 'rue des espagnol',
  },
];

// function App() {
//   return (
//     <div className="App">
//       {fruits.map((fruit) => (
//         <h5>{fruit}</h5>
//       ))}
//     </div>
//   );
// }

function App() {
  return (
    <div className="App">
      {address.map((response) => (
        <Destination detailsAddress={response} />
      ))}
    </div>
  );
}


export default App;
