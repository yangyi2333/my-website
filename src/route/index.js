import React from 'react';
import Loadable from 'react-loadable';
import {Route, Switch, Redirect,withRouter} from 'react-router-dom'
import Home from '@/pages/home'

//通用的过场组件
const loadingComponent =()=>{
    return (
        <div>loading</div>
    )
}

//过场组件默认采用通用的，若传入了loading，则采用传入的过场组件
const loadable = (loader,loading = loadingComponent)=>{
    return Loadable({
        loader,
        loading
    });
}
// 404页面
const NotFind = loadable(()=>import('../pages/404'));

class routes extends React.Component {
    constructor(props) {
        super(props);
        this.state={

        }
    }
    render() {
        return (
            <Switch>
                {/*<Route exact path="/" component={ Home } />*/}
                <Route exact path='/404' component={ NotFind }/>
                <Home></Home>
                <Redirect to="/404"/>
            </Switch>
        );
    }
}
export default withRouter(routes)