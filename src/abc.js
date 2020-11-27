import React from 'react'

function Abc() {
    // let value = '';
    let value = '';
    let a = {
        stepA: {
            step: {
                a: "aaa",
                b: 'bbb'
            },
            f: "fff"
        },
        stepD: "ddd",
        stepE: {
            e: "eee"
        }
    }
    // console.log(a);
    // console.log(Object.keys(a));

    // Object.keys(a).map((item1)=>{        
    // console.log("item key",item1)
    Object.values(a).map((item) => {
        // console.log(item);
        if (typeof item === "object") {
            Object.values(item).map((item1) => {
                // Object.keys(a).map((item1)=>{        
                //     console.log("item key",item),
                // })
                // console.log(Object.keys(item));
                if (typeof item1 === "object") {
                    Object.values(item1).map((item) => {
                        console.log(item);
                        console.log(item1);
                        Object.keys(item1).filter((item8) => {
                            console.log(item8);
                        })
                        Object.keys(item1).map((item2) => {
                            if (typeof item === "object") {
                                // return  console.log("item in if",item);
                            }
                            else {
                                // value = value + item + '.' 
                                // console.log(item2, item);
                                // console.log(item);
                            }
                            // console.log( item2 ,item);
                        })
                    })
                    Object.keys(item1).filter((item6) => {
                        let aaa = Object.keys(a).map((item7) => {
                            // console.log(item7),
                            // console.log(item7 === item6)
                            // Object.keys(item6).map((item4) => {
                            //     // console.log(`${item4}.${item1}`, item4),
                            //     console.log(`${item4}`, item1)
                            // })
                            if (item7 === item6) {
                                console.log(item6);
                            }
                            return console.log("item6 item7", item6, item7);
                        });
                        // console.log("aaa", aaa);
                    })

                }
                else {
                    Object.keys(a).filter((item6) => {
                        return console.log("filter", item6);
                    })

                    const aaa = Object.keys(item).map((item4) => {
                        // console.log(`${item4}.${item1}`, item4),
                        // return console.log(`${item1}.${item4}`, item1)
                        return item4
                    })
                    console.log(aaa);
                    // value = value + item + '.' 
                }
            })
            // return  console.log("item in if",item);
        }
        else {
            // console.log(value);
            // value = value + item + '.'
            // console.log(item);
        }
    })
    // })
    return (
        <div >
        </div>
    )
}
export default Abc
