import React, { useState } from 'react';
import './App.css';
import Layout from './components/Layout';
import MenuManagement from './pages/MenuManagement';
import StaffManagement from './pages/StaffManagement';
import IngredientsManagement from './pages/IngredientsManagement';

function App() {
  const [currentPage, setCurrentPage] = useState('menu');

  const renderPage = () => {
    switch (currentPage) {
      case 'menu':
        return <MenuManagement />;
      case 'staff':
        return <StaffManagement />;
      case 'ingredients':
        return <IngredientsManagement />;
      case 'dashboard':
        return <div>Dashboard page coming soon...</div>;
      default:
        return <MenuManagement />;
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