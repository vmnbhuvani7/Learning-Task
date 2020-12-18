import React from 'react'

const Sort = () => {
    const array = [
        {
            "nickname": "Joe",
            "score": 500

        },
        {
            "nickname": "Grant",
            "score": 300

        },
        {
            "nickname": "Amy",
            "score": 200

        },
        {
            "nickname": "Steve",
            "score": 200

        },
        {
            "nickname": "Bob",
            "score": 100

        }
    ]


    array.sort(function (a, b) {
        return a.score - b.score;
    });
    console.log(array);
    var rank = 1;
    for (var i = 0; i < array.length; i++) {
        if (i > 0 && array[i].score > array[i - 1].score) {
            rank++;
        }
        array[i].rank = rank;
    }

    console.log(array);

    //other
    array.sort(function (a, b) {
        if (a.nickname < b.nickname)
            return -1;
        if (a.nickname > b.nickname)
            return 1;
        return 0;
    });
    console.log(array);

    var rank = 1;
    for (var i = 0; i < array.length; i++) {
        if (i > 0 && array[i].nickname > array[i - 1].nickname) {
            rank++;
        }
        array[i].rank = rank;
    }

    console.log(array);
    return (
        <div>

        </div>
    )
}

export default Sort
