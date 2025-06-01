import { useEffect, useState } from 'react';
import axios from 'axios';
import "./userInfo.css"

function AdminPanel() {
  const [users, setUsers] = useState([]);
  const token = localStorage.getItem('token');

  useEffect(() => {
    axios.get('http://localhost:5000/api/auth/users', {
      headers: { Authorization: `Bearer ${token}` }
    })
    .then(res => setUsers(res.data))
    .catch(() => alert('Access denied'));
  }, [token]);

  return (
    <div>
      <h2>Admin Panel</h2>
      <table border="1">
        <thead>
          <tr><th>ID</th><th>Name</th><th>Email</th><th>Role</th></tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.id}><td>{user.id}</td><td>{user.name}</td><td>{user.email}</td><td>{user.role}</td></tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default AdminPanel;
