import React from 'react'

const InputRef = React.forwardRef((props,ref) => {
    return (
        <div>
            <input type='text' ref={ref} />
        </div>
    )
})

export default InputRef
