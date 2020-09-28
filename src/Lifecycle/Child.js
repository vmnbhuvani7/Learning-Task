import React, { Component } from 'react'

export class Child extends Component {
    componentDidMount(){
        console.log("Child component mounet");
    }
    render() {
        console.log(" child  Render ");
        return (

            <div>
                <h1>Child Component</h1>
            </div>
        )
    }
}

export default Child
