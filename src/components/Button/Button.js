import React, {Component} from 'react';

class Button extends Component {

    render() {
        return (
            <button onClick={()=>{this.props.new(this.props.amount)}}>New Joke</button>
        );
    }
}
export default Button;