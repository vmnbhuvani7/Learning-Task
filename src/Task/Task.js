import React from 'react'

const Task = () => {
    const name = "jay  ani har  dik"
    // console.log(name.replace("hardik", "Vmn"));
    // console.log(name.trim());
    console.log(name.replaceAll(" ", ''));

    const data = [
        {
            name: "hardik", Ed: "BBA"
        },
        {
            name: "jay", Ed: "BCA"
        },

        {
            name: "vaman", Ed: "BBA"
        },

        {
            name: "paras", Ed: "BCA"
        },
    ]
    // console.log(data);
    let bca = data.filter((ed) => {
        return ed.Ed === "BCA"
    })
    // console.log(bca);

    let bba = data.filter((ed) => {
        return ed.Ed === "BBA"
    })
    // console.log(bba);

    const salary = [
        {
            name: "hardik", sa: "10000"
        },
        {
            name: "jay", sa: "8900"
        },

        {
            name: "vaman", sa: "5000"
        },
        {
            name: "paras", sa: "4000"
        },
        {
            name: "paras", sa: "2000"
        },
        {
            name: "hardik", sa: "2000"
        },
    ]
    // console.log(salary);
    // let mergeSalary = salary.map((sal) => {
    //     debugger
    //     if (sal.name === 1000) {
    //         return sal
    //     }
    // })
    // console.log(mergeSalary);

    return (
        <div>
        </div>
    )
}

export default Task
