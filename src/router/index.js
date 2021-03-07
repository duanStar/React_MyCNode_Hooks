import React from 'react';
import {Switch,Route} from 'react-router-dom';
import routes from './routes';

function Routes(props){
    return (
        <Switch>
            {routes.map((item,index)=>{
                return <Route key={index} path={item.path} exact={item.exact} render={(props)=>{
                    return item.render(props);
                }} />
            })}
        </Switch>
    )
}

export default Routes;
