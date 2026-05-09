import React, { useState, useEffect } from 'react';
import { ADMIN_PAGES } from './constants';
import axios from 'axios';

const AdminDashboard = () => {
  const [menu, setMenu] = useState([]);
  const [currentPage, setCurrentPage] = useState(ADMIN_PAGES.OVERVIEW);

  useEffect(() => {
    const fetchMenu = async () => {
      try {
        const res = await axios.get('http://localhost:5000/api/dashboard/menu', {
          headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
        });
        setMenu(res.data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchMenu();
  }, []);

  return (
    <div style={{ display: 'flex' }}>
      <div style={{ width: 250, background: '#f5f5f5', padding: '20px' }}>
        <h3>Admin Dashboard</h3>
        {menu.map(item => (
          <button
            key={item.key}
            onClick={() => setCurrentPage(item.key)}
          >
            {item.label}
          </button>
        ))}
      </div>
      <div style={{ flex: 1, padding: '20px' }}>
        {currentPage === ADMIN_PAGES.OVERVIEW && <div>Overview</div>}
        {currentPage === ADMIN_PAGES.USER_MANAGE && <div>用户管理</div>}
        {currentPage === ADMIN_PAGES.LIBRARIAN_MANAGE && <div>管理员管理</div>}
        {currentPage === ADMIN_PAGES.ROLE_PERMISSION && <div>权限管理</div>}
      </div>
    </div>
  );
};

export default AdminDashboard;