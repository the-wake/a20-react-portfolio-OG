import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar.js';
import Banner from './components/Banner.js';
import Body from './components/Body.js';

function App() {
  return (
    <div>
      <Navbar />
      <Banner />
      <Body />
    </div>
  );
}

export default App;
