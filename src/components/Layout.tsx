import React from 'react';
import Sidebar from './Sidebar';
import Header from './Header';

interface LayoutProps {
  children: React.ReactNode;
  activePage: string;
  onPageChange: (page: string) => void;
}

const Layout: React.FC<LayoutProps> = ({ children, activePage, onPageChange }) => {
  const getPageTitle = (page: string) => {
    switch (page) {
      case 'menu':
        return 'Menu Management';
      case 'staff':
        return 'Staff Management';
      case 'ingredients':
        return 'Ingredient Management';
      case 'dashboard':
        return 'Dashboard';
      default:
        return 'Menu Management';
    }
  };

  return (
    <div className="layout">
      <Sidebar activePage={activePage} onPageChange={onPageChange} />
      <div className="main-content">
        <Header pageTitle={getPageTitle(activePage)} />
        <div className="content">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Layout;
