import React, { useContext } from 'react'
import { FirstName } from './Parent'

function Childe1() {
    const fname = useContext(FirstName)

    return (
        <h3>My New Name is {fname.name.name}</h3>
    )
}

export default Childe1
