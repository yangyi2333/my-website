import React from 'react'
import './404.scss'

/**
 * @name 404页面组件
 */
export default class NotFind extends React.Component{
    render(){
        return(
            <div className="box_404">
                <div>
                    <h1>404</h1>
                    <h3>NOT FIND</h3>
                    <span onClick={()=>{React.history.go(-1)}}>GO BACK</span>
                </div>
            </div>
        )
    }
}