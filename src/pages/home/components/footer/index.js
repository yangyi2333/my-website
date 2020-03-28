import React from "react";
import './footer.scss'
/**
 * 首页
 */

export default class HomeHeader extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    componentWillMount() {

    }
    render(){
        return (
            <div className="home-footer">
                Copyright © 2020-xxxx XXXX  备案号：xxxxxxxxxx
            </div>
        )
    }
}