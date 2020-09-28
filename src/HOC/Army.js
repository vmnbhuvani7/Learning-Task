import React, { Component } from 'react'

const Army = (Men, Shot) => {

    class NewMen extends Component {
        state = {
            gunShot: 0
        }
        handleGunshot = () => {
            this.setState({
                gunShot: this.state.gunShot + Shot
            })
        }

        render() {
            console.log(this.props.rang);
            return <Men 
            hocgunName="AK47" 
            hocgunShot = {this.state.gunShot}
            hochandleGunshot = {this.handleGunshot}
            />
        }
    }

    return NewMen
}

export default Army
