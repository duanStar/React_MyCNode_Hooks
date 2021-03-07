import React from 'react';
import Routes from './router/index';
import {Layout,Affix} from 'antd'
import Header from './component/header';
import Footer from './component/footer';

function App() {
  return (
    <Layout className='page'>
      <Affix offsetTop={0}>
        <Layout.Header id="header">
          <Header />
        </Layout.Header>
      </Affix>
      <Layout.Content>
        <div className="wrap">
          <Routes />
        </div>
      </Layout.Content>
      <Layout.Footer id='footer'>
        <Footer />
      </Layout.Footer>
    </Layout>
  );
}

export default App;
