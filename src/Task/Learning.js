import React from 'react'

function Learning() {
    const myObj = {
        name: 'vmn',
        age: 20,
    };

    const myObjStr = JSON.stringify(myObj);
    //   console.log(myObjStr);
    //   console.log(JSON.parse(myObjStr));

    let vals = [1, 2, 3, 4, 5]

    let ans = vals.reduce((acc, val) =>
        acc + val, 0);
    //   console.log(ans);

    let max = [1, 2, 3, 4, 5]
    function findMax(acc, val) {
        if (val > acc) {
            acc = val
        }
        return acc;
    }
    let maxValue = max.reduce(findMax)
    //   console.log( 'Max value is',maxValue);

    let min = [1, 2, 3, 4, 5]
    //   function findMin(acc,val){
    //       if(val<acc){
    //           acc=val
    //       }
    //       return acc;
    //   }
    let minValue = min.reduce((acc, val) => {
        return acc > val ? acc : val
    }
    )
    // console.log('minvalue is: ', minValue);

    var name1 = ["vmn", "yash"];
    var name2 = ["jay", "hardik"];
    var concate = name1.concat(name2);
    // console.log('concate is',concate);
    // console.log('fill method',name1.fill("Kiwi"));
    // console.log(name1.join());

    var ages = [32, 33, 16, 40];
    function checkAdult(age) {
        return age <= 18;
    }
    // console.log(ages.every(checkAdult));

    // var myArr =  Array.from("ABCDEFG");
    // console.log(myArr);

    let myArr = ["Fan", "Camera", 34, null, true];
    // console.log(myArr.length)
    // myArr.pop();
    // console.log(myArr);
    // myArr.push("harry")
    // console.log(myArr);
    // myArr.shift()
    // console.log(myArr);
    // const newLen = myArr.unshift("Harry")
    // console.log(newLen);
    // console.log(myArr.includes("Camera"));
    // console.log(myArr.indexOf("Camera"));
    console.log(myArr.slice(1, 3));

    const months = ['Jan', 'March', 'April', 'June'];
    months.splice(0, 8, 'Feb');
    console.log(months);
  
    let sortMehod = [2, 4, 1, 3]
    // console.log(sortMehod.sort());

    return (
        <div>

        </div>
    )
}

export default Learning
