import React, { Component } from 'react'
import InputRef from './InputRef'

export class FocusInput extends Component {
    constructor(props) {
        super(props)
        this.componentRef = React.createRef()
    }
    clickHandler = () =>{
        this.componentRef.current.focus()
    }
    render() {
        return (
            <div className="App">
                <InputRef  ref={this.componentRef} />
                <button onClick={this.clickHandler}>Focus</button>
            </div>
        )
    }
}

export default FocusInput
