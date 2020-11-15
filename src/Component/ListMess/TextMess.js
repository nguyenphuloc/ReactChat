import React from 'react';
import '../../styles/TextMess.scss';

export default class TextMess extends React.Component {
    render() {
        return(
            <div className="TextMess">
                
                <p>{this.props.mess}</p>
            </div>
        );
    }
}