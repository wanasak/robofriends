import React, { Component } from 'react';

class CounterButton extends Component {
    constructor() {
        super();
        this.state = {
            count: 0
        };
    }
    
    // You can use PureComponent instead implment shouldComponentUpdate by yourself
    // but PureComponent is not working in case of object because it use shallow // comparison of props
    shouldComponentUpdate(nextState) {
        if (this.state.count !== nextState.count) {
            return true;
        } else {
            return false;
        }
    }

    updateCount = () => {
        // this.setState({ count: this.state.count + 1 });
        this.setState(state => {
            return { count: state.count + 1 };
        });
    }

    render() {
        console.log('CounterButton');
        
        return (
            <button color={this.props.color} onClick={this.updateCount}>
                count: {this.state.count}
            </button>
        );
    }
}
    
export default CounterButton;