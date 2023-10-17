
import './App.css';
import CardComponent from './Components/Miscellaneous/CardComponent';
// import BarChart from './Components/Miscellaneous/BarChart';
// import DashboardCards from './Components/Miscellaneous/DashboardCards';
// import LoginPage from './Pages/LoginPage';
import HomePage from './Pages/HomePage';
import Dashboard from './Components/Dashboard';
import CreateProject from './Components/CreateProject';

function App() {
  return (
    <div className="App">
      <CreateProject />
      <Dashboard />
      <HomePage />
      {/* <LoginPage /> */}
      {/* <DashboardCards /> gives error */}
      {/* <BarChart /> */}
      {/* <CardComponent /> */}
    
    </div>
  );
}

export default App;
