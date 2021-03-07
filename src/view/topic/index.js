import React,{Fragment, useEffect} from 'react';
import {useSelector} from 'react-redux';
import {useTopicDetail} from '../../store/action/index';
import {useParams,useHistory} from 'react-router-dom';
import {Alert} from 'antd';
import Details from './details';
import Replies from './replies';

function Topic() {
  let {id} = useParams();
  let history = useHistory();
  let getData = useTopicDetail();
  let {loading,data,isError,err_msg} = useSelector(state=>state.details);
  useEffect(()=>{
    getData({
      id
    });
  },[id]);
  return (
    <div>
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
        />:<Fragment>
          <Details loading={loading} data={data} />  
          <Replies loading={loading} data={data.replies} />
        </Fragment>}
    </div>
  );
}

export default Topic;
