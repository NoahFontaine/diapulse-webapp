import { Routes, Route } from 'react-router-dom';
import { ConfigProvider, theme } from 'antd';
import SignOn from './pages/SignOn';
import HomeIndex from './pages/Home/HomeIndex.jsx';
import DashboardIndex from './pages/Dashboard/DashboardIndex.jsx';
import PrivateRoute from './routes/PrivateRoute';
import { AuthProvider } from './authentication/AuthContext';

const App = () => (
  <AuthProvider>
    <ConfigProvider
      theme={{
        algorithm: theme.darkAlgorithm,
      }}
    >
      <Routes>
        <Route path="/" element={<HomeIndex />} />
        <Route path="/signin" element={<SignOn />} />
        <Route path="/dashboard" element={
          <PrivateRoute>
            <DashboardIndex />
          </PrivateRoute>
        } />
      </Routes>
    </ConfigProvider>
  </AuthProvider>
);

export default App;
// This code sets up the main application component using React Router. It defines two routes: the sign-in page and the home page, which is protected by a private route component. The AuthProvider wraps the entire application to provide authentication context to all components.
