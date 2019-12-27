import React, { Component } from 'react';
import '../../assets/home.scss';
import './index.scss';
import { Button } from 'antd';

// import { Card, WingBlank, WhiteSpace } from 'antd-mobile';
export default class Product extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="product">
                <h1 className="h-txt">This is product Page!!!</h1>
            </div>
        )
    }
}