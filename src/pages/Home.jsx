import { Button, Typography } from 'antd';
import { useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { auth } from '../authentication/firebase';

const Home = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    await signOut(auth);
    navigate('/');
  };

  return (
    <div style={{ padding: 40 }}>
      <Typography.Title level={2}>Welcome Home!</Typography.Title>
      <Button onClick={handleLogout}>Logout</Button>
    </div>
  );
};

export default Home;
