import './App.css';
//import Navbar from './components/Navbar/index';
import { BrowserRouter as Router } from 'react-router-dom';
//import Sidebar from './components/Sidebar';
import Home from './pages/Home';
import {DataProvider} from './Context/Context';

function App() {

  return (
    <DataProvider>
      <div className="app">
        <Router >
          <Home />
        </Router>
      </div>
    </DataProvider>
  );

}

export default App;
