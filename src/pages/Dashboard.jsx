import React from 'react';
import { Typography, Button } from 'antd';
import { LogoutOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../authentication/AuthContext';

const Dashboard = () => {
    const navigate = useNavigate();
    const { logout } = useAuth();

    const handleLogout = async () => {
        await logout();
        navigate('/');
    };

    return (
        <div style={{ padding: '2rem' }}>
            <Button
                type="primary"
                icon={<LogoutOutlined />}
                onClick={handleLogout}
                style={{ position: 'absolute', top: '1rem', right: '1rem' }}
            >
                Logout
            </Button>
            <Typography.Title level={2}>Dashboard</Typography.Title>
            {/* Add your dashboard content here */}
        </div>
    );
};

export default Dashboard;
