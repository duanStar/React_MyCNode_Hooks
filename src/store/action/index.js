import http from './http';
import {useDispatch} from 'react-redux';

//获取主题列表
function useTopicsList() {
    const dispatch = useDispatch();
    return function ({tab='all',page=1,limit=20,mdrender=true}) {
        dispatch({
            type:"TOPIC_LOADING"
        });
        http.get('/topics',{
            params:{
                tab,
                page,
                limit,
                mdrender
            }
        }).then(res=>{
            dispatch({
                type:"TOPIC_LOADOVER",
                data:res.data.data
            });
        });
    }
}

//获取主题详情
function useTopicDetail() {
    let dispatch = useDispatch();
    return function ({id}) {
        dispatch({
            type:'DETAILS_LOADING'
        });
        http.get(`/topic/${id}`).then(res=>{
            dispatch({
                type:"DETAILS_LOADOVER",
                data:res.data.data
            });
        }).catch(err=>{
            dispatch({
                type:'DETAILS_ERROR',
                err_msg:err.response.data.error_msg
            });
        });
    }
}

//获取用户信息
function useUserInfo() {
    let dispatch = useDispatch();
    return function ({username}) {
        dispatch({
            type:'USER_LOADING'
        });
        http.get(`/user/${username}`).then(res=>{
            console.log(res.data.data);
            dispatch({
                type:"USER_LOADOVER",
                data:res.data.data
            });
        }).catch(err=>{
            dispatch({
                type:'USER_ERROR',
                err_msg:err
            });
        });
    }
}

export {
    useTopicsList,
    useTopicDetail,
    useUserInfo
}