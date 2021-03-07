import React,{useEffect,Fragment} from 'react';
import {Card,Row,Avatar,Alert} from 'antd';
import {useParams,useHistory} from 'react-router-dom';
import TopicList from '../../component/topicList';
import { UserOutlined } from '@ant-design/icons';
import {useUserInfo} from '../../store/action/index';
import {useSelector} from 'react-redux';
import FromNow from '../../component/fromNow';

function User() {
  let {loading,data,err_msg,isError} = useSelector(state=>state.user);
  console.log(data);
  let history = useHistory();
  let {username} = useParams();
  let getData = useUserInfo();
  useEffect(()=>{
    getData({
      username
    });
  },[username]);
  return <div>
  {isError?<Alert
    message={"请求出错"}
    type='error' 
    closable 
    showIcon
    description={
      <Fragment>
        <p>{err_msg}</p>
        <p>点击关闭按钮返回上一步</p>
      </Fragment>
    }
    afterClose={()=>{
      history.goBack();
    }}
  />:<div className='user-page'>
  <Card
    loading={loading}
    className='user-card user-detail'
    bordered
  >
    <Row>
      <Avatar style={{margin:'auto'}} title={data.loginname} src={data.avatar_url} icon={<UserOutlined />} size={64}  />
    </Row>
    <div>
      <div style={{marginTop:'20px'}}>用户名：{data.loginname}  注册时间：{<FromNow date={data.create_at} />}  积分：{data.score}</div>
      <div>github：<a target='_blank' href={'https://github.com/'+data.githubUsername}>{'https://github.com/'+data.githubUsername}</a></div>
    </div>
  </Card>
  <Card
    loading={loading}
    title="最近创建的话题"
    type='inner'
    className='user-card'
    bordered
  >
    <TopicList loading={loading} data={data.recent_topics} />
  </Card>
  <Card
    loading={loading}
    title="最近参与的话题"
    type='inner'
    className='user-card'
    bordered
  >
    <TopicList loading={loading} data={data.recent_replies} />
  </Card>
</div>}
  </div>
}

export default User;
