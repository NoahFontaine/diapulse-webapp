import { Outlet } from 'react-router-dom';

const AuthLayout = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <Outlet /> {/* Renders authentication pages */}
    </div>
  );
};

export default AuthLayout;