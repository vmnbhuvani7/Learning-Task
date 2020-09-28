import React, { Component } from 'react'

export class RefDemo extends Component {
    constructor(){
        super();
        this.inputRef = React.createRef()
        this.cbRes = null
        this.setCbRef = element => {
            this.cbRes = element
        }
    }

    componentDidMount(){
        if(this.cbRes){
            this.cbRes.focus();
        }
        // console.log(this.inputRef);
        // this.inputRef.current.focus()
    }
    clickHandler = () => {
        alert(this.inputRef.current.value)
    }
    render() {
        return (
            <div>
                <input type='text' ref={this.inputRef} placeholder="text" />
                <input type='text' ref={this.setCbRef} placeholder="text" />
                <button onClick={this.clickHandler}>click</button>
               
            </div>
        )
    }
}

export default RefDemo
