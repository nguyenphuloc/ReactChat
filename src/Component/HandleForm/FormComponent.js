import React from 'react';

export default class FormComponent extends React.Component {
    render() {
        return(
            <div className="FormComponent">
                <form>
                    <input 
                        value={this.props.value}
                    />
                    <button
                        onClick={() => this.props.send()}
                    >
                        Send
                    </button>
                </form>
            </div>
        );
    }
}