import React from "react";
import './header.scss'
import menu_img from '@/style/img/menu.png'
/**
 * 首页
 */
const menu = [{
    text:'HOME',
    path:'/'
},{
    text:'VLOG',
    path:'/vlog'
},{
    text:'BLOG',
    path:'/blog'
},{
    text:'ABOUT',
    path:'/404'
}];
export default class HomeHeader extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentIndex:0,
        }
        this.handleRoute = this.handleRoute.bind(this);
    }

    handleRoute(path,index){
        React.history.push(path)
        this.setState({currentIndex:index})
    }
    componentDidMount() {
        const path = React.history.location.pathname;
        menu.forEach((item,index)=>{
            if(item.path === path){
                this.setState({currentIndex:index})
            }
        })
    }

    render(){
        return (
            <div className="home-header">
                <div className="home-header-links">
                    {
                        menu.map((item,index)=>{
                            return <span key={item.path} className={this.state.currentIndex === index ? 'btn-active' :''}
                                         onClick={()=>{this.handleRoute(item.path,index)}}>{item.text}</span>
                        })
                    }
                </div>
                <div className="home-header-menu">
                    <img src={menu_img} alt=""/>
                </div>
            </div>
        )
    }
}