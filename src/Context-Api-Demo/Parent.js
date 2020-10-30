import React, { createContext, useState } from 'react'
import Childe from './Childe'

const FirstName = createContext()

const Parent = () => {

    const [Info, setInfo] = useState({
        name: "vmn"
    })
    const [Value, setValue] = useState()

    const changeHandler = (data) => {
        setInfo({
            name: data
        })
    }
    // const changeData = (e) => {
    //     setValue(e.target.value)
    // }

    const data = {
        name: Info,
        changeHandler: (data) => changeHandler(data),
        // changeData: changeData
    }
    return (
        <FirstName.Provider value={data}>
            <Childe />
        </FirstName.Provider>
    )
}

export default Parent
export { FirstName };
