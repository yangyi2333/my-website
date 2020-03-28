import React from "react";
import getAgent from "@/utils/getAgent";
import './vlog.scss'
import cover01 from '@/style/img/cover01.jpg'
import cover02 from '@/style/img/cover02.png'
/**
 * 首页
 */

export default class Vlog extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data:[{
                img:cover01,
                title:'啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦零零零零hh哈哈哈哈哈哈哈哈哈怕怕怕怕怕怕怕怕',
                time:'2020-01-09 21:54',
                tags:['Javascript','vlog','react'],
                viewNum:10,
                likeNum:5,
                comment:1,
            },{
                img:cover02,
                title:'哈哈哈哈哈哈噢噢噢噢哦哦哦',
                time:'2020-01-09 21:54',
                tags:['Javascript','vlog','react'],
                viewNum:10,
                likeNum:5,
                comment:1,
            },{
                img:cover01,
                title:'啦啦啦啦啦啦啦啦啦啦啦啦啦啦零零零零hh哈哈哈哈哈哈哈哈哈怕怕怕怕怕怕怕怕',
                time:'2020-01-09 21:54',
                tags:['Javascript','vlog','react'],
                viewNum:10,
                likeNum:5,
                comment:1,
            },{
                img:cover02,
                title:'哈哈哈哈哈哈噢噢噢哦哦哦',
                time:'2020-01-09 21:54',
                tags:['Javascript','vlog','react'],
                viewNum:10,
                likeNum:5,
                comment:1,
            },{
                img:cover01,
                title:'啦啦啦啦啦啦啦啦啦啦啦啦啦零零零零hh哈哈哈哈哈哈哈哈怕怕怕怕怕怕怕怕',
                time:'2020-01-09 21:54',
                tags:['Javascript','vlog','react'],
                viewNum:10,
                likeNum:5,
                comment:1,
            },{
                img:cover02,
                title:'哈哈哈哈哈噢噢噢哦哦',
                time:'2020-01-09 21:54',
                tags:['Javascript','vlog','react'],
                viewNum:10,
                likeNum:5,
                comment:1,
            },{
                img:cover01,
                title:'啦啦啦啦啦啦啦啦啦啦啦啦啦零零零hh哈哈哈哈哈哈哈哈怕怕怕怕怕怕怕怕',
                time:'2020-01-09 21:54',
                tags:['Javascript','vlog','react'],
                viewNum:10,
                likeNum:5,
                comment:1,
            },{
                img:cover02,
                title:'哈哈哈哈哈噢噢噢哦',
                time:'2020-01-09 21:54',
                tags:['Javascript','vlog','react'],
                viewNum:10,
                likeNum:5,
                comment:1,
            }]
        }
    }

    render(){
        return (
            <div className="vlog-container">
                <div className="vlog-container-left">
                    <div className="vlog-container-list-title">假装这是个搜索框</div>
                    <div className="vlog-container-list">
                        {
                            this.state.data.map(item=>{
                                return (
                                    <div key={item.title} className="vlog-item">
                                        <div className="vlog-item-img-box">
                                            <img src={item.img} alt="" style={{width:'100%',height:'100%'}}/>
                                        </div>
                                        <div className="vlog-item-content">
                                            <p className="vlog-item-content-title line-limit-2">{item.title}</p>
                                            <div className="vlog-item-content-info">
                                                {
                                                    item.tags.map(item0=>{
                                                        return <span key={item0} className="vlog-item-tags">{item0}</span>
                                                    })
                                                }
                                            </div>
                                            <div className="vlog-item-content-info">
                                                {item.time}
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
                {
                    !getAgent &&
                    <div className="vlog-container-display">

                    </div>
                }
            </div>
        )
    }
}