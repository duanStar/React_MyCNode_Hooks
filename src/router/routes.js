import React from 'react';
import Index from '../view/index';
import About from '../view/about';
import GetStart from '../view/getstart';
import Topic from '../view/topic';
import User from '../view/user';
import Page404 from '../view/page404';
import { Redirect } from 'react-router-dom';
import qs from 'qs';

const typs=['all','good','share','ask','job','dev'];

const routes=[
    {
        path:'/',
        title:"首页",
        exact:true,
        render(props){
            let {location} = props;
            let {search} = location;
            let {tab,page} = qs.parse(search.substr(1));
            if((tab===undefined&&page===undefined)||(typs.includes(tab)&&(page===undefined||page>0))){
                return <Index {...props} />
            }
            return <Page404 {...props} />
        },
        isNav:true
    },
    {
        path:'/topic/:id',
        exact:true,
        render(props){
            return <Topic {...props} />
        }
    },
    {
        path:'/user/:username',
        exact:true,
        render(props){
            return <User {...props} />
        }
    },
    {
        path:'/about',
        title:"关于",
        exact:true,
        render(props){
            return <About {...props} />
        },
        isNav:true
    },
    {
        path:'/getStat',
        title:"新手入门",
        exact:true,
        render(props){
            return <GetStart {...props} />
        },
        isNav:true
    },
    {
        title:"全部",
        path:'/?tab=all',
        exact:true,
        isIndexNav:true
    },
    {
        title:"精华",
        path:'/?tab=good',
        exact:true,
        isIndexNav:true
    },
    {
        title:"分享",
        path:'/?tab=share',
        exact:true,
        isIndexNav:true
    },
    {
        title:"问答",
        path:'/?tab=ask',
        exact:true,
        isIndexNav:true
    },
    {
        title:"招聘",
        path:'/?tab=job',
        exact:true,
        isIndexNav:true
    },
    {
        title:"客户端测试",
        path:'/?tab=dev',
        exact:true,
        isIndexNav:true
    },
    {
        path:'',
        exact:false,
        render(props){
            return <Page404 {...props} />
        }
    }
];

export default routes;