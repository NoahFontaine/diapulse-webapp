import { Typography } from 'antd';
import LogIn from './components/LogIn';
import { HomeContainer } from './styles/HomeContainer'
import styled from 'styled-components';

const ContentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 2rem;
    // Add a semi-transparent overlay if needed
    background-color: rgba(255, 255, 255, 0.8);  // white with 80% opacity
`;



const HomeIndex = () => {

    return (
        <HomeContainer>
            <ContentWrapper>
                <Typography.Title>Welcome to DiaPulse</Typography.Title>
                {/* Your content here */}
            </ContentWrapper>

            < LogIn />
        </HomeContainer>

    );
};

export default HomeIndex;
