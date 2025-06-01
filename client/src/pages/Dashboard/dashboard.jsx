import {jwtDecode} from 'jwt-decode';

function Dashboard() {
  const token = localStorage.getItem('token');
  const user = jwtDecode(token);

  return (
    <div>
      <h2>Welcome, {user.name}!</h2>
      <p>Email: {user.email}</p>
      <p>Role: {user.role}</p>
    </div>
  );
}

export default Dashboard;
