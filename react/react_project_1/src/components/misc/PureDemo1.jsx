import React, { Component, PureComponent } from 'react';

// class PureDemo1 extends Component {
class PureDemo1 extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            courseName: 'ReactJS Training'
        };
    }
    handleUpdateCourse = () => {
        this.setState({
            courseName: 'ReactJS Training'
        });
    };
    render() {
        console.log('PureDemo1 rendering...')
        return (
            <div>
                <h2>Course Name: {this.state.courseName}</h2>
                <button onClick={this.handleUpdateCourse}>
                    Update Course Name
                </button>
            </div>
        );
    }
}
export default PureDemo1;