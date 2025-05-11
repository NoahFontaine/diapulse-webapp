import { Navigate } from 'react-router-dom';
import { useAuth } from '../authentication/AuthContext';

const PrivateRoute = ({ children }) => {
  const { user } = useAuth();
  return user ? children : <Navigate to="/" />;
};

export default PrivateRoute;
// This component checks if the user is authenticated. If they are, it renders the children components. If not, it redirects them to the sign-in page.