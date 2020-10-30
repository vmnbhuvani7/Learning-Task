import React, { createContext } from 'react'
import Childe from './Childe'

const FirstName = createContext()
const LastName = createContext()

const Parent=()=> {
    return (
            <FirstName.Provider value={"vmn"}>
                <LastName.Provider value={"bhuvani"}>
                    <Childe />
                </LastName.Provider>
            </FirstName.Provider>
    )
}

export default Parent
export { FirstName };
export { LastName };
