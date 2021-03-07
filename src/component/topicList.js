import React from 'react';
import {List,Avatar,Col} from 'antd';
import { Link } from 'react-router-dom';
import { UserOutlined } from '@ant-design/icons';
import TopicTag from './topicTag';
import FromNow from './fromNow';

function TopicList(props) {
    let {loading,data} = props;
  return (
    <div id='topics_list'>
        <List
            loading={loading}
            className='list'
            dataSource={data}
            renderItem={(item)=>{
                return <List.Item>
                    <Col xs={24} md={20}>
                        <Link to={`/user/${item.author.loginname}`} >
                            <Avatar title={item.author.loginname} src={item.author.avatar_url} icon={<UserOutlined />} size={45} />
                        </Link>
                        <TopicTag tab={item.top?'top':(item.good?'good':item.tab)} />
                        <Link to={`/topic/${item.id}`} >{item.title}</Link>
                    </Col>
                    <Col xs={0} md={4} className='from_now'>
                        <FromNow date={new Date(item.last_reply_at)} />
                    </Col>
                </List.Item>
            }}
        >
        </List>
    </div>
  );
}

export default TopicList;
