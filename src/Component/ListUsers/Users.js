import React from 'react';
import '../../styles/Users.scss';

export default class Users extends React.Component {
    render() {
        return(
            <div className="Users">
                <div className="UserName">
                    <img  src={this.props.usersImg} alt='usersImage' />
                    <p>{this.props.names}</p>
                </div>
                
            </div>
        );
    }
}