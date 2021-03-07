import React from 'react';
import {Link} from 'react-router-dom';
import {Card,List,Comment,Avatar} from 'antd';
import { UserOutlined } from '@ant-design/icons';
import FromNow from '../../component/fromNow';

function Replies(props) {
    let {loading,data=[]} = props;
    data.reverse();
    return (<Card
        title="评论列表"
        loading={loading}
        type='inner'
    >
        <List
            dataSource={data}
            renderItem={(item)=>{
                return <List.Item>
                    <Comment
                        author={item.author.loginname}
                        avatar={
                            <Link to={`/user/${item.author.loginname}`}><Avatar src={item.author.avatar_url} icon={<UserOutlined />} title={item.author.loginname} /></Link>
                        }
                        content={<div dangerouslySetInnerHTML={{
                            __html:item.content
                        }}></div>}
                        datetime={<time>发表于：{<FromNow date={item.create_at} />}</time>}
                    ></Comment>
                </List.Item>
            }}
            pagination={{
                pageSize:5,
                simple:true
            }}
        >

        </List>
    </Card>)
}

export default Replies;