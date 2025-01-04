import { useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthContext from '../context/AuthContext';
import { Logout } from '@mui/icons-material';

const LogoutPage = () => {
  const navigate = useNavigate();
  const { logout } = useContext(AuthContext);

  useEffect(() => {
    logout();
    alert('You have been logged out successfully.');
    
    // Redirect to the login page
    navigate('/');
  }, [navigate]);

  return null; // No visible content needed; redirection is handled automatically
};

export default LogoutPage;
