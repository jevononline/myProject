import React, { Component } from 'react';
import './index.scss';
import { Button } from 'antd';

// import { Card, WingBlank, WhiteSpace } from 'antd-mobile';
export default class Count extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="home">
                {this.props.children}
            </div>
        )
    }
}