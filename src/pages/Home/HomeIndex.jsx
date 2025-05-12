import { Typography } from 'antd';
import LogIn from './components/LogIn.jsx';

const HomeIndex = () => {

    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            padding: '2rem'
        }}>
            <Typography.Title>Welcome to DiaPulse</Typography.Title>
            {/* Add your home page content here */}

            <LogIn />
        </div>
    );
};

export default HomeIndex;
