import React, { Component } from 'react'
import Army from './Army'

export class Sonal extends Component {
    
    render() {
        return (
            <div>
                <h3 onMouseOver={this.props.hochandleGunshot}>
                    Sonal {this.props.hocgunName} Gun shot {this.props.hocgunShot}</h3>
            </div>
        )
    }
}

export default Army(Sonal,10)
