import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import Routing from './Routing';
import Navbar from './Navbar';


const App = () => {
  return (
    <>
      <Navbar /><br />
      <Routing />
    </>
  );
}

export default App;
