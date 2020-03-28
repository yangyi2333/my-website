import React from "react";
import Header from './components/header'
import Sider from './components/sider'
import {Route} from 'react-router-dom'
import routeList from '@/route/config'
import './home.scss'
/**
 * 首页
 */

export default class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
        this.upload = 0
    }

    render(){
        return (
            <div className="main">
                <Header/>
                <div className="main-center">
                    <Sider/>
                    <div className="main-content">
                        {
                            routeList.map(item=>{
                                return (
                                    <Route exact path={item.path} key={item.path} component={item.component}></Route>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        )
    }
}