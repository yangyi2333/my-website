import React from "react";
import getAgent from "@/utils/getAgent";
import axios from 'axios'
import './vlogDetail.scss'
import avatar from '@/style/img/avatar.jpg'
import Comment from '@/components/comment.js'
// import {avator} from '@/components/mySvg.js'
import view_img from '@/style/icon/view.png'


/**
 * VLOG页面
 */

export default class VlogDetail extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data:{
                title:'【临江仙】vlog02 | 12月的生活记录 | 银杏拍照攻略 | 成都诺亚方舟 | 成人学钢琴',
                date:'2020-01-09 21:54:01',
                tags:['JavaScript','React','工作'],
                stars:10,
            }
        }
    }
    callbackfunction(){

    }
    getVideo(){
    }
    componentDidMount() {
        this.getVideo()
    }

    render(){
        return (
            <div className="vlog-detail">
                <div className="vlog-content">
                    <div className="vlog-content-abstract">
                        <div className="vlog-content-title">{this.state.data.title}</div>
                        <div className="vlog-content-tags">{
                            this.state.data.tags.map(item=>{
                                return <span className="vlog-content-tags-item">{item}</span>
                            })}
                        </div>
                        <div className="vlog-content-data">
                            <span>{this.state.data.date}</span>
                            <span style={{float:'right'}}>
                                <img src={view_img} alt="" style={{marginTop:'1px',float:'left'}}/>
                                {this.state.data.stars}
                            </span>
                        </div>
                    </div>
                    <div className="vlog-display">
                        <div className="vlog-display-box">
                            <video autoplay="autoplay" controls="controls" style={{width:'100%',height:'100%'}}>
                                <source src="http://file.nextlord.com/15f405d4-a141-4453-80fb-70d44cf3616e.mp4	" type="audio/ogg" />
                            </video>
                        </div>
                    </div>
                    <Comment></Comment>
                </div>
                {
                    !getAgent &&
                    <div className="my-card">
                        <div className="my-card-avatar">
                            <img src={avatar} alt="" style={{width:'100%',height:'100%'}}/>
                        </div>
                        <div className="my-card-description">
                            有招不放，憋坏心脏
                        </div>
                        <div>
                            <button className="my-card-btn">留 言</button>
                        </div>
                    </div>
                }
            </div>
        )
    }
}