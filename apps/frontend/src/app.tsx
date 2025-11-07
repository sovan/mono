import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar/NavBar';
import NavData from './data/NavBar.json';
import { BrowserRouter } from 'react-router-dom';
import Routers from './Routers';

function App() {
  return (
    <BrowserRouter>
      <NavBar data={NavData} />
      <Routers />
    </BrowserRouter>
  );
}

export default App;
