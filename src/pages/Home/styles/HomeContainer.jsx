import styled from 'styled-components';
import backgroundImage from '../../../assets/images/background.png';

export const HomeContainer = styled.div`
    min-height: 100vh;
    width: 100vw;
    background-image: url(${backgroundImage});
    background-size: cover;  // This makes the image cover the entire container
    background-position: center;  // Centers the image
    background-repeat: no-repeat;
    background-attachment: fixed;  // Makes the background fixed while scrolling
`;