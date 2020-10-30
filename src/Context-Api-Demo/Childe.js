import React, { useContext, useState } from 'react'
import Childe1 from './Childe1'
import { FirstName } from './Parent'

const Childe = () => {
    const fname = useContext(FirstName)
    const [value, setValue] = useState('')

    const changeData = (e) => {
        setValue(e.target.value)
    }


    return (
        <>
            <h3>My Old Name is {fname.name.name}</h3>
            <input type="text" onChange={changeData} />
            <button className="btn btn-primary ml-3" onClick={() => fname.changeHandler(value)}>Submit</button>
            <Childe1 />

        </>
    )
}

export default Childe
