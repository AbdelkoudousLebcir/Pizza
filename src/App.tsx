import React, { useState } from 'react';
import './App.css';
import Layout from './components/Layout';
import Dashboard from './pages/Dashboard';
import MenuManagement from './pages/MenuManagement';
import StaffManagement from './pages/StaffManagement';
import IngredientsManagement from './pages/IngredientsManagement';

function App() {
  const [currentPage, setCurrentPage] = useState('dashboard');

  const renderPage = () => {
    switch (currentPage) {
      case 'dashboard':
        return <Dashboard />;
      case 'menu':
        return <MenuManagement />;
      case 'staff':
        return <StaffManagement />;
      case 'ingredients':
        return <IngredientsManagement />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="App">
      <Layout activePage={currentPage} onPageChange={setCurrentPage}>
        {renderPage()}
      </Layout>
    </div>
  );
}

export default App;