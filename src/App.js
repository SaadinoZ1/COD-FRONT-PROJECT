
import './App.css';
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import FooterComponent from './components/FooterComponent';
import HeaderComponent from './components/HeaderComponent';
import ListCustomersComponents from './components/ListCustomersComponents';
import AddCustomerComponent from './components/AddCustomerComponent';
function App() {
  return (
    <div>
      <Router>
      < HeaderComponent />
      <div className="container">
        <Routes>
            <Route path="/" element={<ListCustomersComponents />} />
            <Route path="/customers" element={<ListCustomersComponents />} />
            <Route path="/add-customer" element={<AddCustomerComponent />} />
            <Route path="/edit-customer/:id" element={<AddCustomerComponent />} />
        </Routes>
      </div>
      < FooterComponent />
      </Router>
    </div>
  );
}

export default App;
