import React, { Fragment } from 'react';
import {Card} from 'antd';
import TopicTag from '../../component/topicTag';
import { Link } from 'react-router-dom';
import FromNow from '../../component/fromNow';

function Details(props) {
    let {loading,data} = props;
    let {author,content,last_reply_at,title,visit_count,top,tab,good} = data;
    return (
        <Card
            id='details'
            type='inner'
            bordered
            loading={loading}
            title={<Fragment>
                <h1>{<TopicTag tab={top?'top':(good?'good':tab)} />} {title}</h1>
                <p>
                    - 作者: <Link to={`/user/${author.loginname}`}>{author.loginname} </Link> 
                    - 创建时间: <FromNow date={last_reply_at} />
                    - 浏览人数: {visit_count} 
                </p>
            </Fragment>}
        >
            <div dangerouslySetInnerHTML={{
                __html:content
            }}></div>
        </Card>
    )
}

export default Details;