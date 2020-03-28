import React from "react";
import './content.scss'
/**
 * 首页
 */

export default class HomeContent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentTime:'',
            greeting:{
                title:'',
                subtitle:''
            }
        }
    }

    componentDidMount() {
        this.getTime();
        setInterval(this.getTime.bind(this),1000);
    }
    getTime(){
        const date  = new Date();
        let hour = date.getHours();
        let minute = date.getMinutes();
        let second = date.getSeconds();

        //这样写显示时间在1~9会挤占空间；所以要在1~9的数字前补零;
        let greeting = {
            title:'',
            subtitle:''
        };
        if (hour < 6) {
            greeting.title = 'Good Night';
            greeting.subtitle = '一起修仙啊';
        }else if(hour < 12){
            greeting.title = 'Good Morning';
            greeting.subtitle = '今天也是元气满满的一天';
        }else if(hour < 19){
            greeting.title = 'Good Afternoon';
            greeting.subtitle = '累了，就停下来休息一会儿吧';
        }else if(hour < 22){
            greeting.title = 'Good Evening';
            greeting.subtitle = '夜生活才刚刚开始';
        }else{
            greeting.title = 'Good Night';
            greeting.subtitle = '一起修仙啊';
        }
        if (hour < 10) {
            hour = '0' + hour;
        }
        if (minute < 10) {
            minute = '0' + minute;
        }
        if (second < 10) {
            second = '0' + second;
        }
        this.setState({currentTime:`${hour} : ${minute} : ${second}`,greeting})
    }
    render(){
        return (
            <div className="home-content">
                <div className="main-content-bg-box1"></div>
                <div className="main-content-bg-box2"></div>
                <div className="home-content-box">
                    <div className="home-content-time">{this.state.currentTime}</div>
                    <div className="home-content-text">
                        <div className="home-content-title">{this.state.greeting.title}</div>
                        <div className="home-content-subtitle">{this.state.greeting.subtitle}</div>
                    </div>
                </div>
            </div>
        )
    }
}