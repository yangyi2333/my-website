import React from "react";
import './comment.scss'
import getAgent from "@/utils/getAgent";
import avatar from '@/style/img/avatar.jpg'

class Comment extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            comments:[{
                avatar:avatar,
                name:'隔壁老王',
                content:'要想生活过得去，头上就得带点绿',
                time:'2020-04-05 01:56:10'
            },{
                avatar:avatar,
                name:'隔壁小张',
                content:'跟着我左手一起画个龙，右手划一道彩虹',
                time:'2020-04-05 01:56:10'
            }]
        }
    }
    render() {
        return (
            <div className="comment">
                <div className="comment-btn">
                    <div className="comment-btn-item"></div>
                </div>
                <div className="comment-edit">
                    <CommentAdd> </CommentAdd>
                    {
                        this.state.comments.length > 0 ? this.state.comments.map((item,index)=>{
                            return (
                                <CommentItem key={index} value={item}> </CommentItem>
                            )
                        }) : '这里空空如也~'
                    }
                </div>
            </div>
        );
    }
}

class CommentItem extends React.Component{
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() {
        const data = this.props.value;
        return (
            <div className="comment-item">
                <div className="comment-add-avatar">
                    <img src={data.avatar} alt="" style={{maxWidth:'100%',maxHeight:'100%'}}/>
                </div>
                <div className="comment-item-content">
                    <div className="comment-item-title">
                        <span className="comment-item-name">{data.name}</span>
                        <span className="comment-item-time">{data.time}</span>
                    </div>
                    <div className="comment-item-text">
                        {data.content}
                    </div>
                </div>
            </div>
        );
    }
}

class CommentAdd extends React.Component{
    constructor(props) {
        super(props);
        this.state={
            content:'',
        }
    }
    render() {
        return (
            <div className="comment-add">
                <div className="comment-add-avatar">
                    <img src={avatar} alt="" style={{maxWidth:'100%',maxHeight:'100%'}}/>
                </div>
                <div className="comment-add-btn">
                    发 表
                </div>
                <div className="comment-add-textarea">
                    <textarea name="" id="" rows="2" placeholder="说点什么吧~"/>
                </div>
            </div>
        );
    }
}

export default Comment