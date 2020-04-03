import React from "react";
import getAgent from "@/utils/getAgent";
import './content.scss'
/**
 * 首页
 */
const SCREEN_HEIGHT = document.documentElement.clientWidth * 2 / 3;
export default class HomeContent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentHour:'',
            currentMinute:'',
            currentSecond:'',
            greeting:{
                title:'',
                subtitle:''
            },
            bgImgList:[
                require("./banner.jpg"),
                require("./banner1.jpg"),
                require("./banner2.jpg"),
                require("./banner3.jpg"),
            ],
            currentImgIndex:null,
            imgDom:''
        }
    }

    componentDidMount() {
        this.getTime();
        this.imgRandom();
        this.setState({myTimer:setInterval(this.getTime.bind(this),1000),imgTimer:setInterval(this.imgRandom.bind(this),1*3*1000)});
    }
    componentWillUnmount(){
        clearInterval(this.state.myTimer)
        clearInterval(this.state.imgTimer)
    }
    //图片随机展示的方法
    imgRandom(){
        let {currentImgIndex} = this.state;
        // 计算一个随机数
        const index = Math.floor(Math.random() * this.state.bgImgList.length);
        // 随机展示一个图片
        if(index !== currentImgIndex){
            console.log(index,currentImgIndex)
            let imgDom = '',newBgImg = this.state.bgImgList[index];
            imgDom = (
                <div className="home-banner" style={getAgent ? {height:SCREEN_HEIGHT} :{}}>
                    <div className="home-banner-item">
                        <img src={currentImgIndex != null ? this.state.bgImgList[currentImgIndex] : newBgImg} alt=""/>
                    </div>
                    <div className="home-banner-newItem home-banner-fadeIn">
                        <img src={newBgImg} alt=""/>
                    </div>
                </div>
            )
            // this.setState({imgDom,currentImgIndex:index})
            this.setState({imgDom:''},()=>{
                this.setState({imgDom,currentImgIndex:index})
            })
        }
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
        this.setState({currentHour:hour,currentMinute:minute,currentSecond:second,greeting})
    }
    render(){
        return (
            <div className="home-content">
                    {
                        this.state.imgDom
                    }
                <div className="home-content-box" style={getAgent ? {height:SCREEN_HEIGHT - 40} :{}}>
                    <div className="home-content-text">
                        <div className="home-content-title">{this.state.greeting.title}</div>
                        <div className="home-content-time">
                            <span>{this.state.currentHour}</span>:
                            <span>{this.state.currentMinute}</span>:
                            <span>{this.state.currentSecond}</span>
                        </div>
                        <div className="home-content-subtitle">{this.state.greeting.subtitle}</div>
                    </div>
                </div>
            </div>
        )
    }
}