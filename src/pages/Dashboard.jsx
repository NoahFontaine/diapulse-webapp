import React from 'react';
import { Typography, Button } from 'antd';
import { LogoutOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../authentication/AuthContext';
import styled from 'styled-components';

const StyledButton = styled(Button)`
    border: none !important;

    &:hover,
    &:focus {
        border: none !important;
        font-weight: bold !important;
        background: transparent !important;
        box-shadow: none !important;
        outline: none !important;
    }
`;

const Dashboard = () => {
    const navigate = useNavigate();
    const { logout } = useAuth();

    const handleLogout = async () => {
        await logout();
        navigate('/');
    };

    return (
        <div style={{ padding: '2rem' }}>
            <StyledButton
                type="text"
                icon={<LogoutOutlined/>}
                onClick={handleLogout}
                style={{ position: 'absolute', top: '1rem', right: '1rem', color: 'white' }}
            >
                Log out
            </StyledButton>
            <Typography.Title level={2}>Dashboard</Typography.Title>
            {/* Add your dashboard content here */}
        </div>
    );
}

export default Dashboard;
