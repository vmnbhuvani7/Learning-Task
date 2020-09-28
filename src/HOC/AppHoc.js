import React, { Component } from 'react'

import Rahul from './Rahul'
import Sonal from './Sonal'

export class AppHoc extends Component {
    render() {
        return (
            <div>
                <Rahul rang='120' />
                <Sonal rang='1207'/>
            </div>
        )
    }
}

export default AppHoc
