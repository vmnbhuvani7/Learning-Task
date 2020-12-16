import React, { useContext, useEffect, useState } from 'react'
import { FirstName, LastName } from './Parent'

const Childe = () => {
    // Hook
    const fname = useContext(FirstName)
    const lname = useContext(LastName)
    const [Fname, setFname] = useState(fname)

    useEffect(() => {
        setFname("vaman")
    }, [Fname])
    
    return (
        <>
            {/* Hook used */}
            <h1>My fname is {fname}</h1>
            <h1>My lname is {lname}</h1>

            {/* without hook */}
            {/* <FirstName.Consumer>
                {(fname) => {
                    return (
                        <>
                            <LastName.Consumer>
                                {(lname) => {
                                    return (<p>my lname is {lname}</p>)
                                }}
                            </LastName.Consumer><p>my fname is {fname}</p>
                        </>
                    )
                }}
            </FirstName.Consumer> */}

        </>
    )
}

export default Childe
