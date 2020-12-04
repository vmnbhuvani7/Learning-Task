import React, { Component } from 'react'
import Army from './Army'

export class Rahul extends Component {
    render() {
        console.log("this.props.hochandleGunshot",this.props.hochandleGunshot);
        console.log("this.props.hochandleGunshot",this.props.hocgunName);
        return (
            <div>
                <h3 onMouseOver={this.props.hochandleGunshot}>
                     Rahul {this.props.hocgunName} Gun shot {this.props.hocgunShot}</h3>
            </div>
        )
    }
}

export default Army(Rahul,20)
