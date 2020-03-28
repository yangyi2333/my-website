import React from "react";
import icon_like from '@/style/img/like.png'
import icon_msg from '@/style/img/comment.png'
import icon_personal from '@/style/img/personal.png'
import icon_setting from '@/style/img/setting.png'
import './sider.scss'
/**
 * 首页
 */
const menu = [{
    text:'点赞',
    icon:icon_like
},{
    text:'留言',
    icon:icon_msg
},{
    text:'信息',
    icon:icon_personal
},{
    text:'设置',
    icon:icon_setting
}];
export default class HomeSider extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentIndex:0,
        }
        this.upload = 0
    }

    render(){
        return (
            <div className="home-sider">
                <ul className="home-sider-box">
                    {
                        menu.map((item,index)=>{
                            return (<li key={item.text} className={`home-sider-item`}>
                                        <div className={`home-sider-img home-sider-img-${index+1}`}>
                                            <img src={item.icon} alt=""/>
                                        </div>
                                        <p>{item.text}</p>
                                    </li>)
                        })
                    }
                </ul>
            </div>
        )
    }
}