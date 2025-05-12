import React from 'react';
import { Button } from 'antd';
import { useNavigate } from 'react-router-dom';
import { LogoutOutlined } from '@ant-design/icons';
import styled from 'styled-components';
import { useAuth } from "../../../authentication/AuthContext";

const StyledButton = styled( Button )`
    
    &:hover,
    &:focus {
        font-weight: bold !important;
        background: transparent !important;
        box-shadow: none !important;
        outline: none !important;
    }
`;

const LogOut = () => {
    const navigate = useNavigate();
    const { logout } = useAuth();

    const handleLogout = async () => {
        await logout();
        navigate('/');
    };

    return (
        <StyledButton
            type="text"
            icon={<LogoutOutlined />}
            onClick={handleLogout}
            style={{position: 'absolute', top: '1rem', right: '1rem'}}
        >
            Log out
        </StyledButton >
    );
};

export default LogOut;