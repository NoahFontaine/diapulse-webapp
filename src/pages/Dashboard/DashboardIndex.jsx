import React from 'react';
import { Typography } from 'antd';
import LogOut from './components/LogOut.jsx';

const DashboardIndex = () => {

    return (
        <div style={{ padding: '2rem' }}>
            <LogOut />
            <Typography.Title level={2}>Dashboard</Typography.Title>
            {/* Add your dashboard content here */}
        </div>
    );
}

export default DashboardIndex;
