import Car from './Components/Car';
import Events from './Components/Events';
import './App.css';

function App() {
  const carinfo = { name: 'Ford', model: 'Mustang' };
  return (
    <div>
      <Car model={carinfo.model}/>
      <Events/>
    </div>
  );
}

export default App;
