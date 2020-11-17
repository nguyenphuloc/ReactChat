import React from 'react';
import "./index.scss";

export default class HandleForm extends React.Component {
    render() {
        return (
            <div className="form-container">
                <form onSubmit={this.props.submitForm}>
                    <input
                        value={this.props.value}
                        onChange={this.props.onChangeInput}
                    />
                    <button>Send</button>
                </form>
            </div>
        );
    }
}