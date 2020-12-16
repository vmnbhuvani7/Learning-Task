import React from 'react'

const Array = () => {
    const arr = [14, 2, 3, 5, 6, [12, 56], 45, 12, [[12, [15,13]]]];

    const result = [];

    const rec = (arr) => {
        for (let index = 0; index < arr.length; index++) {
            if (!arr[index].length) {
                result.push(arr[index])
            }
            else {
                rec(arr[index]);
            }
        }
    }



    for (let index = 0; index < arr.length; index++) {
        console.log("arr[index].length0", arr[index].length);
        if (!arr[index].length) {
            result.push(arr[index])
        }
        else {
            rec(arr[index]);
        }
    }

    console.log(result)
    return (
        <div>

        </div>
    )
}

export default Array
