import React, { useMemo, useState } from 'react'
import AnotherComponent from './AnotherComponent'

function Memo() {
    const [count, setcount] = useState(0)
    const [count1, setcount1] = useState(0)

    const handleClick = () => {
        setcount(count + 1)
    }
    const memoComponent = useMemo(()=>{
        return  <AnotherComponent />
    },[count1])

    return (
        <>
            {count}
            <button onClick={handleClick}>Increase</button>
            <AnotherComponent />
            {memoComponent}
        </>
    )
}

export default Memo
