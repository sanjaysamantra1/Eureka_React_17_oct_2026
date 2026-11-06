import React, { Component } from 'react'

export default class CounterDemo2 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        };
    }
    increment = () => {
        this.setState({ count: this.state.count + 1 });
    }
    render() {
        return (
            <>
                <h3>Counter Example</h3>
                <div>Count:{this.state.count}</div>
                <button className="btn btn-primary" onClick={this.increment}>
                    Increment
                </button>
            </>
        );
    }
}
