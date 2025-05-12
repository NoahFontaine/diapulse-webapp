import { useNavigate } from 'react-router-dom';
import { Button } from 'antd';
import { LoginOutlined } from '@ant-design/icons';
import styled from 'styled-components';

const StyledButton = styled(Button)`

    &:hover,
    &:focus {
        font-weight: bold !important;
        background: transparent !important;
        box-shadow: none !important;
        outline: none !important;
    }
`;

const LogIn = () => {
    const navigate = useNavigate();

    return (
        <StyledButton
            type="text"
            icon={<LoginOutlined/>}
            onClick={() => navigate('/signin')}
            style={{position: 'absolute', top: '1rem', right: '1rem'}}
        >
        </StyledButton>
    )

};

export default LogIn;