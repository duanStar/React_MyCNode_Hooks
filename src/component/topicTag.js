import React from 'react';
import {Tag} from 'antd';

const tags ={
    good:{
        color:'#f50',
        txt:'精华'
    },
    top:{
        color:'#87d068',
        txt:'置顶'
    },
    share:{
        color:'green',
        txt:'分享'
    },
    ask:{
        color:'gold',
        txt:'问答'
    },
    job:{
        color:'blue',
        txt:'招聘'
    },
    dev:{
        color:'purple',
        txt:'测试'
    }
}

function setTag(tab) {
    if(tab==='top'){
        return tags.top;
    } else if(tab==='good'){
        return tags.good;
    }else{
        return tags[tab];
    }
}

function TopicTag(props) {
    let tag = setTag(props.tab);
    return (
        <Tag className='topic_tag' color={tag?tag.color:'#fff'}>{tag?tag.txt:"  "}</Tag>
    );
}

export default TopicTag;