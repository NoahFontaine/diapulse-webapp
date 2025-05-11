import { useNavigate } from 'react-router-dom';
import { Button, Typography } from 'antd';
import { LoginOutlined } from '@ant-design/icons';

const Home = () => {
    const navigate = useNavigate();

    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            padding: '2rem'
        }}>
            <Typography.Title>Welcome to DiaPulse</Typography.Title>
            {/* Add your home page content here */}

            <Button
                type="primary"
                icon={<LoginOutlined />}
                onClick={() => navigate('/signin')}
                style={{ position: 'absolute', top: '1rem', right: '1rem' }}
            >
                Sign In
            </Button>
        </div>
    );
};

export default Home;
