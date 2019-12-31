import React, { Component } from 'react';
import { connect } from 'react-redux'
import '../../assets/home.scss';
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
                <h1 className="h-txt">This is Home Page!!!</h1>
                <Button>32</Button>
            </div>
        )
    }
}