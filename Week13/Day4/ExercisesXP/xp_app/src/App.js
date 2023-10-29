import Car from './Components/Car';
import Events from './Components/Events';
import Phone from './Components/Phone';
import './App.css';

function App() {
  const carinfo = { name: 'Ford', model: 'Mustang' };
  return (
    <div>
      <Car model={carinfo.model}/>
      <Events/>
      <Phone/>
    </div>
  );
}

export default App;
