import { Routes, Route } from 'react-router-dom';
import SignOn from './pages/SignOn';
import Home from './pages/Home';
import PrivateRoute from './pages/PrivateRoute';
import { AuthProvider } from './authentication/AuthContext';

const App = () => (
  <AuthProvider>
    <Routes>
      <Route path="/" element={<SignOn />} />
      <Route path="/home" element={
        <PrivateRoute>
          <Home />
        </PrivateRoute>
      } />
    </Routes>
  </AuthProvider>
);

export default App;
// This code sets up the main application component using React Router. It defines two routes: the sign-in page and the home page, which is protected by a private route component. The AuthProvider wraps the entire application to provide authentication context to all components.