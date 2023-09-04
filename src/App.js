
import './App.css';
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import FooterComponent from './components/FooterComponent';
import HeaderComponent from './components/HeaderComponent';
import ListCustomersComponents from './components/ListCustomersComponents';
import AddCustomerComponent from './components/AddCustomerComponent';
import ListContractsComponents from './components/ListContractsComponent';
import AddContractComponent from './components/AddContractComponent';

function App() {
  return (
    <div>
      <Router>
      < HeaderComponent />
      <div className="container">
      <Routes>
            {/* Routes for Customers */}
            <Route path="/" element={<ListCustomersComponents />} />
            <Route path="/customers" element={<ListCustomersComponents />} />
            <Route path="/add-customer" element={<AddCustomerComponent />} />
            <Route path="/edit-customer/:id" element={<AddCustomerComponent />} />

            {/* Routes for Contracts */}
            <Route path="/contracts" element={<ListContractsComponents />} />
            <Route path="/add-contract" element={<AddContractComponent />} />
            <Route path="/edit-contract/:id" element={<AddContractComponent />} />
          </Routes>
      </div>
      < FooterComponent />
      </Router>
    </div>
  );
}

export default App;
