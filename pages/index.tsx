import React from 'react';
import { Result } from 'antd';
import Layout from '../components/Layout';

const Home =()=>(
    <Layout title="Welcome to Undefined.com">
        <Result
            status="success"
            title="Welcome to Undefined.com"
            subTitle="Welcome to Undefined, please visit us again very soon. Our developers are busy adding new features."
        />
    </Layout>
    
);

export default Home;
