import React,{useEffect} from 'react';
import {Card} from 'antd';
import IndexNav from './indexNav';
import TopicList from '../../component/topicList';
import {useSelector} from 'react-redux';
import {useTopicsList} from '../../store/action/index';
import { useLocation } from 'react-router-dom';
import qs from 'qs';
import IndexPagination from './indexPagination';

function Index() {
  let {data,loading} = useSelector(state => state.topics);
  let {search} = useLocation();
  let {tab='all',page=1} = qs.parse(search.substr(1));
  let getData = useTopicsList();
  useEffect(()=>{
    getData({
      tab,
      page
    });
  },[tab,page]);
  return (
    <div id='index_card'>
        <Card
          title={<IndexNav />}
          bordered
        >
            <TopicList loading={loading} data={data} />
            <IndexPagination />
        </Card>
    </div>
  );
}

export default Index;
