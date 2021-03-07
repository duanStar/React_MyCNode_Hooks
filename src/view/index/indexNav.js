import React from 'react';
import {Menu} from 'antd';
import qs from 'qs';
import {Link, useLocation} from 'react-router-dom';
import routes from '../../router/routes';

function IndexNav() {
    const location = useLocation();
    let {pathname,search} = location;
    search = (pathname==='/'&&!search)?{tab:'all'}:qs.parse(search.substr(1));
    return (
      <Menu
          mode='horizontal'
          selectedKeys={[search.tab]}
      >
          {routes.filter(item=>item.isIndexNav).map(item=>{
              return <Menu.Item key={item.path.split('=')[1]}><Link to={item.path}>{item.title}</Link></Menu.Item>
          })}
      </Menu>
    );
}

export default IndexNav;
