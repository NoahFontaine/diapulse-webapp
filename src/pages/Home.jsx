import { useNavigate } from 'react-router-dom';
import { Button, Typography } from 'antd';
import { LoginOutlined } from '@ant-design/icons';
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

            <StyledButton
                type="text"
                icon={<LoginOutlined />}
                onClick={() => navigate('/signin')}
                style={{ position: 'absolute', top: '1rem', right: '1rem', color: 'white' }}
            >
            </StyledButton>
        </div>
    );
};

export default Home;
