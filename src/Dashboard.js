import AddProduct from './AddProduct';
import './Dashboard.css';
import Navbardash from './Navbardash';
import Sidebar from './Sidebar'; // Import the Sidebar component

function Dashboard() {
  return (
    <div className="dash">
      <Navbardash/>
      <Sidebar />
      <AddProduct/>
    </div>
  );
}

export default Dashboard;