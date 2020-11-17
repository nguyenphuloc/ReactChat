import React from 'react';
import './index.scss';

export default class User extends React.Component {
    render() {
        return (
            <div className="user-item" onClick={this.props.handleChoiceUser}>
                <img src={this.props.usersImg} alt='usersImage' />
                <p>{this.props.name}</p>
            </div>
        );
    }
}