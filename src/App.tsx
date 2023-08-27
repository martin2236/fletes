import React from 'react';
import { Layout } from 'antd';
import { HeaderComponent } from './components/header/HeaderComponent';

export const App: React.FC = () => {
    return(
        <Layout className='layout'>
            <HeaderComponent/>
        </Layout>
    )
};
