import React, { useState } from 'react'

function Collapse() {
    const [collapse, setCollapse] = useState({
        a: false,
        b: false,
        c: false
    })
    const aa = () => {
        setCollapse({
            a: true,
            b: false,
            c: false,
        })
    }
    const bb = () => {
        setCollapse({
            a: false,
            b: true,
            c: false,
        })
    }
    const cc = () => {
        setCollapse({
            a: false,
            b: false,
            c: true,
        })
    }
    return (
        <div>
            <p onClick={aa}>Collapsible Group Item #1  </p>
            {collapse.a && (
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.   </p>
            )}
            <p onClick={bb}>Collapsible Group Item #2  </p>
            {collapse.b && (
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
            )}
            <p onClick={cc}>Collapsible Group Item #3  </p>
            {collapse.c && (
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
            )}
        </div>
    )
}

export default Collapse
