import React from 'react';
import dayjs from 'dayjs';
const relativeTime = require('dayjs/plugin/relativeTime');
require('dayjs/locale/zh-cn');
// import 'dayjs/locale/zh-cn' // ES 2015 
dayjs.locale('zh-cn'); // 全局使用
dayjs.extend(relativeTime);

function FromNow(props) {
    let {date} = props;
    return dayjs(new Date(date)).fromNow()+' ';
}

export default FromNow;