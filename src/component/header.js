import React from 'react';
import {Row,Col,Menu} from 'antd';
import {Link,useLocation} from 'react-router-dom';
import routes from '../router/routes';

function Header() {
  const location = useLocation();
  const {pathname} = location;
  return (
    <Row className='wrap'>
        <Col md={2} xs={6} sm={4}>
            <h1 className='logo'>
                <Link to='/'>CNode</Link>
            </h1>
        </Col>
        <Col md={20} xs={16} sm={18} offset={2}>
            <Menu 
                mode='horizontal'
                theme='dark'
                selectedKeys={[pathname]}
            >
                {routes.filter(item=>item.isNav).map(item=>{
                    return <Menu.Item key={item.path}><Link to={item.path}>{item.title}</Link></Menu.Item>
                })}
            </Menu>
        </Col>
    </Row>
  );
}

export default Header;
