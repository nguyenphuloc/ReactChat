import React from 'react';
import './index.scss';

export default class TextMess extends React.Component {
    render() {
        return (
            <p className="mess-item">{this.props.mess}</p>
        );
    }
}