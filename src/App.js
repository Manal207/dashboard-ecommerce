import AddProduct from './AddProduct';
import './App.css';
import Navbardash from './Navbardash';
import Sidebar from './Sidebar'; // Import the Sidebar component

function App() {
  return (
    <div className="App">
      <Navbardash/>
      <Sidebar />
      <AddProduct/>
    </div>
  );
}

export default App;
